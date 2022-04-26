"use strict";
// console.log("Yay! I completed the warmup!");
// // fizz divisible by 3, buzz divisible by 5, fizzbuzz by both, log num if divisible by neither
function fizzBuzz(){
for (let i = 1; i < 100; i ++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 != 0 && i % 5 != 0) {
        console.log(i);
         }
    }
}
fizzBuzz();

//instructor method
//
//  function fizzBuzz(limit){
// if (limit === undefined) {
//     limit = 100;
// }
//     for (let i = 1; i <= 100; i ++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz")
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();