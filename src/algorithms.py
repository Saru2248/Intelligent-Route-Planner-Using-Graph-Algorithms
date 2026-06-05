import heapq
import math

def bfs(graph, start, end):
    """
    Breadth-First Search (BFS) implementation.
    Finds the path with the fewest stops (edges).
    Returns a tuple: (path, visited_order)
    """
    if start not in graph.nodes or end not in graph.nodes:
        return None, []

    visited_order = []
    queue = [[start]]
    visited = {start}

    while queue:
        path = queue.pop(0)
        node = path[-1]
        visited_order.append(node)

        if node == end:
            return path, visited_order

        for edge in graph.get_neighbors(node):
            neighbor = edge["to"]
            if neighbor not in visited:
                visited.add(neighbor)
                new_path = list(path)
                new_path.append(neighbor)
                queue.append(new_path)
                
    return None, visited_order


def dfs(graph, start, end):
    """
    Depth-First Search (DFS) implementation.
    Explores paths deeply to find connectivity.
    Returns a tuple: (path, visited_order)
    """
    if start not in graph.nodes or end not in graph.nodes:
        return None, []

    visited_order = []
    
    # Using stack for DFS. Store (current_node, path_to_current)
    stack = [(start, [start])]
    visited = set()

    while stack:
        node, path = stack.pop()
        
        if node not in visited:
            visited.add(node)
            visited_order.append(node)

            if node == end:
                return path, visited_order

            # Push neighbors in reverse order to explore them in standard order
            neighbors = graph.get_neighbors(node)
            for edge in reversed(neighbors):
                neighbor = edge["to"]
                if neighbor not in visited:
                    new_path = list(path)
                    new_path.append(neighbor)
                    stack.append((neighbor, new_path))

    return None, visited_order


def dijkstra(graph, start, end, weight_type="distance"):
    """
    Dijkstra's Algorithm using a min-heap priority queue.
    Optimizes for:
      - 'distance': shortest distance in km
      - 'time': fastest travel time in minutes
    Returns a tuple: (path, total_weight, visited_order)
    """
    if start not in graph.nodes or end not in graph.nodes:
        return None, float('inf'), []

    # Priority queue stores tuples: (cumulative_weight, current_node)
    pq = [(0.0, start)]
    
    # Store shortest distances found so far
    distances = {node: float('inf') for node in graph.nodes}
    distances[start] = 0.0

    # Track path reconstruction
    predecessors = {node: None for node in graph.nodes}
    
    visited_order = []
    visited_nodes = set()

    while pq:
        current_weight, u = heapq.heappop(pq)

        if u in visited_nodes:
            continue
            
        visited_nodes.add(u)
        visited_order.append(u)

        if u == end:
            break

        # Check neighbors
        for edge in graph.get_neighbors(u):
            v = edge["to"]
            weight = edge[weight_type]
            
            new_distance = current_weight + weight
            if new_distance < distances[v]:
                distances[v] = new_distance
                predecessors[v] = u
                heapq.heappush(pq, (new_distance, v))

    # Reconstruct shortest path
    if distances[end] == float('inf'):
        return None, float('inf'), visited_order

    path = []
    curr = end
    while curr is not None:
        path.append(curr)
        curr = predecessors[curr]
    path.reverse()

    return path, distances[end], visited_order


def euclidean_heuristic(graph, node1, node2, weight_type="distance"):
    """
    Heuristic function for A* algorithm: Euclidean straight-line distance.
    If optimizing for 'time', we scale distance by a high speed limit (e.g. 80 km/h)
    converted to minutes, ensuring the heuristic remains admissible (never overestimates).
    """
    n1 = graph.nodes[node1]
    n2 = graph.nodes[node2]
    dist = math.sqrt((n1["x"] - n2["x"])**2 + (n1["y"] - n2["y"])**2)
    
    if weight_type == "time":
        # Underestimate time using maximum speed (e.g., 80 km/h) in minutes per km
        max_speed = 80.0 
        time_mins = (dist / max_speed) * 60.0
        return time_mins
    return dist


def a_star(graph, start, end, weight_type="distance"):
    """
    A* (A-Star) Search implementation.
    Combines Dijkstra's accumulated cost g(n) with heuristic cost h(n).
    Returns a tuple: (path, total_weight, visited_order)
    """
    if start not in graph.nodes or end not in graph.nodes:
        return None, float('inf'), []

    # Priority queue stores: (f_score, g_score, current_node)
    # f_score = g_score + h_score
    start_h = euclidean_heuristic(graph, start, end, weight_type)
    pq = [(start_h, 0.0, start)]

    g_scores = {node: float('inf') for node in graph.nodes}
    g_scores[start] = 0.0

    predecessors = {node: None for node in graph.nodes}
    
    visited_order = []
    visited_nodes = set()

    while pq:
        _, current_g, u = heapq.heappop(pq)

        if u in visited_nodes:
            continue
            
        visited_nodes.add(u)
        visited_order.append(u)

        if u == end:
            break

        for edge in graph.get_neighbors(u):
            v = edge["to"]
            weight = edge[weight_type]
            
            tentative_g = current_g + weight
            if tentative_g < g_scores[v]:
                g_scores[v] = tentative_g
                predecessors[v] = u
                h_score = euclidean_heuristic(graph, v, end, weight_type)
                f_score = tentative_g + h_score
                heapq.heappush(pq, (f_score, tentative_g, v))

    # Reconstruct path
    if g_scores[end] == float('inf'):
        return None, float('inf'), visited_order

    path = []
    curr = end
    while curr is not None:
        path.append(curr)
        curr = predecessors[curr]
    path.reverse()

    return path, g_scores[end], visited_order
