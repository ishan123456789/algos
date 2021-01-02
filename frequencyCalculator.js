// Returns if st1, st2 have same frequency of each item
// Arguments provided are integers
// Examples: sameFrequency(123123, 112233) => true, sameFrequency(123123, 1122334) => false, sameFrequency(1231235, 1122334) => false
function sameFrequency(st1, st2){
   let s1= st1 + '' , s2 = st2 + '';
   const sF = {};
   
  // good luck. Add any arguments you deem necessary.
  if(s1.length !== s2.length) return false;
  for (let s of s1) {
      sF[s] = sF[s] ? sF[s]+1:1;
  }
  for (let s of s2) {
      if(!sF[s]) return false;
      sF[s]--;
  }
  return true;
}
