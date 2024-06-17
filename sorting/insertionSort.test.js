/**
 *
 * @param {*} arr
 * @returns {Array} sorted array
 * [2,3,4,5,1]
 */
const insertionSort = (arr) => {
  if (arr.length <= 1) return arr;
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > el; j--) {
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  console.log(arr);
  return arr;
};

describe("Tests InesertionSort", () => {
  it("Tests 1 item arrays", () => {
    const originalArray = [1];
    const sortedArray = [1];
    expect(insertionSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests 0 item arrays", () => {
    const originalArray = [0];
    const sortedArray = [0];
    expect(insertionSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests 2 or more item arrays", () => {
    const originalArray = [5, 4, 3, 2, 1];
    const sortedArray = [1, 2, 3, 4, 5];
    expect(insertionSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests 2 or more item arrays with -ve", () => {
    const originalArray = [5, -4, -3, 2, 1];
    const sortedArray = [-4, -3, 1, 2, 5];
    expect(insertionSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests array with elements needing multiple shifts", () => {
    const originalArray = [3, 1, 1, 2];
    const sortedArray = [1, 1, 2, 3];
    expect(insertionSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests complex unsorted array", () => {
    const originalArray = [4, 3, 5, 2, 1];
    const sortedArray = [1, 2, 3, 4, 5];
    expect(insertionSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests array with multiple shifts needed", () => {
    const originalArray = [4, 3, 2, 10, 12, 1, 5, 6];
    const sortedArray = [1, 2, 3, 4, 5, 6, 10, 12];
    expect(insertionSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests array with duplicate elements", () => {
    const originalArray = [3, 1, 2, 1, 3];
    const sortedArray = [1, 1, 2, 3, 3];
    expect(insertionSort(originalArray)).toEqual(sortedArray);
  });
});
