// Inputs are provided as argument can also use `arguments` 
// Example: areThereDuplicates(1,2,1,3) => true areThereDuplicates(1,'a','b',3) => false
// Time and Space complexity O(n)
function areThereDuplicates(...args) {
  const lookup = {};
  // good luck. (supply any arguments you deem necessary.)
  for (let i of args) {
      if(lookup[i]) return true;
      lookup[i] = true;
  }
  return false;
}
// One liner
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
