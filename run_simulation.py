import os
import sys

# Reconfigure stdout to use UTF-8 for console emoji support on Windows
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from src.graph import Graph
from src.algorithms import bfs, dfs, dijkstra, a_star

from src.visualization import visualize_graph
from main import calculate_path_metrics, MAP_FILE, IMAGES_DIR, OUTPUTS_DIR

def run_automated_test():
    print("🚀 Running automated Intelligent Route Planner simulation...")
    
    graph = Graph()
    if not os.path.exists(MAP_FILE):
        print("Creating default city map dataset...")
        from main import create_default_map
        create_default_map(graph)
    else:
        graph.load_from_json(MAP_FILE)

    # Let's run all pathfinding algorithms from 'Central Station' to 'Airport'
    src = "Central Station"
    dest = "Airport"
    
    print(f"\n📍 Planning routes from '{src}' to '{dest}':")
    print("=" * 60)
    
    algorithms = [
        {"name": "BFS", "func": lambda g, s, d: (bfs(g, s, d)[0], "distance")},
        {"name": "DFS", "func": lambda g, s, d: (dfs(g, s, d)[0], "distance")},
        {"name": "Dijkstra Distance", "func": lambda g, s, d: (dijkstra(g, s, d, "distance")[0], "distance")},
        {"name": "Dijkstra Time", "func": lambda g, s, d: (dijkstra(g, s, d, "time")[0], "time")},
        {"name": "A-Star Search", "func": lambda g, s, d: (a_star(g, s, d, "distance")[0], "distance")}
    ]
    
    os.makedirs(IMAGES_DIR, exist_ok=True)
    os.makedirs(OUTPUTS_DIR, exist_ok=True)

    for alg in algorithms:
        name = alg["name"]
        path, metric_type = alg["func"](graph, src, dest)
        
        if path:
            dist, time = calculate_path_metrics(graph, path)
            print(f"✔️  {name:<18} | Path: {' -> '.join(path)}")
            print(f"    ├─ Distance: {dist:.2f} km | Travel Time: {time:.2f} minutes | Stops: {len(path)-2}")
            
            # Save visual
            viz_filename = os.path.join(IMAGES_DIR, f"{name.lower().replace(' ', '_')}_route.png")
            visualize_graph(graph, path, metric_type, viz_filename)
            
            # Save text report
            report_filename = os.path.join(OUTPUTS_DIR, f"route_report_{name.lower().replace(' ', '_')}.txt")
            report_text = f"""============================================================
            🏆 AUTOMATED ROUTE SUMMARY REPORT
============================================================
🟢 SOURCE:        {src}
🔴 DESTINATION:   {dest}
⚙️  ALGORITHM:     {name}
🎯 OPTIMIZED FOR:  {metric_type.capitalize()}
────────────────────────────────────────────────────────────
🔀 PATH SEQUENCE:
   {" ➡️  ".join([f"[{node}]" for node in path])}
────────────────────────────────────────────────────────────
📏 TOTAL DISTANCE:   {dist:.2f} km
⏱️  ESTIMATED TIME:   {time:.2f} minutes
🚉 INTERSECTIONS:    {len(path)-2} stop(s)
📈 AVERAGE SPEED:    {(dist / (time/60)):.2f} km/h
============================================================
"""
            with open(report_filename, "w", encoding="utf-8") as f:
                f.write(report_text)
        else:
            print(f"❌ {name:<18} | No path found!")

    # Generate one full comparison report
    print("\n📊 Comparing Dijkstra (Distance-Optimized) vs DFS (Unoptimized):")
    d_path, _, _ = dijkstra(graph, src, dest, "distance")
    dfs_path, _ = dfs(graph, src, dest)
    
    if d_path and dfs_path:
        d_dist, d_time = calculate_path_metrics(graph, d_path)
        dfs_dist, dfs_time = calculate_path_metrics(graph, dfs_path)
        
        dist_saved = ((dfs_dist - d_dist) / dfs_dist) * 100
        time_saved = ((dfs_time - d_time) / dfs_time) * 100
        
        comparison_report = f"""============================================================
            📊 ROUTE PLANNER ALGORITHMIC COMPARISON
============================================================
Route: {src} ➡️  {dest}

1. DFS (Unoptimized)
   ├─ Path: {" ➡️  ".join(dfs_path)}
   ├─ Distance: {dfs_dist:.2f} km
   └─ Travel Time: {dfs_time:.2f} minutes

2. Dijkstra (Distance-Optimized)
   ├─ Path: {" ➡️  ".join(d_path)}
   ├─ Distance: {d_dist:.2f} km
   └─ Travel Time: {d_time:.2f} minutes

⭐ PERFORMANCE GAIN SUMMARY:
   🚀 Distance Saved: {dfs_dist - d_dist:.2f} km ({dist_saved:.1f}% shorter route)
   ⏱️ Time Saved:     {dfs_time - d_time:.2f} minutes ({time_saved:.1f}% faster route)
============================================================
"""
        print(comparison_report)
        comp_filename = os.path.join(OUTPUTS_DIR, "route_comparison_report.txt")
        with open(comp_filename, "w", encoding="utf-8") as f:
            f.write(comparison_report)
            
    print("\n✅ Simulation successfully finished. Check 'images/' and 'outputs/' folders!")

if __name__ == "__main__":
    run_automated_test()
