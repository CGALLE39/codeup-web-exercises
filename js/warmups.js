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

function alphaBet(str) {
    return str.split('').sort().join('');
}
console.log(alphaBet("watermelon"));


function sumOfElements(arr) {
    let totalSum = 0;
   for (let i=0;i < arr.length; i++){
       totalSum +=  arr[i];
   }
   return totalSum;
}
console.log(sumofElements([3,5,7,9,8]));

// instructor solution

// function sumofElements(arr) {
//     let bucket = 0;
//     for(let el or arr) {
//         bucket += el;
//     }
//     return bucket;
// }