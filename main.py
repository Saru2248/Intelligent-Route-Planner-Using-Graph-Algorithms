import os
import sys

# Reconfigure stdout to use UTF-8 for console emoji support on Windows
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from src.graph import Graph

from src.algorithms import bfs, dfs, dijkstra, a_star
from src.visualization import visualize_graph

# Default data file paths
MAP_FILE = os.path.join("data", "city_map.json")
OUTPUTS_DIR = "outputs"
IMAGES_DIR = "images"

def print_header(title):
    print("\n" + "=" * 60)
    print(f"{title:^60}")
    print("=" * 60)

def display_menu():
    print("\n🧭 INTELLIGENT CITY ROUTE PLANNER (DSA SYSTEM)")
    print("─" * 45)
    print(" 1. 📍 List All City Locations")
    print(" 2. 🗺️  Show Roadmap Adjacency List")
    print(" 3. 🛡️  Find Route (BFS: Fewest Intersections)")
    print(" 4. 🌀 Find Route (DFS: Explored Connection)")
    print(" 5. 📏 Find Route (Dijkstra: Shortest Distance)")
    print(" 6. ⚡ Find Route (Dijkstra: Fastest Time - Traffic Aware)")
    print(" 7. 🎯 Find Route (A* Search: Heuristic Optimized)")
    print(" 8. ➕ Add New Location (Node)")
    print(" 9. 🛣️  Add New Road (Edge)")
    print("10. 🔄 Reset Map to Default")
    print("11. 💾 Save Current Map")
    print("12. ❌ Exit")
    print("─" * 45)

def select_nodes(graph):
    """Utility to prompt user for valid source and destination nodes."""
    nodes = graph.get_all_nodes()
    if not nodes:
        print("❌ No locations exist in the city map.")
        return None, None

    print("\nAvailable Locations:")
    for idx, node in enumerate(nodes, 1):
        print(f" {idx}. {node}")

    # Select Source
    while True:
        try:
            src_idx = int(input("\nEnter Source Location Number: ")) - 1
            if 0 <= src_idx < len(nodes):
                src = nodes[src_idx]
                break
            print("❌ Invalid selection. Choose a number from the list.")
        except ValueError:
            print("❌ Input must be a valid number.")

    # Select Destination
    while True:
        try:
            dest_idx = int(input("Enter Destination Location Number: ")) - 1
            if 0 <= dest_idx < len(nodes):
                dest = nodes[dest_idx]
                if dest == src:
                    print("❌ Source and Destination cannot be the same. Choose another.")
                    continue
                break
            print("❌ Invalid selection. Choose a number from the list.")
        except ValueError:
            print("❌ Input must be a valid number.")

    return src, dest

def calculate_path_metrics(graph, path):
    """Calculates cumulative distance and travel time for a specific path."""
    if not path or len(path) < 2:
        return 0.0, 0.0
    
    total_dist = 0.0
    total_time = 0.0
    for i in range(len(path) - 1):
        u, v = path[i], path[i+1]
        dist = graph.get_edge_weight(u, v, "distance")
        time_mins = graph.get_edge_weight(u, v, "time")
        
        # If edge doesn't exist (should not happen for reconstructed path)
        if dist == float('inf'):
            dist = 0.0
        if time_mins == float('inf'):
            time_mins = 0.0
            
        total_dist += dist
        total_time += time_mins
        
    return total_dist, total_time

def generate_report(graph, path, algorithm_name, weight_type=None):
    """Prints a beautiful route summary report and saves it to output directory."""
    if not path:
        print("\n❌ Route planner could not find any path between selected locations.")
        return
    
    total_dist, total_time = calculate_path_metrics(graph, path)
    num_stops = len(path) - 2
    stops_str = f"{num_stops} stop(s)" if num_stops > 0 else "Direct connection"

    # Save visualization
    viz_filename = os.path.join(IMAGES_DIR, f"{algorithm_name.lower().replace(' ', '_')}_route.png")
    viz_path = visualize_graph(graph, path, weight_type or "distance", viz_filename)

    report_content = []
    report_content.append("=" * 60)
    report_content.append(f"            🏆 ROUTE PLANNING SUMMARY REPORT")
    report_content.append("=" * 60)
    report_content.append(f"🟢 SOURCE:        {path[0]}")
    report_content.append(f"🔴 DESTINATION:   {path[-1]}")
    report_content.append(f"⚙️  ALGORITHM:     {algorithm_name}")
    if weight_type:
        report_content.append(f"🎯 OPTIMIZED FOR:  {weight_type.capitalize()}")
    report_content.append("─" * 60)
    report_content.append("🔀 PATH SEQUENCE:")
    report_content.append("   " + " ➡️  ".join([f"[{node}]" for node in path]))
    report_content.append("─" * 60)
    report_content.append(f"📏 TOTAL DISTANCE:   {total_dist:.2f} km")
    report_content.append(f"⏱️  ESTIMATED TIME:   {total_time:.2f} minutes")
    report_content.append(f"🚉 INTERSECTIONS:    {stops_str}")
    report_content.append(f"📈 AVERAGE SPEED:    {(total_dist / (total_time/60)):.2f} km/h" if total_time > 0 else "N/A")
    report_content.append("─" * 60)
    report_content.append(f"🎨 VISUALIZATION SAVED: {viz_path}")
    report_content.append("=" * 60)

    report_text = "\n".join(report_content)
    print(report_text)

    # Save text report to outputs directory
    os.makedirs(OUTPUTS_DIR, exist_ok=True)
    report_filename = os.path.join(OUTPUTS_DIR, f"route_report_{algorithm_name.lower().replace(' ', '_')}.txt")
    with open(report_filename, "w", encoding="utf-8") as f:
        f.write(report_text)
    print(f"📝 Text report saved to: {os.path.abspath(report_filename)}")

def run_comparison(graph, src, dest):
    """Compares optimized (Dijkstra) vs unoptimized (DFS) paths to demonstrate algorithm value."""
    # Run algorithms
    dijkstra_dist_path, dijkstra_dist_val, _ = dijkstra(graph, src, dest, "distance")
    dijkstra_time_path, dijkstra_time_val, _ = dijkstra(graph, src, dest, "time")
    dfs_path, _ = dfs(graph, src, dest)

    if not dijkstra_dist_path or not dfs_path:
        print("\n⚠️  Could not run complete comparison: Route not found.")
        return

    dfs_dist, dfs_time = calculate_path_metrics(graph, dfs_path)
    d_dist_dist, d_dist_time = calculate_path_metrics(graph, dijkstra_dist_path)
    d_time_dist, d_time_time = calculate_path_metrics(graph, dijkstra_time_path)

    print_header("📊 PERFORMANCE ALGORITHMIC COMPARISON")
    print(f"{'Path Metric':<25} | {'DFS (Unoptimized)':<18} | {'Dijkstra (Distance)':<19} | {'Dijkstra (Time)':<17}")
    print("─" * 87)
    
    path_seq_dfs = " -> ".join([n[:4] for n in dfs_path])
    path_seq_dist = " -> ".join([n[:4] for n in dijkstra_dist_path])
    path_seq_time = " -> ".join([n[:4] for n in dijkstra_time_path])

    print(f"{'Path (Abbreviated)':<25} | {path_seq_dfs:<18} | {path_seq_dist:<19} | {path_seq_time:<17}")
    print(f"{'Distance (km)':<25} | {dfs_dist:<18.2f} | {d_dist_dist:<19.2f} | {d_time_dist:<17.2f}")
    print(f"{'Travel Time (mins)':<25} | {dfs_time:<18.2f} | {d_dist_time:<19.2f} | {d_time_time:<17.2f}")
    print(f"{'Number of Stops':<25} | {len(dfs_path)-2:<18} | {len(dijkstra_dist_path)-2:<19} | {len(dijkstra_time_path)-2:<17}")
    print("─" * 87)

    # Show improvement
    if dfs_dist > 0:
        dist_saved = ((dfs_dist - d_dist_dist) / dfs_dist) * 100
        time_saved = ((dfs_time - d_time_time) / dfs_time) * 100
        print(f"🚀 Dijkstra (Distance) saves {dist_saved:.1f}% physical travel distance over standard DFS path!")
        print(f"🚀 Dijkstra (Time-Aware) saves {time_saved:.1f}% travel duration by dodging congestion zones!")
    print("=" * 87)

def main():
    graph = Graph()
    
    # Check if map directory and file exists, otherwise load/create default
    if os.path.exists(MAP_FILE):
        try:
            city_name = graph.load_from_json(MAP_FILE)
            print(f"✅ Loaded roadmap network for '{city_name}' successfully.")
        except Exception as e:
            print(f"⚠️ Error loading default map file: {e}. Re-initializing default map.")
            create_default_map(graph)
    else:
        print("ℹ️ Default map file not found. Creating default city map...")
        create_default_map(graph)

    while True:
        display_menu()
        choice = input("Select an option (1-12): ").strip()
        
        if choice == "1":
            print_header("📍 CITY LOCATIONS IN GRAPH")
            nodes = graph.get_all_nodes()
            for idx, node in enumerate(nodes, 1):
                info = graph.nodes[node]
                print(f"{idx:<2}. {node:<22} | Coord: ({info['x']:.1f}, {info['y']:.1f}) | {info['description']}")
        
        elif choice == "2":
            print(graph.display_adjacency_list())
            
        elif choice == "3":
            print_header("🛡️ BFS ROUTE FINDER (Fewest Intersections)")
            src, dest = select_nodes(graph)
            if src and dest:
                path, visited_order = bfs(graph, src, dest)
                print(f"🔍 Visited order during BFS search: {' -> '.join(visited_order)}")
                generate_report(graph, path, "BFS", "distance")
                
        elif choice == "4":
            print_header("🌀 DFS ROUTE FINDER (Depth First Search)")
            src, dest = select_nodes(graph)
            if src and dest:
                path, visited_order = dfs(graph, src, dest)
                print(f"🔍 Visited order during DFS search: {' -> '.join(visited_order)}")
                generate_report(graph, path, "DFS", "distance")
                
        elif choice == "5":
            print_header("📏 DIJKSTRA ROUTE FINDER (Shortest Distance)")
            src, dest = select_nodes(graph)
            if src and dest:
                path, weight, visited_order = dijkstra(graph, src, dest, "distance")
                print(f"🔍 Visited order during Dijkstra (distance): {' -> '.join(visited_order)}")
                generate_report(graph, path, "Dijkstra Distance", "distance")
                run_comparison(graph, src, dest)
                
        elif choice == "6":
            print_header("⚡ DIJKSTRA ROUTE FINDER (Fastest Travel Time)")
            src, dest = select_nodes(graph)
            if src and dest:
                path, weight, visited_order = dijkstra(graph, src, dest, "time")
                print(f"🔍 Visited order during Dijkstra (time): {' -> '.join(visited_order)}")
                generate_report(graph, path, "Dijkstra Time", "time")
                run_comparison(graph, src, dest)

        elif choice == "7":
            print_header("🎯 A* SEARCH ROUTE FINDER (Heuristic Optimized)")
            src, dest = select_nodes(graph)
            if src and dest:
                path, weight, visited_order = a_star(graph, src, dest, "distance")
                print(f"🔍 Visited order during A* Search: {' -> '.join(visited_order)}")
                generate_report(graph, path, "A-Star Search", "distance")
                
        elif choice == "8":
            print_header("➕ ADD NEW CITY LOCATION")
            name = input("Enter unique Location Name (e.g. West Gate): ").strip()
            if not name:
                print("❌ Location name cannot be empty.")
                continue
            if name in graph.nodes:
                print("❌ Location already exists.")
                continue
            
            try:
                x = float(input("Enter Coordinate X (e.g. 3.5): "))
                y = float(input("Enter Coordinate Y (e.g. 5.0): "))
            except ValueError:
                print("❌ Coordinates must be valid numeric values.")
                continue
            
            desc = input("Enter Description/Landmark (optional): ").strip()
            graph.add_node(name, x, y, desc)
            print(f"✅ Location '{name}' added successfully.")
            
        elif choice == "9":
            print_header("🛣️ ADD NEW ROAD CONNECTION")
            nodes = graph.get_all_nodes()
            if len(nodes) < 2:
                print("❌ You need at least 2 locations to connect them with a road.")
                continue
            
            print("Select locations to connect:")
            for idx, node in enumerate(nodes, 1):
                print(f" {idx}. {node}")
                
            try:
                u_idx = int(input("Enter Location A Number: ")) - 1
                v_idx = int(input("Enter Location B Number: ")) - 1
                if u_idx == v_idx or not (0 <= u_idx < len(nodes)) or not (0 <= v_idx < len(nodes)):
                    print("❌ Invalid location selections.")
                    continue
                
                u, v = nodes[u_idx], nodes[v_idx]
                dist = float(input("Enter Road Distance in km (e.g. 4.2): "))
                speed = float(input("Enter Speed Limit in km/h (e.g. 50): "))
                traffic = float(input("Enter Traffic Congestion Factor (1.0 = clear, 2.0 = medium, 3.0 = heavy): "))
                
                if dist <= 0 or speed <= 0 or traffic < 1.0:
                    print("❌ Invalid values. Distance/speed must be > 0, traffic factor >= 1.0.")
                    continue
                
                graph.add_edge(u, v, dist, speed, traffic)
                print(f"✅ Road created between '{u}' and '{v}' successfully.")
            except ValueError:
                print("❌ Inputs must be valid numbers.")
                
        elif choice == "10":
            print_header("🔄 RESET TO DEFAULT MAP")
            confirm = input("Are you sure you want to discard all changes and reset to default? (y/n): ").strip().lower()
            if confirm == 'y':
                create_default_map(graph)
                print("✅ Map has been reset to default metropolitan network.")
                
        elif choice == "11":
            print_header("💾 SAVE MAP TO FILE")
            city_name = input("Enter City Name (default: MetroCity): ").strip()
            if not city_name:
                city_name = "MetroCity"
            graph.save_to_json(MAP_FILE, city_name)
            print(f"✅ Saved city map as '{city_name}' to: {MAP_FILE}")
            
        elif choice == "12":
            print("\n👋 Exiting Intelligent Route Planner. Travel safe!")
            sys.exit(0)
            
        else:
            print("❌ Invalid option. Please choose a number between 1 and 12.")

def create_default_map(graph):
    """Generates the default MetroCity map dataset and saves it to JSON."""
    default_data = {
        "city_name": "MetroCity",
        "nodes": {
            "Central Station": {"x": 5.0, "y": 8.0, "description": "Primary train station and city transit hub."},
            "Downtown Mall": {"x": 4.0, "y": 5.0, "description": "Shopping and commercial center."},
            "Financial District": {"x": 7.0, "y": 6.0, "description": "High-density banking and office zone."},
            "Tech Park": {"x": 8.0, "y": 3.0, "description": "IT companies and software development offices."},
            "Residential Block A": {"x": 2.0, "y": 6.0, "description": "Densely populated housing area in West MetroCity."},
            "Residential Block B": {"x": 8.0, "y": 9.0, "description": "Suburban residential colony in East MetroCity."},
            "City Hospital": {"x": 5.0, "y": 3.0, "description": "Emergency and healthcare center."},
            "Green Park": {"x": 3.0, "y": 2.0, "description": "Recreational park and open space."},
            "University Campus": {"x": 1.0, "y": 3.0, "description": "Educational institutions and housing."},
            "Airport": {"x": 9.0, "y": 1.0, "description": "International Airport on the city outskirts."}
        },
        "edges": [
            {"from": "Central Station", "to": "Downtown Mall", "distance": 4.5, "speed_limit": 50, "traffic_factor": 1.2},
            {"from": "Central Station", "to": "Financial District", "distance": 3.0, "speed_limit": 40, "traffic_factor": 1.8},
            {"from": "Central Station", "to": "Residential Block B", "distance": 5.0, "speed_limit": 60, "traffic_factor": 1.0},
            {"from": "Downtown Mall", "to": "Residential Block A", "distance": 2.5, "speed_limit": 40, "traffic_factor": 1.5},
            {"from": "Downtown Mall", "to": "City Hospital", "distance": 3.5, "speed_limit": 50, "traffic_factor": 1.1},
            {"from": "Financial District", "to": "Tech Park", "distance": 4.0, "speed_limit": 60, "traffic_factor": 1.4},
            {"from": "Financial District", "to": "Residential Block B", "distance": 3.8, "speed_limit": 50, "traffic_factor": 2.0},
            {"from": "Tech Park", "to": "City Hospital", "distance": 5.2, "speed_limit": 50, "traffic_factor": 1.3},
            {"from": "Tech Park", "to": "Airport", "distance": 6.0, "speed_limit": 80, "traffic_factor": 1.0},
            {"from": "Residential Block A", "to": "University Campus", "distance": 3.0, "speed_limit": 30, "traffic_factor": 1.0},
            {"from": "Residential Block A", "to": "Green Park", "distance": 4.8, "speed_limit": 40, "traffic_factor": 1.2},
            {"from": "City Hospital", "to": "Green Park", "distance": 2.2, "speed_limit": 40, "traffic_factor": 1.1},
            {"from": "University Campus", "to": "Green Park", "distance": 2.0, "speed_limit": 30, "traffic_factor": 1.0},
            {"from": "Green Park", "to": "Airport", "distance": 8.5, "speed_limit": 70, "traffic_factor": 1.5}
        ]
    }
    
    # Save to disk
    os.makedirs(os.path.dirname(os.path.abspath(MAP_FILE)), exist_ok=True)
    with open(MAP_FILE, 'w') as f:
        import json
        json.dump(default_data, f, indent=2)

    # Load into memory
    graph.load_from_json(MAP_FILE)

if __name__ == "__main__":
    main()
