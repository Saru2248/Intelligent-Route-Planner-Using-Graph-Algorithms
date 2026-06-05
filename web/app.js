// ============================================================================
// 1. Initial City Roadmap Dataset (MetroCity Default)
// ============================================================================
const DEFAULT_MAP = {
  cityName: "MetroCity",
  nodes: {
    "Central Station": { x: 5.0, y: 8.0, description: "Primary train station and city transit hub." },
    "Downtown Mall": { x: 4.0, y: 5.0, description: "Shopping and commercial center." },
    "Financial District": { x: 7.0, y: 6.0, description: "High-density banking and office zone." },
    "Tech Park": { x: 8.0, y: 3.0, description: "IT companies and software development offices." },
    "Residential Block A": { x: 2.0, y: 6.0, description: "Densely populated housing area in West MetroCity." },
    "Residential Block B": { x: 8.0, y: 9.0, description: "Suburban residential colony in East MetroCity." },
    "City Hospital": { x: 5.0, y: 3.0, description: "Emergency and healthcare center." },
    "Green Park": { x: 3.0, y: 2.0, description: "Recreational park and open space." },
    "University Campus": { x: 1.0, y: 3.0, description: "Educational institutions and housing." },
    "Airport": { x: 9.0, y: 1.0, description: "International Airport on the city outskirts." }
  },
  edges: [
    { from: "Central Station", to: "Downtown Mall", distance: 4.5, speedLimit: 50, trafficFactor: 1.2 },
    { from: "Central Station", to: "Financial District", distance: 3.0, speedLimit: 40, trafficFactor: 1.8 },
    { from: "Central Station", to: "Residential Block B", distance: 5.0, speedLimit: 60, trafficFactor: 1.0 },
    { from: "Downtown Mall", to: "Residential Block A", distance: 2.5, speedLimit: 40, trafficFactor: 1.5 },
    { from: "Downtown Mall", to: "City Hospital", distance: 3.5, speedLimit: 50, trafficFactor: 1.1 },
    { from: "Financial District", to: "Tech Park", distance: 4.0, speedLimit: 60, trafficFactor: 1.4 },
    { from: "Financial District", to: "Residential Block B", distance: 3.8, speedLimit: 50, trafficFactor: 2.0 },
    { from: "Tech Park", to: "City Hospital", distance: 5.2, speedLimit: 50, trafficFactor: 1.3 },
    { from: "Tech Park", to: "Airport", distance: 6.0, speedLimit: 80, trafficFactor: 1.0 },
    { from: "Residential Block A", to: "University Campus", distance: 3.0, speedLimit: 30, trafficFactor: 1.0 },
    { from: "Residential Block A", to: "Green Park", distance: 4.8, speedLimit: 40, trafficFactor: 1.2 },
    { from: "City Hospital", to: "Green Park", distance: 2.2, speedLimit: 40, trafficFactor: 1.1 },
    { from: "University Campus", to: "Green Park", distance: 2.0, speedLimit: 30, trafficFactor: 1.0 },
    { from: "Green Park", to: "Airport", distance: 8.5, speedLimit: 70, trafficFactor: 1.5 }
  ]
};

// ============================================================================
// 1b. Maharashtra Highway Network Dataset (Real NH Distances)
// ============================================================================
const MAHARASHTRA_MAP = {
  cityName: "Maharashtra Highway Network",
  nodes: {
    // Coordinates scaled to 1-9 grid from real Lon/Lat
    // Lon range: 72.5°E – 79.5°E  →  X: 1–9
    // Lat range: 16.5°N – 21.5°N  →  Y: 1–9
    "Mumbai":       { x: 1.4, y: 5.1, description: "Financial capital of India. Major seaport & trade hub." },
    "Thane":        { x: 1.6, y: 5.5, description: "Satellite city of Mumbai. Industrial & residential hub." },
    "Navi Mumbai":  { x: 1.7, y: 5.0, description: "Planned township across Thane Creek from Mumbai." },
    "Nashik":       { x: 2.5, y: 7.0, description: "Grape & wine capital. Gateway to Maharashtra from north." },
    "Pune":         { x: 2.6, y: 4.6, description: "IT hub & Oxford of the East. NH-48 junction." },
    "Kolhapur":     { x: 3.0, y: 1.3, description: "Historical city. Kolhapuri chappals & jaggery belt." },
    "Satara":       { x: 2.7, y: 2.9, description: "District on NH-48. Close to Mahabaleshwar hill station." },
    "Solapur":      { x: 4.9, y: 2.9, description: "Textile city on Maharashtra-Karnataka border (NH-65)." },
    "Aurangabad":   { x: 4.2, y: 6.8, description: "UNESCO heritage zone. Gateway to Ajanta & Ellora." },
    "Jalgaon":      { x: 4.5, y: 9.0, description: "Banana capital of India. NH-53 & NH-6 junction." },
    "Latur":        { x: 5.7, y: 4.4, description: "Agricultural region. Connects Marathwada to Karnataka." },
    "Nanded":       { x: 6.5, y: 5.2, description: "Sikh pilgrimage city. Hazur Sahib Gurudwara." },
    "Akola":        { x: 6.2, y: 8.7, description: "Cotton trading city in Vidarbha region (NH-53)." },
    "Amravati":     { x: 7.0, y: 9.0, description: "Vidarbha district. Close to Melghat Tiger Reserve." },
    "Nagpur":       { x: 8.5, y: 9.0, description: "Orange city. Geographic centre of India. NH-44 junction." }
  },
  edges: [
    // === MUMBAI METRO CONNECTIONS ===
    { from: "Mumbai",      to: "Thane",        distance: 35,   speedLimit: 60,  trafficFactor: 2.5 },
    { from: "Mumbai",      to: "Navi Mumbai",   distance: 25,   speedLimit: 60,  trafficFactor: 2.0 },
    { from: "Mumbai",      to: "Pune",          distance: 150,  speedLimit: 80,  trafficFactor: 1.6 }, // NH-48 (Expressway)
    { from: "Mumbai",      to: "Nashik",        distance: 167,  speedLimit: 80,  trafficFactor: 1.4 }, // NH-60
    { from: "Thane",       to: "Nashik",        distance: 140,  speedLimit: 70,  trafficFactor: 1.3 },
    { from: "Navi Mumbai", to: "Pune",          distance: 140,  speedLimit: 80,  trafficFactor: 1.4 },
    // === PUNE CONNECTIONS ===
    { from: "Pune",        to: "Aurangabad",    distance: 235,  speedLimit: 80,  trafficFactor: 1.2 }, // NH-60
    { from: "Pune",        to: "Solapur",       distance: 245,  speedLimit: 80,  trafficFactor: 1.2 }, // NH-65
    { from: "Pune",        to: "Satara",        distance: 116,  speedLimit: 80,  trafficFactor: 1.2 }, // NH-48
    { from: "Pune",        to: "Kolhapur",      distance: 228,  speedLimit: 80,  trafficFactor: 1.2 }, // NH-48
    // === NASHIK CONNECTIONS ===
    { from: "Nashik",      to: "Aurangabad",    distance: 187,  speedLimit: 70,  trafficFactor: 1.2 }, // NH-60
    { from: "Nashik",      to: "Jalgaon",       distance: 166,  speedLimit: 70,  trafficFactor: 1.1 }, // NH-60
    // === AURANGABAD CONNECTIONS ===
    { from: "Aurangabad",  to: "Nagpur",        distance: 387,  speedLimit: 80,  trafficFactor: 1.2 }, // NH-44
    { from: "Aurangabad",  to: "Nanded",        distance: 270,  speedLimit: 70,  trafficFactor: 1.2 },
    { from: "Aurangabad",  to: "Jalgaon",       distance: 196,  speedLimit: 70,  trafficFactor: 1.1 },
    { from: "Aurangabad",  to: "Latur",         distance: 248,  speedLimit: 70,  trafficFactor: 1.2 },
    // === VIDARBHA (EAST MAHARASHTRA) CONNECTIONS ===
    { from: "Nagpur",      to: "Amravati",      distance: 155,  speedLimit: 80,  trafficFactor: 1.1 }, // NH-53
    { from: "Nagpur",      to: "Akola",         distance: 262,  speedLimit: 80,  trafficFactor: 1.1 }, // NH-53
    { from: "Akola",       to: "Amravati",      distance: 60,   speedLimit: 70,  trafficFactor: 1.1 },
    { from: "Akola",       to: "Jalgaon",       distance: 196,  speedLimit: 70,  trafficFactor: 1.1 },
    // === MARATHWADA CONNECTIONS ===
    { from: "Nanded",      to: "Latur",         distance: 175,  speedLimit: 70,  trafficFactor: 1.2 },
    { from: "Solapur",     to: "Latur",         distance: 105,  speedLimit: 70,  trafficFactor: 1.1 },
    { from: "Solapur",     to: "Kolhapur",      distance: 230,  speedLimit: 70,  trafficFactor: 1.1 },
    // === SOUTH MAHARASHTRA ===
    { from: "Satara",      to: "Kolhapur",      distance: 125,  speedLimit: 80,  trafficFactor: 1.1 }, // NH-48
    { from: "Satara",      to: "Solapur",       distance: 205,  speedLimit: 70,  trafficFactor: 1.2 }
  ]
};

// ============================================================================
// 1c. India National Highway Grid Dataset
// ============================================================================
const INDIA_MAP = {
  cityName: "India National Highway Grid",
  nodes: {
    "New Delhi":   { x: 2.4, y: 8.5, description: "National Capital of India." },
    "Mumbai":      { x: 1.4, y: 4.0, description: "Financial capital and major seaport." },
    "Bengaluru":   { x: 3.1, y: 1.4, description: "Silicon Valley of India, IT Hub." },
    "Chennai":     { x: 5.0, y: 1.5, description: "Cultural capital and automotive hub." },
    "Kolkata":     { x: 8.6, y: 6.5, description: "Historical capital and eastern gateway." },
    "Hyderabad":   { x: 4.1, y: 2.8, description: "Technological hub and historical city." },
    "Pune":        { x: 1.7, y: 3.6, description: "IT hub near Mumbai. NH-48 junction." },
    "Ahmedabad":   { x: 1.2, y: 6.0, description: "Industrial textile center in western India." },
    "Jaipur":      { x: 2.0, y: 7.7, description: "The Pink City, tourism and heritage center." },
    "Lucknow":     { x: 5.4, y: 7.7, description: "Capital of Uttar Pradesh, heritage center." }
  },
  edges: [
    { from: "New Delhi",  to: "Jaipur",     distance: 270,  speedLimit: 80, trafficFactor: 1.3 },
    { from: "New Delhi",  to: "Lucknow",    distance: 530,  speedLimit: 90, trafficFactor: 1.1 },
    { from: "New Delhi",  to: "Ahmedabad",  distance: 930,  speedLimit: 80, trafficFactor: 1.2 },
    { from: "Jaipur",     to: "Ahmedabad",  distance: 680,  speedLimit: 80, trafficFactor: 1.2 },
    { from: "Mumbai",     to: "Ahmedabad",  distance: 520,  speedLimit: 90, trafficFactor: 1.4 },
    { from: "Mumbai",     to: "Pune",       distance: 150,  speedLimit: 80, trafficFactor: 1.6 },
    { from: "Mumbai",     to: "Bengaluru",  distance: 980,  speedLimit: 80, trafficFactor: 1.2 },
    { from: "Pune",       to: "Bengaluru",  distance: 840,  speedLimit: 80, trafficFactor: 1.2 },
    { from: "Bengaluru",  to: "Chennai",    distance: 350,  speedLimit: 90, trafficFactor: 1.3 },
    { from: "Bengaluru",  to: "Hyderabad",  distance: 570,  speedLimit: 90, trafficFactor: 1.1 },
    { from: "Chennai",    to: "Hyderabad",  distance: 630,  speedLimit: 80, trafficFactor: 1.2 },
    { from: "Chennai",    to: "Kolkata",    distance: 1660, speedLimit: 80, trafficFactor: 1.3 },
    { from: "Kolkata",    to: "Lucknow",    distance: 980,  speedLimit: 75, trafficFactor: 1.2 },
    { from: "Kolkata",    to: "Hyderabad",  distance: 1490, speedLimit: 80, trafficFactor: 1.2 },
    { from: "Hyderabad",  to: "Pune",       distance: 560,  speedLimit: 80, trafficFactor: 1.2 }
  ]
};

// ============================================================================
// 2. Graph Data Structure
// ============================================================================
class Graph {
  constructor() {
    this.nodes = {}; // name -> {x, y, description}
    this.adjacencyList = {}; // name -> list of {to, distance, speedLimit, trafficFactor, time}
  }

  clear() {
    this.nodes = {};
    this.adjacencyList = {};
  }

  addNode(name, x, y, description = "") {
    if (!this.nodes[name]) {
      this.nodes[name] = { x: parseFloat(x), y: parseFloat(y), description };
      this.adjacencyList[name] = [];
      return true;
    }
    return false;
  }

  addEdge(u, v, distance, speedLimit = 40, trafficFactor = 1.0) {
    if (!this.nodes[u]) this.addNode(u, 0, 0);
    if (!this.nodes[v]) this.addNode(v, 0, 0);

    // time in minutes = (dist / speed) * traffic * 60
    const time = (distance / speedLimit) * trafficFactor * 60.0;

    const edgeU = { to: v, distance, speedLimit, trafficFactor, time };
    const edgeV = { to: u, distance, speedLimit, trafficFactor, time };

    // Update if edge exists, otherwise append
    let existU = this.adjacencyList[u].find(e => e.to === v);
    if (existU) Object.assign(existU, edgeU);
    else this.adjacencyList[u].push(edgeU);

    let existV = this.adjacencyList[v].find(e => e.to === u);
    if (existV) Object.assign(existV, edgeV);
    else this.adjacencyList[v].push(edgeV);
  }

  getNeighbors(name) {
    return this.adjacencyList[name] || [];
  }

  getEdge(u, v) {
    if (this.adjacencyList[u]) {
      return this.adjacencyList[u].find(e => e.to === v);
    }
    return null;
  }
}

// Instantiate Global Graph Object
const graph = new Graph();

// ============================================================================
// 3. Pathfinding Algorithms (BFS, DFS, Dijkstra, A*)
// ============================================================================

// BFS implementation: Returns path and visited nodes list (for animation)
function bfs(start, end) {
  if (!graph.nodes[start] || !graph.nodes[end]) return { path: null, visited: [] };

  const visited = new Set();
  const queue = [[start]];
  const visitedOrder = [];

  visited.add(start);

  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];
    visitedOrder.push(node);

    if (node === end) {
      return { path, visited: visitedOrder };
    }

    for (const edge of graph.getNeighbors(node)) {
      const neighbor = edge.to;
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        const newPath = [...path, neighbor];
        queue.push(newPath);
      }
    }
  }

  return { path: null, visited: visitedOrder };
}

// DFS implementation: Stack-based
function dfs(start, end) {
  if (!graph.nodes[start] || !graph.nodes[end]) return { path: null, visited: [] };

  const visited = new Set();
  const stack = [{ node: start, path: [start] }];
  const visitedOrder = [];

  while (stack.length > 0) {
    const { node, path } = stack.pop();

    if (!visited.has(node)) {
      visited.add(node);
      visitedOrder.push(node);

      if (node === end) {
        return { path, visited: visitedOrder };
      }

      // Reverse neighbors to match standard CLI traversal direction
      const neighbors = [...graph.getNeighbors(node)].reverse();
      for (const edge of neighbors) {
        const neighbor = edge.to;
        if (!visited.has(neighbor)) {
          stack.push({ node: neighbor, path: [...path, neighbor] });
        }
      }
    }
  }

  return { path: null, visited: visitedOrder };
}

// Dijkstra implementation: using dynamic sorted array as Priority Queue
function dijkstra(start, end, weightType = "distance") {
  if (!graph.nodes[start] || !graph.nodes[end]) return { path: null, weight: Infinity, visited: [] };

  const distances = {};
  const predecessors = {};
  const visited = new Set();
  const visitedOrder = [];

  // Initialize distances
  for (const node in graph.nodes) {
    distances[node] = Infinity;
    predecessors[node] = null;
  }
  distances[start] = 0;

  // Priority queue elements: { node, priority }
  const pq = [{ node: start, priority: 0 }];

  while (pq.length > 0) {
    // Sort to extract minimum (behaves like a min-heap)
    pq.sort((a, b) => a.priority - b.priority);
    const { node: u } = pq.shift();

    if (visited.has(u)) continue;
    visited.add(u);
    visitedOrder.push(u);

    if (u === end) break;

    for (const edge of graph.getNeighbors(u)) {
      const v = edge.to;
      if (visited.has(v)) continue;

      const weight = edge[weightType];
      const newDist = distances[u] + weight;

      if (newDist < distances[v]) {
        distances[v] = newDist;
        predecessors[v] = u;
        pq.push({ node: v, priority: newDist });
      }
    }
  }

  // Reconstruct path
  if (distances[end] === Infinity) return { path: null, weight: Infinity, visited: visitedOrder };

  const path = [];
  let curr = end;
  while (curr !== null) {
    path.push(curr);
    curr = predecessors[curr];
  }
  path.reverse();

  return { path, weight: distances[end], visited: visitedOrder };
}

// A* Search: Uses Euclidean coordinate heuristic
function aStar(start, end, weightType = "distance") {
  if (!graph.nodes[start] || !graph.nodes[end]) return { path: null, weight: Infinity, visited: [] };

  const gScores = {};
  const predecessors = {};
  const visited = new Set();
  const visitedOrder = [];

  for (const node in graph.nodes) {
    gScores[node] = Infinity;
    predecessors[node] = null;
  }
  gScores[start] = 0;

  const getHeuristic = (n) => {
    const n1 = graph.nodes[n];
    const n2 = graph.nodes[end];
    const dist = Math.sqrt(Math.pow(n1.x - n2.x, 2) + Math.pow(n1.y - n2.y, 2));
    
    if (weightType === "time") {
      // Underestimate time: Euclidean distance divided by max speed (80 km/h) in minutes
      return (dist / 80.0) * 60.0;
    }
    return dist;
  };

  const pq = [{ node: start, fScore: getHeuristic(start), gScore: 0 }];

  while (pq.length > 0) {
    pq.sort((a, b) => a.fScore - b.fScore);
    const { node: u, gScore: currentG } = pq.shift();

    if (visited.has(u)) continue;
    visited.add(u);
    visitedOrder.push(u);

    if (u === end) break;

    for (const edge of graph.getNeighbors(u)) {
      const v = edge.to;
      if (visited.has(v)) continue;

      const weight = edge[weightType];
      const tentativeG = currentG + weight;

      if (tentativeG < gScores[v]) {
        gScores[v] = tentativeG;
        predecessors[v] = u;
        const fScore = tentativeG + getHeuristic(v);
        pq.push({ node: v, fScore, gScore: tentativeG });
      }
    }
  }

  if (gScores[end] === Infinity) return { path: null, weight: Infinity, visited: visitedOrder };

  const path = [];
  let curr = end;
  while (curr !== null) {
    path.push(curr);
    curr = predecessors[curr];
  }
  path.reverse();

  return { path, weight: gScores[end], visited: visitedOrder };
}

// ============================================================================
// 4. UI Controllers & Map Visualizer Rendering
// ============================================================================
const svg = document.getElementById("map-svg");
const edgesGroup = document.getElementById("edges-group");
const pathEdgesGroup = document.getElementById("path-edges-group");
const nodesGroup = document.getElementById("nodes-group");

const startSelect = document.getElementById("start-node");
const endSelect = document.getElementById("end-node");
const edgeUSelect = document.getElementById("edge-u");
const edgeVSelect = document.getElementById("edge-v");

const consoleLogs = document.getElementById("console-logs");
const comparisonBody = document.getElementById("comparison-table-body");
const savingsBox = document.getElementById("savings-insight");

let startNode = null;
let endNode = null;
let activeAnimationTimeoutIds = [];

// Coordinates Projection Constants (Translates graph grid 1-10 to SVG 800x500 px)
const scaleX = (x) => 80 + (x - 1) * 80;
const scaleY = (y) => 420 - (y - 1) * 45; // flips y axis so coordinate 9 is top, coordinate 1 is bottom

// Helper: print logs to dashboard terminal console
function logToConsole(message, type = "info") {
  const line = document.createElement("div");
  line.className = `log-line ${type}`;
  line.innerText = `[${new Date().toLocaleTimeString()}] ${message}`;
  consoleLogs.appendChild(line);
  consoleLogs.scrollTop = consoleLogs.scrollHeight;
}

// Initialize map based on selector value
function loadMap(mapId) {
  graph.clear();
  clearAnimationTimeouts();

  let mapData = DEFAULT_MAP;
  let defaultStart = "Central Station";
  let defaultEnd   = "Airport";

  if (mapId === "maharashtra") {
    mapData      = MAHARASHTRA_MAP;
    defaultStart = "Mumbai";
    defaultEnd   = "Nagpur";
    document.getElementById("gmaps-key-group").style.display = "flex";
  } else if (mapId === "india") {
    mapData      = INDIA_MAP;
    defaultStart = "New Delhi";
    defaultEnd   = "Kolkata";
    document.getElementById("gmaps-key-group").style.display = "flex";
  } else {
    document.getElementById("gmaps-key-group").style.display = "none";
  }

  for (const [name, info] of Object.entries(mapData.nodes)) {
    graph.addNode(name, info.x, info.y, info.description);
  }
  for (const edge of mapData.edges) {
    graph.addEdge(edge.from, edge.to, edge.distance, edge.speedLimit, edge.trafficFactor);
  }

  document.getElementById("city-title").innerText = mapData.cityName;
  logToConsole(`Loaded map: ${mapData.cityName} (${Object.keys(mapData.nodes).length} cities, ${mapData.edges.length} roads).`, "success");
  updateDropdowns(defaultStart, defaultEnd);
  renderGraph();
  updateComparisonTable();
}

// Convenience wrapper kept for boot-up
function loadDefaultMap() { loadMap("metrocity"); }

// Update selections and dropdowns in UI
function updateDropdowns(defaultStart = null, defaultEnd = null) {
  const nodes = Object.keys(graph.nodes).sort();
  
  const populate = (select, defaultVal) => {
    select.innerHTML = "";
    nodes.forEach(node => {
      const opt = document.createElement("option");
      opt.value = node;
      opt.innerText = node;
      if (node === defaultVal) opt.selected = true;
      select.appendChild(opt);
    });
  };

  populate(startSelect, defaultStart || nodes[0]);
  populate(endSelect,   defaultEnd   || nodes[nodes.length - 1]);
  populate(edgeUSelect, nodes[0]);
  populate(edgeVSelect, nodes[1]);

  startNode = startSelect.value;
  endNode   = endSelect.value;
}

// Render Graph to SVG
function renderGraph() {
  edgesGroup.innerHTML = "";
  pathEdgesGroup.innerHTML = "";
  nodesGroup.innerHTML = "";

  const renderedEdges = new Set();

  // Draw Edges (Roads)
  for (const [u, edges] of Object.entries(graph.adjacencyList)) {
    for (const edge of edges) {
      const v = edge.to;
      const edgeKey = [u, v].sort().join("->");
      if (renderedEdges.has(edgeKey)) continue;
      renderedEdges.add(edgeKey);

      const n1 = graph.nodes[u];
      const n2 = graph.nodes[v];

      const x1 = scaleX(n1.x);
      const y1 = scaleY(n1.y);
      const x2 = scaleX(n2.x);
      const y2 = scaleY(n2.y);

      // Edge link path
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", x1);
      line.setAttribute("y1", y1);
      line.setAttribute("x2", x2);
      line.setAttribute("y2", y2);
      line.setAttribute("class", "edge-line");
      line.setAttribute("id", `edge-${u.replace(/\s+/g, '_')}-${v.replace(/\s+/g, '_')}`);
      edgesGroup.appendChild(line);

      // Edge weight text indicator
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2 - 8;
      text.setAttribute("x", midX);
      text.setAttribute("y", midY);
      text.setAttribute("class", "edge-weight");
      text.textContent = `${edge.distance}km (${edge.trafficFactor}x)`;
      edgesGroup.appendChild(text);
    }
  }

  // Draw Nodes (Intersections)
  for (const [name, node] of Object.entries(graph.nodes)) {
    const x = scaleX(node.x);
    const y = scaleY(node.y);

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "node-group");
    g.setAttribute("id", `node-g-${name.replace(/\s+/g, '_')}`);

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 14);
    
    // Assign specific initial styling depending on active endpoints selection
    if (name === startNode) {
      circle.setAttribute("class", "node-circle node-start");
    } else if (name === endNode) {
      circle.setAttribute("class", "node-circle node-end");
    } else {
      circle.setAttribute("class", "node-circle");
    }
    
    circle.setAttribute("id", `node-${name.replace(/\s+/g, '_')}`);
    
    // Add tooltip details
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = `${name}\nCoord: (${node.x}, ${node.y})\n${node.description}`;
    circle.appendChild(title);

    // Dynamic Map Click Bind: Set endpoints interactively
    circle.addEventListener("click", () => {
      if (name === startNode) return;
      if (!startNode || (startNode && endNode)) {
        startNode = name;
        endNode = null;
        logToConsole(`Set Start Location to: ${name}`, "success");
      } else {
        endNode = name;
        logToConsole(`Set Destination to: ${name}`, "success");
      }
      syncDropdownSelections();
      renderGraph();
    });

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y + 30);
    text.setAttribute("class", "node-label");
    text.textContent = name;

    g.appendChild(circle);
    g.appendChild(text);
    nodesGroup.appendChild(g);
  }
}

// Sync node click updates back to HTML sidebar selects
function syncDropdownSelections() {
  if (startNode) startSelect.value = startNode;
  if (endNode) endSelect.value = endNode;
  else endSelect.value = "";
}

// Cancel ongoing traversals
function clearAnimationTimeouts() {
  activeAnimationTimeoutIds.forEach(id => clearTimeout(id));
  activeAnimationTimeoutIds = [];
}

// ============================================================================
// 5. Execution Controller & Animations
// ============================================================================
function findAndAnimateRoute() {
  clearAnimationTimeouts();
  
  if (!startNode || !endNode) {
    alert("Please select both a Start Location and a Destination.");
    return;
  }

  renderGraph(); // Reset styling to base level before drawing new animation path
  logToConsole(`Initiating route planning: ${startNode} ➡️  ${endNode}`, "system");

  const alg = document.getElementById("algorithm").value;
  const animSpeed = parseInt(document.getElementById("speed-slider").value);
  
  let result = null;
  let algorithmLabel = "";
  let metricType = "distance";

  // Calculate using Javascript algorithms depending on selection
  if (alg === "bfs") {
    result = bfs(startNode, endNode);
    algorithmLabel = "BFS (Fewest Stops)";
  } else if (alg === "dfs") {
    result = dfs(startNode, endNode);
    algorithmLabel = "DFS (Explored Path)";
  } else if (alg === "dijkstra-distance") {
    result = dijkstra(startNode, endNode, "distance");
    algorithmLabel = "Dijkstra (Shortest Distance)";
    metricType = "distance";
  } else if (alg === "dijkstra-time") {
    result = dijkstra(startNode, endNode, "time");
    algorithmLabel = "Dijkstra (Fastest Time)";
    metricType = "time";
  } else if (alg === "astar") {
    result = aStar(startNode, endNode, "distance");
    algorithmLabel = "A* Search (Heuristic)";
    metricType = "distance";
  }

  const { path, visited } = result;

  if (!path) {
    logToConsole(`❌ No path could be resolved from ${startNode} to ${endNode}.`, "result");
    return;
  }

  logToConsole(`Algorithm execution complete. Found path with ${path.length} nodes. Animating traversal...`, "info");

  // Animate search exploration traversal (Visited Order)
  visited.forEach((nodeName, index) => {
    const timeoutId = setTimeout(() => {
      // Don't modify start/end base nodes visual
      if (nodeName !== startNode && nodeName !== endNode) {
        const circle = document.getElementById(`node-${nodeName.replace(/\s+/g, '_')}`);
        if (circle) circle.setAttribute("class", "node-circle node-visited");
      }
      logToConsole(`Searching node: ${nodeName}`, "visited");

      // Highlight corresponding edge in the search tree (visited edges)
      if (index > 0) {
        const prevNode = visited[index - 1];
        highlightEdge(prevNode, nodeName, "edge-visited", edgesGroup);
      }
    }, index * animSpeed);
    activeAnimationTimeoutIds.push(timeoutId);
  });

  // Final path visual highlight (Runs after exploration traversal is finished)
  const pathAnimationStartDelay = visited.length * animSpeed;
  const finalPathTimeoutId = setTimeout(() => {
    logToConsole(`Route reconstruction tracing finished. Drawing final route.`, "success");
    
    let totalDist = 0;
    let totalTime = 0;

    // Draw final path edges in bold orange
    for (let i = 0; i < path.length - 1; i++) {
      const u = path[i];
      const v = path[i+1];
      const edge = graph.getEdge(u, v);
      
      if (edge) {
        totalDist += edge.distance;
        totalTime += edge.time;
      }
      highlightEdge(u, v, "edge-path", pathEdgesGroup);
    }

    // Set highlights on nodes
    path.forEach(nodeName => {
      const circle = document.getElementById(`node-${nodeName.replace(/\s+/g, '_')}`);
      if (circle && nodeName !== startNode && nodeName !== endNode) {
        circle.setAttribute("class", "node-circle node-visited");
        circle.style.fill = "#d35400"; // Orange final node indicators
        circle.style.stroke = "#e67e22";
      }
    });

    // Update KPI panels in UI
    document.getElementById("stat-distance").innerText = `${totalDist.toFixed(2)} km`;
    document.getElementById("stat-time").innerText = `${totalTime.toFixed(2)} mins`;
    const numStops = path.length - 2;
    document.getElementById("stat-stops").innerText = `${numStops} stop${numStops !== 1 ? 's' : ''}`;
    const avgSpeed = totalTime > 0 ? (totalDist / (totalTime / 60)) : 0;
    document.getElementById("stat-speed").innerText = `${avgSpeed.toFixed(2)} km/h`;

    logToConsole(`🟢 PATH SUMMARY: ${path.join(" ➡️  ")}`, "result");
    logToConsole(`📏 Total Distance: ${totalDist.toFixed(2)} km | ⏱️  Estimated Time: ${totalTime.toFixed(2)} mins`, "result");

    // Recalculate Table Comparison Matrix
    updateComparisonTable(path, algorithmLabel);
  }, pathAnimationStartDelay);
  
  activeAnimationTimeoutIds.push(finalPathTimeoutId);
}

// Utility function to color/highlight dynamic edges
function highlightEdge(u, v, className, containerGroup) {
  const n1 = graph.nodes[u];
  const n2 = graph.nodes[v];

  if (!n1 || !n2) return;

  const x1 = scaleX(n1.x);
  const y1 = scaleY(n1.y);
  const x2 = scaleX(n2.x);
  const y2 = scaleY(n2.y);

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("class", className);
  containerGroup.appendChild(line);
}

// ============================================================================
// 6. Statistics Table & Performance Comparison Matrix
// ============================================================================
function updateComparisonTable(activePath = null, activeLabel = "") {
  if (!startNode || !endNode) {
    comparisonBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">Configure endpoints to view comparison</td></tr>`;
    return;
  }

  const algorithms = [
    { id: "bfs", name: "BFS (Fewest Stops)", run: () => bfs(startNode, endNode) },
    { id: "dfs", name: "DFS (Unoptimized)", run: () => dfs(startNode, endNode) },
    { id: "dijkstra-distance", name: "Dijkstra (Shortest Distance)", run: () => dijkstra(startNode, endNode, "distance") },
    { id: "dijkstra-time", name: "Dijkstra (Fastest Time)", run: () => dijkstra(startNode, endNode, "time") },
    { id: "astar", name: "A* Search (Distance Heuristic)", run: () => aStar(startNode, endNode, "distance") }
  ];

  comparisonBody.innerHTML = "";

  let dijkstraDistMetrics = null;
  let dfsMetrics = null;

  algorithms.forEach(alg => {
    const { path } = alg.run();
    let dist = 0;
    let time = 0;
    let stops = 0;
    let statusClass = "idle";
    let statusLabel = "Idle";

    if (path) {
      stops = path.length - 2;
      for (let i = 0; i < path.length - 1; i++) {
        const edge = graph.getEdge(path[i], path[i+1]);
        if (edge) {
          dist += edge.distance;
          time += edge.time;
        }
      }
      
      if (alg.name === activeLabel) {
        statusClass = "active-route";
        statusLabel = "Active Path";
      } else {
        statusClass = "success";
        statusLabel = "Computed";
      }

      if (alg.id === "dijkstra-distance") dijkstraDistMetrics = { dist, time };
      if (alg.id === "dfs") dfsMetrics = { dist, time };
    } else {
      statusClass = "idle";
      statusLabel = "No Path";
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${alg.name}</strong></td>
      <td class="mono">${path ? dist.toFixed(2) + ' km' : 'N/A'}</td>
      <td class="mono">${path ? time.toFixed(2) + ' mins' : 'N/A'}</td>
      <td class="mono">${path ? stops : 'N/A'}</td>
      <td><span class="status-badge ${statusClass}">${statusLabel}</span></td>
    `;
    comparisonBody.appendChild(tr);
  });

  // Calculate and display performance gain summaries
  if (dijkstraDistMetrics && dfsMetrics && dfsMetrics.dist > 0) {
    const distSavedVal = dfsMetrics.dist - dijkstraDistMetrics.dist;
    const distSavedPct = (distSavedVal / dfsMetrics.dist) * 100;
    const timeSavedVal = dfsMetrics.time - dijkstraDistMetrics.time;
    const timeSavedPct = (timeSavedVal / dfsMetrics.time) * 100;

    savingsBox.innerHTML = `
      ⚡ <strong>Optimization Insight:</strong> Dijkstra's Shortest Path reduces travel distance by 
      <strong>${distSavedVal.toFixed(2)} km (${distSavedPct.toFixed(1)}%)</strong> and travel duration by 
      <strong>${timeSavedVal.toFixed(2)} mins (${timeSavedPct.toFixed(1)}%)</strong> compared to standard unoptimized DFS traversal.
    `;
  } else {
    savingsBox.innerHTML = "Select start/end and run a route to view optimizations.";
  }
}

// ============================================================================
// 7. Event Handlers & Interactivity bindings
// ============================================================================

// Map network selector — switches between MetroCity / Maharashtra / India
document.getElementById("map-selector").addEventListener("change", (e) => {
  loadMap(e.target.value);
  // Reset KPI cards when switching networks
  document.getElementById("stat-distance").innerText = "0.00 km";
  document.getElementById("stat-time").innerText     = "0.00 mins";
  document.getElementById("stat-stops").innerText    = "0 stops";
  document.getElementById("stat-speed").innerText    = "0.00 km/h";
});

// Sync dropdown selects changes to global endpoints states
startSelect.addEventListener("change", () => {
  startNode = startSelect.value;
  renderGraph();
  updateComparisonTable();
});

endSelect.addEventListener("change", () => {
  endNode = endSelect.value;
  if (endNode === startNode) {
    alert("Source and Destination cannot be the same location.");
    endSelect.value = "";
    endNode = null;
  }
  renderGraph();
  updateComparisonTable();
});

// Calculate button trigger
document.getElementById("btn-find-route").addEventListener("click", findAndAnimateRoute);

// Reset button — re-loads whichever network map is currently selected
document.getElementById("btn-reset").addEventListener("click", () => {
  const currentMap = document.getElementById("map-selector").value;
  loadMap(currentMap);
  document.getElementById("stat-distance").innerText = "0.00 km";
  document.getElementById("stat-time").innerText     = "0.00 mins";
  document.getElementById("stat-stops").innerText    = "0 stops";
  document.getElementById("stat-speed").innerText    = "0.00 km/h";
});

// Speed slider feedback listener
const speedSlider = document.getElementById("speed-slider");
speedSlider.addEventListener("input", () => {
  document.getElementById("speed-val").innerText = `${speedSlider.value}ms`;
});

// Clear Console button
document.getElementById("btn-clear-console").addEventListener("click", () => {
  consoleLogs.innerHTML = "";
  const line = document.createElement("div");
  line.className = "log-line system";
  line.innerText = `[${new Date().toLocaleTimeString()}] Console cleared. Ready for next route calculation.`;
  consoleLogs.appendChild(line);
});

// Node Editor - Tabs Toggle
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// Add Node handler
document.getElementById("btn-add-node").addEventListener("click", () => {
  const name = document.getElementById("new-node-name").value.trim();
  const x = parseFloat(document.getElementById("new-node-x").value);
  const y = parseFloat(document.getElementById("new-node-y").value);
  const desc = document.getElementById("new-node-desc").value.trim();

  if (!name || isNaN(x) || isNaN(y)) {
    alert("Please enter a valid Name, X coordinate, and Y coordinate.");
    return;
  }

  if (x < 1 || x > 10 || y < 1 || y > 10) {
    alert("Coordinates must be between 1 and 10 for grid positioning.");
    return;
  }

  const added = graph.addNode(name, x, y, desc || "Custom user landmark.");
  if (added) {
    logToConsole(`Created new location node: ${name} at (${x}, ${y})`, "success");
    updateDropdowns();
    renderGraph();
    // clear fields
    document.getElementById("new-node-name").value = "";
    document.getElementById("new-node-x").value = "";
    document.getElementById("new-node-y").value = "";
    document.getElementById("new-node-desc").value = "";
  } else {
    alert("Location node already exists.");
  }
});

// Add Edge handler
document.getElementById("btn-add-edge").addEventListener("click", () => {
  const u = document.getElementById("edge-u").value;
  const v = document.getElementById("edge-v").value;
  const dist = parseFloat(document.getElementById("edge-dist").value);
  const speed = parseInt(document.getElementById("edge-speed").value);
  const traffic = parseFloat(document.getElementById("edge-traffic").value);

  if (!u || !v || isNaN(dist) || isNaN(speed)) {
    alert("Please select both locations, distance, and speed limit.");
    return;
  }

  if (u === v) {
    alert("Cannot connect a location to itself.");
    return;
  }

  if (dist <= 0 || speed <= 0) {
    alert("Distance and Speed Limit must be positive numbers.");
    return;
  }

  graph.addEdge(u, v, dist, speed, traffic);
  logToConsole(`Created road link: ${u} 🔌 ${v} (${dist} km, Limit: ${speed} km/h, Traffic multiplier: ${traffic}x)`, "success");
  renderGraph();
  updateComparisonTable();
  
  // clear fields
  document.getElementById("edge-dist").value = "";
});

// ============================================================================
// 8. Lifecycle Bootstrap entry point
// ============================================================================
window.onload = loadDefaultMap;
