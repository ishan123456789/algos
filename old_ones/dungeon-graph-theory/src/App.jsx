import "./App.css";
import { useEffect, useState } from "react";
class Queue {
  constructor() {
    this.value = [];
    this.length = 0;
  }
  length() {
    return this.value.length;
  }
  enqueue(value) {
    this.value.push(value);
  }
  dequeue() {
    if (this.value.length === 0) return null;
    const [result] = this.value.splice(0, 1);
    return result;
  }
}
function App() {
  const R = 5,
    C = 7;
  const generateArray = (R, C, str) =>
    JSON.parse(JSON.stringify(new Array(R).fill(new Array(C).fill(str || ""))));
  const [grid, setGrid] = useState(generateArray(R, C));
  const [visited, setVisited] = useState(generateArray(R, C));
  const [reached, setReached] = useState(false);
  const [count, setCount] = useState(0);

  const s = "0_0";
  const e = "4_3";
  const hashed = ["0_3", "1_1", "1_5", "2_1", "3_2", "3_3", "4_0", "4_5"];
  const getString = (i, j) => `${i}_${j}`;
  const fillGrid = () => {
    grid.forEach((_, i) =>
      _.forEach((_, j) => {
        const str = getString(i, j);
        console.log("i_j", str);
        if (str === s) {
          grid[i][j] = "S";
        } else if (str === e) {
          grid[i][j] = "E";
        } else if (hashed.indexOf(str) > -1) {
          grid[i][j] = "#";
        } else {
          grid[i][j] = ".";
        }
      })
    );
    console.log("grid", grid);
    setGrid([...grid]);
  };
  const solve = async () => {
    /**
     * Starts from starting point finds it's neighbors, enqueue them
     * Later dequeue one by one
     */
    let layers = 0;
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    let nodesInCurrentLayer = 0;
    let nodesInNextLayer = 0;

    const queue = new Queue();

    const enqueueNeighbors = (r, c) => {
      const v = visited;
      for (let i = 0; i < 4; i++) {
        const rr = r + dr[i];
        const cc = c + dc[i];

        if (rr >= R || cc >= C || rr < 0 || cc < 0) continue;
        if (v[rr][cc]) continue;
        if (grid[rr][cc] === "#") continue;

        v[rr][cc] = true;
        queue.enqueue({ r: rr, c: cc });
        nodesInNextLayer++;
      }
      setVisited(JSON.parse(JSON.stringify(v)));
    };
    queue.enqueue({ r: 0, c: 0 });
    visited[0][0] = true;
    nodesInCurrentLayer++;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    while (nodesInCurrentLayer) {
      const { r, c } = queue.dequeue();
      if (grid[r][c] === "E") {
        setReached(true);
        console.log(count);
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      enqueueNeighbors(r, c);
      nodesInCurrentLayer--;
      debugger;
      if (nodesInCurrentLayer === 0) {
        nodesInCurrentLayer = nodesInNextLayer;
        nodesInNextLayer = 0;
        await new Promise((resolve) => setTimeout(resolve, 500));
        layers++;

        setCount(layers);
      }
    }
    return -1;
  };
  useEffect(() => {
    fillGrid();
    solve();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          Please find the Dungeon dragon BFS implementation
        </div>
        <h4>Layers covered {count}</h4>
        <div className="grid">
          {grid.map((columns, i) => (
            <div className="row" key={i}>
              {columns.map((row, j) => (
                <div
                  className={`column ${visited[i][j] ? "tracked" : ""}`}
                  key={j}
                >
                  {console.log({ g: grid[i][j], i, j, v: visited[i][j] })}
                  {grid[i][j]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
