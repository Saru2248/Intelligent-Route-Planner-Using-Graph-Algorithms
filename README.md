# 🧭 Intelligent Route Planner Using Graph Algorithms

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![DSA Project](https://img.shields.io/badge/DSA-Graphs-green.svg)]()
[![Algorithms](https://img.shields.io/badge/Algorithms-Dijkstra%20%7C%20BFS%20%7C%20DFS-orange.svg)]()

An industry-oriented Data Structures & Algorithms project that simulates modern navigation systems such as Google Maps, Uber, Ola, Swiggy, and logistics platforms.

The system models a city as a weighted graph and uses Graph Algorithms including BFS, DFS, Dijkstra's Algorithm, and A* Search to calculate optimized routes based on distance and travel time.

---

## 📌 Project Overview

Route optimization is one of the most widely used applications of Graph Theory in the software industry.

This project demonstrates how real-world navigation systems represent locations as graph nodes and roads as weighted edges to determine the most efficient route between two locations.

### Real-World Applications

- Google Maps Navigation
- Uber & Ola Route Matching
- Swiggy & Zomato Delivery Optimization
- Logistics & Supply Chain Management
- Smart Transportation Systems
- Emergency Response Routing
- Fleet Management Systems

---

## 🎯 Problem Statement

Given a source and destination location:

- Model a city using Graph Data Structures
- Represent roads as weighted edges
- Apply shortest-path algorithms
- Determine the optimal route
- Calculate travel distance and estimated travel time
- Visualize the route network

---

## ✨ Key Features

✅ Graph-based city modeling

✅ Adjacency List implementation

✅ Breadth First Search (BFS)

✅ Depth First Search (DFS)

✅ Dijkstra's Shortest Path Algorithm

✅ A* Search Algorithm

✅ Traffic-aware route optimization

✅ Route reconstruction

✅ Distance and travel time estimation

✅ Interactive CLI Interface

✅ Network Visualization using NetworkX & Matplotlib

✅ Route Performance Analysis

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|------------|
| Language | Python 3.8+ |
| Data Structures | Graphs, Adjacency Lists |
| Algorithms | BFS, DFS, Dijkstra, A* |
| Visualization | NetworkX, Matplotlib |
| Priority Queue | heapq |
| Storage | JSON |
| Version Control | Git & GitHub |

---

## 🏗️ System Architecture

User Input
      ↓
Source & Destination
      ↓
Graph Creation
      ↓
Adjacency List
      ↓
Pathfinding Algorithms
(BFS / DFS / Dijkstra / A*)
      ↓
Optimized Route
      ↓
Route Summary
      ↓
Graph Visualization

---

## 🧠 DSA Concepts Demonstrated

### Graphs
Representation of locations and roads.

### Adjacency List
Efficient graph storage.

### BFS
Finds paths with minimum number of stops.

### DFS
Graph exploration and traversal.

### Dijkstra's Algorithm
Finds shortest weighted path.

### A* Search
Uses heuristic optimization for faster route computation.

### Min Heap
Optimizes shortest-path calculations.

---

## 📂 Project Structure

Intelligent-Route-Planner-Graph-Algorithms/
│
├── data/
├── src/
│ ├── graph.py
│ ├── algorithms.py
│ └── visualization.py
│
├── outputs/
├── images/
├── web/
├── docs/
│
├── requirements.txt
├── README.md
├── run_simulation.py
└── main.py

---

## ⚙️ Installation

### Clone Repository

git clone https://github.com/yourusername/Intelligent-Route-Planner-Graph-Algorithms.git

cd Intelligent-Route-Planner-Graph-Algorithms

### Install Dependencies

pip install -r requirements.txt

---

## ▶️ Run Project

### Interactive CLI

python main.py

### Automated Simulation

python run_simulation.py

### Web Dashboard

python -m http.server 8000

Open:

http://localhost:8000/web/

---

## 📊 Sample Output

Source: Central Station

Destination: Airport

Algorithm: Dijkstra Distance

Optimal Route:

Central Station
→ Financial District
→ Tech Park
→ Airport

Distance: 13 km

Estimated Time: 18.2 minutes

---

## 📈 Performance Comparison

| Metric | DFS | Dijkstra |
|----------|---------|-----------|
| Distance | 25.4 km | 13 km |
| Travel Time | 38.35 min | 18.20 min |
| Stops | 6 | 2 |

Result:

✔ 48.8% reduction in travel distance

✔ 52.5% reduction in travel time

---

## 📷 Screenshots

### Graph Visualization

![Graph](images/route_graph.png)

### Dashboard

![Dashboard](images/dashboard_screenshot.png)

### Route Animation

![Demo](images/dashboard_demo.webp)

---

## 🚀 Future Enhancements

- Real-Time Traffic Integration
- Google Maps API Integration
- Live GPS Tracking
- Multi-Destination Routing
- Vehicle Routing Problem (VRP)
- Route Recommendation Engine
- Machine Learning Based Traffic Prediction

---

## 🎓 Learning Outcomes

- Graph Theory Applications
- Shortest Path Algorithms
- Route Optimization Techniques
- Heuristic Search Algorithms
- Data Visualization
- Software Engineering Practices
- Git & GitHub Workflow

---

## 👨‍💻 Author

Sarthak Dhumal

Computer Engineering Student

Passionate about:
- Data Structures & Algorithms
- Software Development
- Backend Engineering
- System Design
- Problem Solving

---

## ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the project

📢 Share with others

---

