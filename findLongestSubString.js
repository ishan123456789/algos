/**
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
 */
function findLongestSubstring(string){
    let maxLength = 0, start = 0, end = 0, processed = {};
    for(let i = 0; i < string.length; i++) {
        let ch = string[i];
        if(processed[ch] && processed[ch] > start) {
            start = processed[ch];
        }
        maxLength = Math.max(maxLength, i - start + 1);
        processed[ch] = i+1;
    }
    
    return maxLength;
  }
  