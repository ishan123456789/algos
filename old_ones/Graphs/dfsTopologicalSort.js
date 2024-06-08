/**
 https://www.youtube.com/watch?v=AfSk24UTFS8
 https://www.youtube.com/watch?v=09_LlHjoEiY&t=4102s
 */
/**
 *
 * @param {*} graph adjacencyList expected
 */
const visited = [];
const dfsVisit = (node, graph) => {
  for (let n of graph[node]) {
    if (visited.indexOf(n) !== -1) continue;
    dfsVisit(n, graph);
    visited.push(n);
  }
};
const topSort = (graph) => {
  for (let node in graph) {
    if (visited.indexOf(node) !== -1) continue;
    dfsVisit(node, graph);
    visited.push(node);
  }
};
const graphAdjacencyList = {
  c: ["a", "b"],
  a: ["d"],
  b: ["d"],
  e: ["a", "d", "f"],
  d: ["h", "g"],
  f: ["k", "j"],
  h: ["j", "i"],
  g: ["i"],
  i: ["l"],
  j: ["l", "m"],
  k: ["j"],
  l: [],
  m: [],
};
topSort(graphAdjacencyList);
console.log("visited", visited);
