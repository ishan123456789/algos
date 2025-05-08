const uniqueStringPermutations = (str, current = "") => {
  if (str.length === 1) return [current + str]; // b + c // b c
  const permutations = [];
  for (let i = 0; i < str.length; i++) {
    // bc
    const currentString = str[i]; // "a" // b // c
    const remaining = getRemaining(str, i); // "bc" // c // b //
    permutations.concat(uniqueStringPermutations(remaining, currentString)); // bc, a // c, b // b, c
  }
  return permutations;
};
const getRemaining = (str, index) => {
  return str.slice(0, index) + str.slice(index + 1);
};

describe("Tests uniqueStringPermutations", () => {
  it("Returns single character as it is in array", () => {
    expect(uniqueStringPermutations("a")).toEqual(["a"]);
  });
  it("getRemaining returns remaining characters", () => {
    expect(getRemaining("abc", 0)).toEqual("bc");
    expect(getRemaining("abc", 1)).toEqual("ac");
    expect(getRemaining("abc", 2)).toEqual("ab");
  });
  it("Returns permutations for larger than 1 character string", () => {
    expect(uniqueStringPermutations("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });
});
