process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});


class PriorityQueue {
    constructor() {
      this.queue = [];
    }
    enqueue(val, priority) {
      let newNode = new Node(val, priority);
      this.queue.push(newNode);
      this.bubbleUp();
    }
    bubbleUp() {
      let idx = this.queue.length - 1;
      const element = this.queue[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.queue[parentIdx];
        if (element.priority >= parent.priority) break;
        this.queue[parentIdx] = element;
        this.queue[idx] = parent;
        idx = parentIdx;
      }
    }
    dequeue() {
      const min = this.queue[0];
      const end = this.queue.pop();
      if (this.queue.length > 0) {
        this.queue[0] = end;
        this.sinkDown();
      }
      return min;
    }
    sinkDown() {
      let idx = 0;
      const length = this.queue.length;
      const element = this.queue[0];
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;
        if (leftChildIdx < length) {
          leftChild = this.queue[leftChildIdx];
          if (leftChild.priority < element.priority) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.queue[rightChildIdx];
          if (swap === null && rightChild.priority < element.priority || swap !== null && rightChild.priority < leftChild.priority) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.queue[idx] = this.queue[swap];
        this.queue[swap] = element;
        idx = swap;
      }
    }
  
  }
  class Node {
    constructor(val, priority) {
      this.val = val;
      this.priority = priority;
    }
  
  }

process.stdin.on('end', function () {
        const initialArray = input_stdin.split('\n');
        const pointToReach = initialArray[0].split(" ")[0];
        const formattedList = initialArray.slice(1).map(i => i.split(" ")); // [[v1, v2, w]]
        const Graph = {};
        const vertices = [];
        formattedList.map(([p1, p2, w]) => {
            if (vertices.indexOf(p1) === -1) vertices.push(p1);
            if (vertices.indexOf(p2) === -1) vertices.push(p2);
            if (!Graph[p1]) {
                Graph[p1] = [];
            } 
            if (!Graph[p2]) {
                Graph[p2] = [];
            }
            
                Graph[p1].push([p2, +w]);
            
                Graph[p2].push([p1, +w]);

        });
        const traverse = (start, finish) => {
            const pq = new PriorityQueue();
            const distances = {}; // Least distances collection;
            const travelled = {}; // Path definition for traveled
            let smallest;
            vertices.map(vertex => { 
                distances[vertex] = vertex !== start ? Infinity : 0;
                pq.enqueue(vertex, distances[vertex]);
                travelled[vertex] = null;
            });
            let path = [];
            // Continue till there's anything in the queue
            while(pq.queue.length) {
                smallest = pq.dequeue().val;
                if(smallest === finish) { 
                    while(travelled[smallest]) {
                        path.push(smallest);
                        smallest = travelled[smallest];
                    }
                    break;
                }
                // iterate through neighbors of smallest
                Graph[smallest].map(([node, weight]) => {
                    const newNodeWeight = distances[smallest] + weight;
                    if(newNodeWeight < distances[node]) {
                        distances[node] = newNodeWeight;
                        travelled[node] = smallest;
                        pq.enqueue(node, newNodeWeight);
                    }
                })
            }
            if(!path.length) {
                return "NOT POSSIBLE";
            }
            let totalWeight = 0;
            let root = start;
            while(path.length) {
                const node = path.pop();
                const [,weight] = Graph[node].find(([n]) => root === n);
                root = node;
                if(totalWeight !==0 && weight <= totalWeight ) {}
                else {
                    totalWeight = weight;
                }
            }
            return totalWeight;

        }
	
	//Write code here
    
    process.stdout.write(""+traverse('1', pointToReach)+"\n");
});

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', (function (data) {
    input_stdin += data;
}));


class PriorityQueue {
    constructor() {
      this.queue = [];
    }
    enqueue(val, priority) {
      let newNode = new Node(val, priority);
      this.queue.push(newNode);
      this.bubbleUp();
    }
    bubbleUp() {
      let idx = this.queue.length - 1;
      const element = this.queue[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.queue[parentIdx];
        if (element.priority >= parent.priority) break;
        this.queue[parentIdx] = element;
        this.queue[idx] = parent;
        idx = parentIdx;
      }
    }
    dequeue() {
      const min = this.queue[0];
      const end = this.queue.pop();
      if (this.queue.length > 0) {
        this.queue[0] = end;
        this.sinkDown();
      }
      return min;
    }
    sinkDown() {
      let idx = 0;
      const length = this.queue.length;
      const element = this.queue[0];
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;
        if (leftChildIdx < length) {
          leftChild = this.queue[leftChildIdx];
          if (leftChild.priority < element.priority) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.queue[rightChildIdx];
          if (swap === null && rightChild.priority < element.priority || swap !== null && rightChild.priority < leftChild.priority) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.queue[idx] = this.queue[swap];
        this.queue[swap] = element;
        idx = swap;
      }
    }
  
  }
  class Node {
    constructor(val, priority) {
      this.val = val;
      this.priority = priority;
    }
  
  }

process.stdin.on('end', (function () {
        const initialArray = input_stdin.split('\n');
        const pointToReach = initialArray[0].split(" ")[0];
        const formattedList = initialArray.slice(1).map(i => i.split(" ")); // [[v1, v2, w]]
        const Graph = {};
        const vertices = [];
        formattedList.map(([p1, p2, w]) => {
            if (vertices.indexOf(p1) === -1) vertices.push(p1);
            if (vertices.indexOf(p2) === -1) vertices.push(p2);
            if (!Graph[p1]) {
                Graph[p1] = [];
            } 
            if (!Graph[p2]) {
                Graph[p2] = [];
            }
            
                Graph[p1].push([p2, +w]);
            
                Graph[p2].push([p1, +w]);

        });
        const traverse = (start, finish) => {
            const pq = new PriorityQueue();
            const distances = {}; // Least distances collection;
            const travelled = {}; // Path definition for traveled
            let smallest;
            vertices.map(vertex => { 
                distances[vertex] = vertex !== start ? Infinity : 0;
                pq.enqueue(vertex, distances[vertex]);
                travelled[vertex] = null;
            });
            let path = [];
            // Continue till there's anything in the queue
            while(pq.queue.length) {
                smallest = pq.dequeue().val;
                if(smallest === finish) { 
                    while(travelled[smallest]) {
                        path.push(smallest);
                        smallest = travelled[smallest];
                    }
                    break;
                }
                // iterate through neighbors of smallest
                Graph[smallest].map(([node, weight]) => {
                    const newNodeWeight = distances[smallest] + weight;
                    if(newNodeWeight < distances[node]) {
                        distances[node] = newNodeWeight;
                        travelled[node] = smallest;
                        pq.enqueue(node, newNodeWeight);
                    }
                })
            }
            if(!path.length) {
                return "NOT POSSIBLE";
            }
            let totalWeight = 0;
            let root = start;
            while(path.length) {
                const node = path.pop();
                const [,weight] = Graph[node].find(([n]) => root === n);
                root = node;
                if(totalWeight !==0 && weight <= totalWeight ) {}
                else {
                    totalWeight = weight;
                }
            }
            return totalWeight;

        }
	
	//Write code here
    
    process.stdout.write(""+traverse('1', pointToReach)+"\n");
}));
