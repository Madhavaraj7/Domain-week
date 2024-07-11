class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = new Set();
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].add(vertex2);
      this.adjacencyList[vertex2].add(vertex1);
    }
  
    depthFirstSearch(start) {
      const visited = {};
      const result = [];
      const adjacencyList1 = this.adjacencyList;
  
      (function dfs(vertex) {
        if (!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList1[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            return dfs(neighbor);
          }
        });
      })(start);
  
      return result;
    }
    breadthFirst(node) {
        if (!this.adjacencyList[node]) return null;
        let visited = {};
        let result = [];
        let queue = [];
        queue.push(node);
        visited[node] = true; 
        while (queue.length) {
          let vertex = queue.shift();
          result.push(vertex);
          for (let v of this.adjacencyList[vertex]) {
            if (!visited[v]) {
              queue.push(v);
              visited[v] = true;
            }
          }
        }
        return result;
    
      }
  }
  
  const g = new Graph();
  
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addEdge("A", "C");
  g.addEdge("B", "C");
  console.log(g.breadthFirst("B")); // Expected output: ["B", "C", "A"]
  