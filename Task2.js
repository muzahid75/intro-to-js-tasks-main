// <!-- ### Task-2

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// **Input:**
// </br>
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// **Output:**
// </br>
// Print the result in 2 decimal places.

// ---

// **Sample Input:**
// </br>
// 75.25, 65, 80, 35.45, 99.50

// **Sample Output:**
// </br>
// 71.04 -->

let Mathematics = 75.25 , Biology = 65, Chemistry = 80, Physics = 35.45 , Bangla = 99.50;
let average = (Mathematics+Biology+Chemistry+Physics+Bangla)/5;
console.log(average.toFixed(2));
