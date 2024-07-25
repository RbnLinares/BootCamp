// You are tasked with writing a function `solution` 
// that takes a string `S` as input. 
// The string consists of 'a' and/or 'b' characters. 
// The function should return `true` 
// if all occurrences of the letter 'a' appear before all occurrences of the letter 'b' 
// in the string `S`. 
// If either 'b' does not occur in `S` or 'a' does not occur in `S`, 
// the function should also return `true`. 
// Otherwise, it should return `false`.

// aabb - true
// bbaa - flase
// aaa - true
// bbb - true
// ababa - flase
// */



const testCases = [
  { input: "aabbb", output: true },
  { input: "ba", output: false },
  { input: "aaa", output: true },
  { input: "b", output: true },
  { input: "abba", output: false },
  { input: "a", output: true },
  { input: "bbaa", output: false },
  { input: "bbba", output: false },
  { input: "aabb", output: true },
  { input: "bababab", output: false },
  { input: "babababa", output: false },
  { input: "aabababb", output: false },
  { input: "baaab", output: false },
  { input: "b"},
  { input: "bbabbabbababbab", output: false },
  { input: "babaabaaab", output: false },
  { input: "ab", output: true },
  { input: "ababa", output: false },
];

function testSolution() {
    for (let i = 0; i < testCases.length; i++) {
      const { input, output } = testCases[i];
      const result = solution(input);
      console.log(
        `Input: "${input}", Output: ${result}, Expected Output: ${output} Result: ${
          result === output ? "OK" : "NOT OK"
        }`
      );
    };
  };
  testSolution();

// function solution(S) {
//     // Count occurrences of 'a' and 'b'
//     let aCount = (S.match(/a/g) || []).length;
//     let bCount = (S.match(/b/g) || []).length;
  
//     // If 'b' does not appear or 'a' does not appear, return true
//     if (bCount === 0 || aCount === 0) {
//       return true;
//     }
  
//     // If 'a' appears before 'b', return true
//     if (aCount <= bCount) {
//       return true;
//     }
  
//     // Otherwise, return false
//     return false;
//   }
//   console.log();