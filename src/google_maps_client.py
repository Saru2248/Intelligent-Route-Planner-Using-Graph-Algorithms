import requests
import json
import os

class GoogleMapsClient:
    """
    Client wrapper for Google Maps Directions & Distance Matrix APIs.
    Integrates live Indian routing statistics into our Graph network.
    Includes a high-fidelity local database of India's highway connections (NH-44, Golden Quadrilateral)
    to allow immediate project execution without a billing key.
    """
    def __init__(self, api_key=None):
        self.api_key = api_key or os.getenv("GOOGLE_MAPS_API_KEY")
        
        # High-fidelity mock backup for major Indian cities
        self.mock_india_nodes = {
            "New Delhi": {"x": 77.20, "y": 28.61, "description": "National Capital of India."},
            "Mumbai": {"x": 72.87, "y": 19.07, "description": "Financial capital and major seaport."},
            "Bengaluru": {"x": 77.59, "y": 12.97, "description": "Silicon Valley of India, IT Hub."},
            "Chennai": {"x": 80.27, "y": 13.08, "description": "Cultural capital and automotive industry hub."},
            "Kolkata": {"x": 88.36, "y": 22.57, "description": "Historical capital and major eastern gateway."},
            "Hyderabad": {"x": 78.48, "y": 17.38, "description": "Technological hub and historical city."},
            "Pune": {"x": 73.85, "y": 18.52, "description": "Educational and manufacturing hub near Mumbai."},
            "Ahmedabad": {"x": 72.57, "y": 23.02, "description": "Industrial textile center in western India."},
            "Jaipur": {"x": 75.78, "y": 26.91, "description": "The Pink City, tourism and heritage center."},
            "Lucknow": {"x": 80.94, "y": 26.84, "description": "Capital of Uttar Pradesh, heritage center."}
        }
        
        # Real-world highway distances (km) and typical driving times (minutes)
        self.mock_india_edges = [
            {"from": "New Delhi", "to": "Jaipur", "distance": 270.0, "speed_limit": 80, "traffic_factor": 1.3},
            {"from": "New Delhi", "to": "Lucknow", "distance": 530.0, "speed_limit": 90, "traffic_factor": 1.1},
            {"from": "New Delhi", "to": "Ahmedabad", "distance": 930.0, "speed_limit": 80, "traffic_factor": 1.2},
            {"from": "Jaipur", "to": "Ahmedabad", "distance": 680.0, "speed_limit": 80, "traffic_factor": 1.2},
            {"from": "Mumbai", "to": "Ahmedabad", "distance": 520.0, "speed_limit": 90, "traffic_factor": 1.4},
            {"from": "Mumbai", "to": "Pune", "distance": 150.0, "speed_limit": 70, "traffic_factor": 1.6},
            {"from": "Mumbai", "to": "Bengaluru", "distance": 980.0, "speed_limit": 80, "traffic_factor": 1.2},
            {"from": "Pune", "to": "Bengaluru", "distance": 840.0, "speed_limit": 80, "traffic_factor": 1.2},
            {"from": "Bengaluru", "to": "Chennai", "distance": 350.0, "speed_limit": 90, "traffic_factor": 1.3},
            {"from": "Bengaluru", "to": "Hyderabad", "distance": 570.0, "speed_limit": 90, "traffic_factor": 1.1},
            {"from": "Chennai", "to": "Hyderabad", "distance": 630.0, "speed_limit": 80, "traffic_factor": 1.2},
            {"from": "Chennai", "to": "Kolkata", "distance": 1660.0, "speed_limit": 80, "traffic_factor": 1.3},
            {"from": "Kolkata", "to": "Lucknow", "distance": 980.0, "speed_limit": 75, "traffic_factor": 1.2},
            {"from": "Kolkata", "to": "Hyderabad", "distance": 1490.0, "speed_limit": 80, "traffic_factor": 1.2},
            {"from": "Hyderabad", "to": "Pune", "distance": 560.0, "speed_limit": 80, "traffic_factor": 1.2}
        ]

    def get_live_distance_and_time(self, origin, destination):
        """
        Queries Google Maps Distance Matrix API.
        Returns: (distance_km, duration_mins)
        Falls back to mock database if API Key is not set or request fails.
        """
        if not self.api_key:
            return self._get_mock_distance_and_time(origin, destination)
            
        url = "https://maps.googleapis.com/maps/api/distancematrix/json"
        params = {
            "origins": f"{origin}, India",
            "destinations": f"{destination}, India",
            "key": self.api_key,
            "mode": "driving"
        }
        
        try:
            response = requests.get(url, params=params, timeout=5)
            data = response.json()
            
            if data["status"] == "OK" and data["rows"][0]["elements"][0]["status"] == "OK":
                element = data["rows"][0]["elements"][0]
                distance_km = element["distance"]["value"] / 1000.0 # meters to km
                duration_mins = element["duration"]["value"] / 60.0 # seconds to mins
                return distance_km, duration_mins
            else:
                print(f"⚠️ Google API responded with status {data['status']}. Using mock fallback.")
        except Exception as e:
            print(f"⚠️ Google Maps API Request failed: {e}. Using mock fallback.")
            
        return self._get_mock_distance_and_time(origin, destination)

    def _get_mock_distance_and_time(self, origin, destination):
        """Calculates mock distance and time between Indian cities based on highway configurations."""
        # Check direct edge first
        for edge in self.mock_india_edges:
            if (edge["from"] == origin and edge["to"] == destination) or \
               (edge["from"] == destination and edge["to"] == origin):
                time_mins = (edge["distance"] / edge["speed_limit"]) * edge["traffic_factor"] * 60.0
                return edge["distance"], time_mins
                
        # Estimate via spatial coordinates distance if no direct edge exists
        n1 = self.mock_india_nodes.get(origin)
        n2 = self.mock_india_nodes.get(destination)
        
        if n1 and n2:
            # Lat/Long distance approximation (1 degree approx 111km)
            deg_dist = ((n1["x"] - n2["x"])**2 + (n1["y"] - n2["y"])**2)**0.5
            dist_km = deg_dist * 111.0 * 1.25 # Factor of 1.25 for highway winding
            time_mins = (dist_km / 75.0) * 1.2 * 60.0 # 75km/h avg speed, 1.2 traffic
            return dist_km, time_mins
            
        return float('inf'), float('inf')

    def build_india_graph(self, graph):
        """
        Populates a Graph instance with India city nodes and roads.
        If api_key is active, queries live road statistics for each link.
        """
        graph.clear()
        
        # Load Indian city coordinates (Longitude mapped to X, Latitude to Y)
        # Note: Longitude in India is 68-97 East, Latitude is 8-37 North
        # We scale these coordinates to fit our 1-10 grid in visualization
        min_lon, max_lon = 72.0, 89.0
        min_lat, max_lat = 12.0, 29.0
        
        for name, info in self.mock_india_nodes.items():
            # Project lat/lon coordinates linearly to 1.0 - 9.0 range
            x_scaled = 1.0 + ((info["x"] - min_lon) / (max_lon - min_lon)) * 8.0
            y_scaled = 1.0 + ((info["y"] - min_lat) / (max_lat - min_lat)) * 8.0
            graph.add_node(name, x_scaled, y_scaled, info["description"])
            
        # Connect roads
        for edge in self.mock_india_edges:
            u, v = edge["from"], edge["to"]
            dist, time_mins = self.get_live_distance_and_time(u, v)
            
            # Recalculate mock factors if using live API values
            if self.api_key and dist != float('inf'):
                # speed limit 80, calculate traffic factor = time / (dist/80 * 60)
                ideal_time = (dist / 80.0) * 60.0
                traffic = time_mins / ideal_time if ideal_time > 0 else 1.0
                graph.add_edge(u, v, dist, 80, traffic)
            else:
                graph.add_edge(u, v, edge["distance"], edge["speed_limit"], edge["traffic_factor"])
                
        return "India National Highway Grid"
