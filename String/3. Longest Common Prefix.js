// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
var longestCommonPrefix = function(arr) {
    arr = arr.sort();
    
  let a1 = arr[0],
    a2 = arr[arr.length - 1],
    Length = a1.length,
    i = 0;
  //    console.log("a1:",a1,"a2",a2,"L",L)
  while (i < Length && a1.charAt(i) === a2.charAt(i)) i++;
  let a = a1.substring(0, i);
    return a;
    
};