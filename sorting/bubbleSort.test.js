function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        arr = swap(arr, j, j - 1);
      }
    }
  }
  return arr;
}

describe("bubblesort", function () {
  it("tests sorting", function () {
    expect(swap([3, 2, 1, 4], 1, 2)).toEqual([3, 1, 2, 4]);
  });
  it("Tests 1 item arrays", () => {
    const originalArray = [1];
    const sortedArray = [1];
    expect(bubbleSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests 0 item arrays", () => {
    const originalArray = [0];
    const sortedArray = [0];
    expect(bubbleSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests 2 or more item arrays", () => {
    const originalArray = [5, 4, 3, 2, 1];
    const sortedArray = [1, 2, 3, 4, 5];
    expect(bubbleSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests 2 or more item arrays with -ve", () => {
    const originalArray = [5, -4, -3, 2, 1];
    const sortedArray = [-4, -3, 1, 2, 5];
    expect(bubbleSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests array with elements needing multiple shifts", () => {
    const originalArray = [3, 1, 1, 2];
    const sortedArray = [1, 1, 2, 3];
    expect(bubbleSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests complex unsorted array", () => {
    const originalArray = [4, 3, 5, 2, 1];
    const sortedArray = [1, 2, 3, 4, 5];
    expect(bubbleSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests array with multiple shifts needed", () => {
    const originalArray = [4, 3, 2, 10, 12, 1, 5, 6];
    const sortedArray = [1, 2, 3, 4, 5, 6, 10, 12];
    expect(bubbleSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests array with duplicate elements", () => {
    const originalArray = [3, 1, 2, 1, 3];
    const sortedArray = [1, 1, 2, 3, 3];
    expect(bubbleSort(originalArray)).toEqual(sortedArray);
  });
});
