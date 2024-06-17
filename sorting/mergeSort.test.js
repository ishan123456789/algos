/**
 *
 * @param {*} arr
 * @returns {Array} sorted array
 * [2,3,4,5,1]
 */
const mergeSort = (arr) => {
  const n = arr.length;
  if (arr.length <= 1) return arr;
  const mid = Math.floor(n / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};
const merge = (a1, a2) => {
  let [i1, i2] = [0, 0];
  const newArray = [];
  while (i1 < a1.length && i2 < a2.length) {
    if (a1[i1] <= a2[i2]) {
      newArray.push(a1[i1]);
      i1++;
    } else {
      newArray.push(a2[i2]);
      i2++;
    }
  }
  while (i1 < a1.length) {
    newArray.push(a1[i1]);
    i1++;
  }
  while (i2 < a2.length) {
    newArray.push(a2[i2]);
    i2++;
  }
  return newArray;
};

describe("Tests InesertionSort", () => {
  it("tests slices", () => {
    expect([1, 2, 3, 4, 5].slice(0, 2)).toEqual([1, 2]);
    expect([1, 2, 3, 4, 5].slice(0, 4)).toEqual([1, 2, 3, 4]);
  });
  it("tests merge", () => {
    expect(merge([1, 2], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(merge([1, 3], [2, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("Tests 1 item arrays", () => {
    const originalArray = [1];
    const sortedArray = [1];
    expect(mergeSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests 0 item arrays", () => {
    const originalArray = [0];
    const sortedArray = [0];
    expect(mergeSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests 2 or more item arrays", () => {
    const originalArray = [5, 4, 3, 2, 1];
    const sortedArray = [1, 2, 3, 4, 5];
    expect(mergeSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests 2 or more item arrays with -ve", () => {
    const originalArray = [5, -4, -3, 2, 1];
    const sortedArray = [-4, -3, 1, 2, 5];
    expect(mergeSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests array with elements needing multiple shifts", () => {
    const originalArray = [3, 1, 1, 2];
    const sortedArray = [1, 1, 2, 3];
    expect(mergeSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests complex unsorted array", () => {
    const originalArray = [4, 3, 5, 2, 1];
    const sortedArray = [1, 2, 3, 4, 5];
    expect(mergeSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests array with multiple shifts needed", () => {
    const originalArray = [4, 3, 2, 10, 12, 1, 5, 6];
    const sortedArray = [1, 2, 3, 4, 5, 6, 10, 12];
    expect(mergeSort(originalArray)).toEqual(sortedArray);
  });
  it("Tests array with duplicate elements", () => {
    const originalArray = [3, 1, 2, 1, 3];
    const sortedArray = [1, 1, 2, 3, 3];
    expect(mergeSort(originalArray)).toEqual(sortedArray);
  });
});
