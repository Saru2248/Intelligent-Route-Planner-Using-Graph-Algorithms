import matplotlib
matplotlib.use('Agg')  # Use non-interactive backend to prevent GUI errors in background shells
import matplotlib.pyplot as plt
import networkx as nx
import os


def visualize_graph(graph, path=None, weight_type="distance", output_filename="route_visualization.png"):
    """
    Visualizes the city graph using NetworkX and Matplotlib.
    If 'path' is provided, it highlights the path nodes and edges.
    Saves the visualization to the 'images/' folder.
    """
    # Create networkx graph object
    G = nx.Graph()

    # Add nodes with position coordinates
    pos = {}
    for node, info in graph.nodes.items():
        G.add_node(node)
        pos[node] = (info["x"], info["y"])

    # Add edges and store their distance/time weights
    edge_labels = {}
    for u in graph.adjacency_list:
        for edge in graph.adjacency_list[u]:
            v = edge["to"]
            G.add_edge(u, v)
            if weight_type == "distance":
                edge_labels[(u, v)] = f"{edge['distance']} km"
            else:
                edge_labels[(u, v)] = f"{edge['time']:.1f} m"

    # Setup the plot figure
    plt.figure(figsize=(12, 10))
    plt.style.use('seaborn-v0_8-whitegrid' if 'seaborn-v0_8-whitegrid' in plt.style.available else 'default')
    
    # Draw base nodes (all nodes except path)
    all_nodes = list(G.nodes())
    path_nodes = path if path else []
    base_nodes = [node for node in all_nodes if node not in path_nodes]

    # Draw nodes
    nx.draw_networkx_nodes(
        G, pos, 
        nodelist=base_nodes, 
        node_color="#2c3e50", 
        node_size=800, 
        alpha=0.85, 
        edgecolors="#34495e"
    )
    
    if path_nodes:
        # Highlight start and end nodes
        nx.draw_networkx_nodes(
            G, pos, 
            nodelist=[path_nodes[0]], 
            node_color="#27ae60", 
            node_size=1100, 
            alpha=0.95,
            edgecolors="#2ecc71"
        ) # Green for Start
        
        nx.draw_networkx_nodes(
            G, pos, 
            nodelist=[path_nodes[-1]], 
            node_color="#c0392b", 
            node_size=1100, 
            alpha=0.95,
            edgecolors="#e74c3c"
        ) # Red for End
        
        # Draw intermediate path nodes
        intermediate_nodes = path_nodes[1:-1]
        if intermediate_nodes:
            nx.draw_networkx_nodes(
                G, pos, 
                nodelist=intermediate_nodes, 
                node_color="#d35400", 
                node_size=950, 
                alpha=0.9,
                edgecolors="#e67e22"
            ) # Orange for Intermediate

    # Draw base edges (all edges except path)
    base_edges = list(G.edges())
    path_edges = []
    if path:
        for i in range(len(path) - 1):
            u, v = path[i], path[i+1]
            path_edges.append((u, v))
            path_edges.append((v, u)) # undirected
            
    non_path_edges = [edge for edge in base_edges if edge not in path_edges and (edge[1], edge[0]) not in path_edges]

    # Draw non-path edges
    nx.draw_networkx_edges(
        G, pos, 
        edgelist=non_path_edges, 
        edge_color="#bdc3c7", 
        width=1.5, 
        style="dashed"
    )

    # Draw path edges (bold and colorful)
    if path_edges:
        nx.draw_networkx_edges(
            G, pos, 
            edgelist=[e for e in base_edges if e in path_edges or (e[1], e[0]) in path_edges], 
            edge_color="#d35400", 
            width=5.0, 
            style="solid"
        )

    # Labels for nodes (placed slightly offset)
    labels = {node: f"\n\n{node}" for node in G.nodes()}
    nx.draw_networkx_labels(G, pos, labels=labels, font_size=10, font_weight="bold", font_color="#2c3e50")

    # Labels for edges (weights)
    # Filter edge labels to avoid double-printing
    filtered_edge_labels = {}
    seen = set()
    for (u, v), label in edge_labels.items():
        if (u, v) not in seen and (v, u) not in seen:
            filtered_edge_labels[(u, v)] = label
            seen.add((u, v))
            
    nx.draw_networkx_edge_labels(
        G, pos, 
        edge_labels=filtered_edge_labels, 
        font_size=9, 
        font_color="#7f8c8d",
        bbox=dict(facecolor='white', edgecolor='none', alpha=0.7, boxstyle='round,pad=0.2')
    )

    # Title & Legend
    title_str = "Intelligent City Route Planner"
    if path:
        metric = "Distance" if weight_type == "distance" else "Travel Time"
        title_str += f"\nShortest Path ({metric}) from {path[0]} to {path[-1]}"
    
    plt.title(title_str, fontsize=14, fontweight="bold", pad=20)
    
    # Custom Legend
    from matplotlib.lines import Line2D
    legend_elements = [
        Line2D([0], [0], marker='o', color='w', markerfacecolor='#2c3e50', markersize=10, label='Standard Intersection'),
        Line2D([0], [0], color='#bdc3c7', lw=2, linestyle='--', label='Road Link'),
    ]
    if path:
        legend_elements.extend([
            Line2D([0], [0], marker='o', color='w', markerfacecolor='#27ae60', markersize=12, label='Start Location'),
            Line2D([0], [0], marker='o', color='w', markerfacecolor='#c0392b', markersize=12, label='Destination'),
            Line2D([0], [0], marker='o', color='w', markerfacecolor='#d35400', markersize=11, label='Path Intersections'),
            Line2D([0], [0], color='#d35400', lw=4, label='Optimized Route'),
        ])
    
    plt.legend(handles=legend_elements, loc='upper left', frameon=True, facecolor='white', framealpha=0.9)
    plt.tight_layout()

    # Ensure output directory exists
    os.makedirs(os.path.dirname(os.path.abspath(output_filename)), exist_ok=True)
    plt.savefig(output_filename, dpi=300)
    plt.close()
    
    return os.path.abspath(output_filename)
