// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
 

// Example 1:

// Input: columnNumber = 1
// Output: "A"
// Example 2:

// Input: columnNumber = 28
// Output: "AB"
// Example 3:

// Input: columnNumber = 701
// Output: "ZY"
// Example 4:

// Input: columnNumber = 2147483647
// Output: "FXSHRXW"

var convertToTitle = function(columnNumber) {
    let ans = "";
  
  while (columnNumber) {
    let rest = columnNumber % 26;
    rest = rest || 26;
    ans = String.fromCharCode(64 + rest) + ans;
    columnNumber = Math.floor(columnNumber / 26);
    columnNumber = rest === 26 ? columnNumber - 1 : columnNumber;
  }
  
  return ans;  
};