import json
import os

class Graph:
    """
    Represents a city roadmap network using an Adjacency List.
    Supports node coordinates, edge distance, speed limits, traffic factors, 
    and calculated travel times.
    """
    def __init__(self):
        # Maps node_name -> list of edge dictionaries: {'to': neighbor, 'distance': d, 'speed_limit': s, 'traffic_factor': t, 'time': time_mins}
        self.adjacency_list = {}
        # Maps node_name -> {'x': float, 'y': float, 'description': str}
        self.nodes = {}

    def add_node(self, name, x=0.0, y=0.0, description=""):
        """Adds a node with coordinates and a description to the graph."""
        if name not in self.nodes:
            self.nodes[name] = {"x": float(x), "y": float(y), "description": description}
            self.adjacency_list[name] = []
            return True
        return False

    def add_edge(self, u, v, distance, speed_limit=40, traffic_factor=1.0, bidirectional=True):
        """
        Adds a weighted edge between node u and node v.
        Calculates time weight = (distance / speed_limit) * traffic_factor * 60 minutes.
        """
        # Ensure nodes exist
        if u not in self.nodes:
            self.add_node(u)
        if v not in self.nodes:
            self.add_node(v)

        # Calculate travel time in minutes
        # distance (km) / speed_limit (km/h) = hours
        # hours * 60 = minutes
        time_mins = (distance / speed_limit) * traffic_factor * 60.0

        edge_data_u = {
            "to": v,
            "distance": float(distance),
            "speed_limit": float(speed_limit),
            "traffic_factor": float(traffic_factor),
            "time": float(time_mins)
        }
        
        # Check if edge already exists, update if it does, else append
        exists = False
        for edge in self.adjacency_list[u]:
            if edge["to"] == v:
                edge.update(edge_data_u)
                exists = True
                break
        if not exists:
            self.adjacency_list[u].append(edge_data_u)

        if bidirectional:
            edge_data_v = {
                "to": u,
                "distance": float(distance),
                "speed_limit": float(speed_limit),
                "traffic_factor": float(traffic_factor),
                "time": float(time_mins)
            }
            exists_v = False
            for edge in self.adjacency_list[v]:
                if edge["to"] == u:
                    edge.update(edge_data_v)
                    exists_v = True
                    break
            if not exists_v:
                self.adjacency_list[v].append(edge_data_v)

    def load_from_json(self, file_path):
        """Loads a city map graph from a JSON file."""
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"Map file {file_path} not found.")

        with open(file_path, 'r') as f:
            data = json.load(f)

        # Reset graph state
        self.nodes = {}
        self.adjacency_list = {}

        # Load nodes
        for node_name, info in data.get("nodes", {}).items():
            self.add_node(node_name, info.get("x", 0.0), info.get("y", 0.0), info.get("description", ""))

        # Load edges
        for edge in data.get("edges", []):
            self.add_edge(
                edge["from"], 
                edge["to"], 
                edge["distance"], 
                edge.get("speed_limit", 40), 
                edge.get("traffic_factor", 1.0),
                bidirectional=True
            )
        return data.get("city_name", "Unknown City")

    def save_to_json(self, file_path, city_name="CustomCity"):
        """Saves the current graph representation back to a JSON file."""
        data = {
            "city_name": city_name,
            "nodes": self.nodes,
            "edges": []
        }
        
        # To avoid saving bidirectional edges twice
        seen_edges = set()
        for u in self.adjacency_list:
            for edge in self.adjacency_list[u]:
                v = edge["to"]
                edge_pair = tuple(sorted([u, v]))
                if edge_pair not in seen_edges:
                    seen_edges.add(edge_pair)
                    data["edges"].append({
                        "from": u,
                        "to": v,
                        "distance": edge["distance"],
                        "speed_limit": edge["speed_limit"],
                        "traffic_factor": edge["traffic_factor"]
                    })

        # Ensure directory exists
        os.makedirs(os.path.dirname(os.path.abspath(file_path)), exist_ok=True)
        with open(file_path, 'w') as f:
            json.dump(data, f, indent=2)

    def get_edge_weight(self, u, v, weight_type="distance"):
        """Returns the weight of the edge between u and v based on weight_type ('distance' or 'time')."""
        if u in self.adjacency_list:
            for edge in self.adjacency_list[u]:
                if edge["to"] == v:
                    return edge.get(weight_type, float('inf'))
        return float('inf')

    def get_all_nodes(self):
        """Returns a list of all node names."""
        return list(self.nodes.keys())

    def get_neighbors(self, node):
        """Returns a list of edge dictionaries for the neighbors of the given node."""
        return self.adjacency_list.get(node, [])

    def display_adjacency_list(self):
        """Returns a string representation of the adjacency list for console output."""
        output = []
        output.append("=" * 60)
        output.append("                 CITY GRAPH ADJACENCY LIST")
        output.append("=" * 60)
        for u, neighbors in self.adjacency_list.items():
            desc = self.nodes[u]['description']
            coord = f"({self.nodes[u]['x']}, {self.nodes[u]['y']})"
            output.append(f"\n📍 {u} {coord} - '{desc}'")
            if not neighbors:
                output.append("   └─ (No outbound connections)")
            for edge in neighbors:
                output.append(
                    f"   ├───▶ To: {edge['to']:<22} | "
                    f"Dist: {edge['distance']:>4} km | "
                    f"Speed: {edge['speed_limit']:>3} km/h | "
                    f"Traffic: {edge['traffic_factor']:>3}x | "
                    f"Time: {edge['time']:>5.2f} mins"
                )
        output.append("=" * 60)
        return "\n".join(output)
