# 🏛️ Architecture & Algorithm Design Document

This document outlines the architectural details, data structure choices, and algorithm designs implemented in the **Intelligent Route Planner**.

---

## 1. System Architecture

The project follows a modular, layer-separated architecture to maintain clean separation of concerns.

```
       +---------------------------------------------+
       |                  User Interface             |
       |            (CLI / main.py Entrypoint)       |
       +----------------------++----------------------+
                              ||
                              \/
       +---------------------------------------------+
       |             Algorithms Layer                |
       |      (BFS, DFS, Dijkstra, A* Search)        |
       +----------------------++----------------------+
                              ||
                              \/
       +---------------------------------------------+
       |          Graph Representation Layer          |
       |           (src/graph.py - Adjacency List)   |
       +----------------------++----------------------+
                              ||
                              \/
       +---------------------------------------------+
       |              Visualization Layer            |
       |             (src/visualization.py)          |
       +----------------------++----------------------+
                              ||
                              \/
       +---------------------------------------------+
       |             Data Persistence Layer          |
       |             (data/city_map.json)            |
       +---------------------------------------------+
```

### Workflow Pipeline
1. **Load Map**: The system reads node coordinates and road properties from a JSON file.
2. **Construct Graph**: The Graph class instantiates nodes and edges using an Adjacency List.
3. **Select Endpoints**: The user selects a source and a destination via the CLI menu.
4. **Execute Pathfinding**: The chosen routing algorithm computes the path by traversing the adjacency list.
5. **Reconstruct Path**: Predecessor pointers trace the path backward from the destination to the source.
6. **Generate Reports & Visualize**: The metrics are calculated (distance, time, average speed), saved as a text report, and drawn into a PNG map file.

---

## 2. Core Data Structures

### A. Adjacency List (Graph representation)
The roadmap network is modeled as a weighted, undirected graph $G = (V, E)$.
* **Data Structure**: A Python dictionary where:
  * Keys are node names (strings representing intersections/landmarks).
  * Values are lists of edge objects representing connected roads.
* **Schema**:
  ```python
  self.adjacency_list = {
      "Central Station": [
          {
              "to": "Downtown Mall",
              "distance": 4.5,        # km (physical weight)
              "speed_limit": 50.0,    # km/h (edge property)
              "traffic_factor": 1.2,  # congestion multiplier (1.0 = clear)
              "time": 6.48            # travel time in minutes (time weight)
          },
          ...
      ]
  }
  ```
* **Why chose Adjacency List over Adjacency Matrix?**
  1. **Memory Efficiency**: Roadmap graphs are highly **sparse** (each intersection connects to only a few others, usually $\leq 4$). An adjacency list requires $O(V + E)$ space, whereas an adjacency matrix requires $O(V^2)$, wasting memory on non-existent connections.
  2. **Fast Traversal**: Checking neighbors of a node takes $O(\text{degree}(v))$ time rather than $O(V)$ scan time in an adjacency matrix.

### B. Min-Heap Priority Queue (Pathfinding Optimization)
For Dijkstra and A*, we need to quickly select the unvisited node with the smallest cumulative weight.
* **Data Structure**: Python's `heapq` module, which implements a binary heap priority queue.
* **Operations**:
  * Insertion / Decrease-Key: $O(\log V)$
  * Extract-Min: $O(\log V)$

---

## 3. Pathfinding Algorithms & Complexity

| Algorithm | Optimization Goal | Heuristic Used | Time Complexity | Space Complexity |
| :--- | :--- | :--- | :--- | :--- |
| **BFS** (Breadth-First Search) | Fewest road segments/stops | None | $O(V + E)$ | $O(V)$ |
| **DFS** (Depth-First Search) | Basic connectivity check | None | $O(V + E)$ | $O(V)$ |
| **Dijkstra** (Distance) | Shortest physical distance (km) | None | $O((V + E) \log V)$ | $O(V)$ |
| **Dijkstra** (Time) | Shortest travel duration (mins) | None | $O((V + E) \log V)$ | $O(V)$ |
| **A\*** (A-Star) | Shortest path (distance/time) | Euclidean 2D coordinates | $O((V + E) \log V)$ | $O(V)$ |

### Algorithmic Detail & Rationale

#### 1. Breadth-First Search (BFS)
Traverses the graph level-by-level using a FIFO queue. It is guaranteed to find the path with the fewest edges in an unweighted graph. It is ideal for routing systems when the user wants to minimize transit transfers/stops regardless of physical distance.

#### 2. Depth-First Search (DFS)
Explores deep along each branch before backtracking using a LIFO stack. It does not guarantee the shortest path, but it is useful for discovering alternative exploratory routes.

#### 3. Dijkstra's Algorithm
Uses a greedy strategy: it expands the path outwards from the source, always selecting the node with the minimum tentative weight from the priority queue.
* **Distance Optimization**: Weight is set to physical road length in kilometers ($d$).
* **Travel Time Optimization**: Weight is set to calculated travel time:
$$\text{Time (minutes)} = \left(\frac{d \text{ km}}{\text{Speed Limit km/h}}\right) \times \text{Traffic Factor} \times 60$$
This dynamically guides the path away from heavy traffic zones (factors $\geq 2.0$) even if the physical distance is slightly longer.

#### 4. A* (A-Star) Search
Extends Dijkstra's algorithm by incorporating a heuristic estimation function $h(n)$ representing the straight-line Euclidean distance from the current node to the destination.
$$\text{Priority } f(n) = g(n) + h(n)$$
* $g(n)$ is the exact cost from the start to node $n$.
* $h(n)$ is the estimated cost from node $n$ to the end.
* **Admissibility**: Because the straight-line distance is always $\leq$ the actual road network distance, the heuristic is **admissible** (it never overestimates the true remaining distance), guaranteeing A* will find the mathematically optimal path while checking significantly fewer nodes than standard Dijkstra.
