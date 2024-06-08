// Check if s1 is present as a subsequence in s2
// Example: isSubsequence('sing', 'string') => true, isSubsequence('abc', 'acb') => false
function isSubsequence(s1, s2) {
  let sLength = s1.length;
  let i = 0;
  for(let s of s2) {
      if(s1[i] === s && i !== sLength) i++;
  }
  return i === sLength;
}
