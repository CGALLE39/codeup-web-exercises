"use strict";
// console.log("Yay! I completed the warmup!");
// // fizz divisible by 3, buzz divisible by 5, fizzbuzz by both, log num if divisible by neither
// function fizzBuzz(){
// for (let i = 1; i < 100; i ++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else if (i % 3 != 0 && i % 5 != 0) {
//         console.log(i);
//          }
//     }
// }
// fizzBuzz();

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

// function alphaBet(str) {
//     return str.split('').sort().join('');
// }
// console.log(alphaBet("watermelon"));

//
// function sumOfElements(arr) {
//     let totalSum = 0;
//    for (let i=0;i < arr.length; i++){
//        totalSum +=  arr[i];
//    }
//    return totalSum;
// }
// console.log(sumofElements([3,5,7,9,8]));

// instructor solution

// function sumofElements(arr) {
//     let bucket = 0;
//     for(let el or arr) {
//         bucket += el;
//     }
//     return bucket;
// }
// let product1 = {
//     name: 'Hammar',
//     priceInCents: 400,
//     description: 'It is a a hammar.',
//     inventory: 25034
// }
//
// let product2 = {
//     name: 'Computer',
//     priceInCents: 40000,
//     description: 'It is a computer.',
//     inventory: 33000
// }
//
// let product3 = {
//     name: 'Ruler',
//     priceInCents: 1000,
//     description: 'It is a ruler.',
//     inventory: 2200
// }
// function returnProductEssentialDetails(product) {
//     return {
//         name: product.priceInCents
//     }
// }

// (
    // function() {
    //     console.log("hello kitty")
    //     let str = "string";
    //     let num = 'number';
    //     let boolean = true;
    //
    //     function identifyVal(input) {
    //         return typeof input;
    //     }
    //     console.log(identifyVal("meow"));
    //     console.log(identifyVal(1));
    //     console.log(identifyVal('boolen'))
    //
    // function square(input) {
    //         return input*input;
    // }
    // console.log(square(5));
    //
    //     function addString(input) {
    //         return str + prompt("type in something funny");
    //     }
    //     console.log(addString(prompt));
    //
    //
    //     function trueOrFalse(input) {
    //         if(input === true) {
    //             return "Cynthia likes apples"
    //         } else if (input === false) {
    //             return "Cynthia hates apples"
    //         }
    //     }
    //
    //     console.log(trueOrFalse(true));
    //     console.log(trueOrFalse(false));
    //
    //     function lengthofString(input) {
    //         return input.length;
    //     }
    //     console.log(lengthofString('coconut'));
    //
    //     const numbersArray = [1,2,3,4,34];
    //     function arrayLength(input) {
    //         return input.length;
    //     }
    //     console.log(arrayLength(numbersArray));
    //     console.log(arrayLength('wewe', 4, 2, 4));
    //
    //     function isNumber(input){
    //         if(!isNaN(parseFloat(input))){
    //             return true;
    //         } else {
    //             return false;
    //         }
    //
    //     }
    //
    //     function addTwoNumbers(x,y){
    //         if(isNumber(x) && isNumber(y)) {
    //             return parseFloat(x) + parseFloat(y);
    //         } else
    //             return false;
    //     }
    //     console.log(addTwoNumbers(3,9));
    //
    //     const array1 = [3,5,2,6,8];
    //     const array2 = ['frank', 231, false];
    //     const array3 = ['123fdsfsdf', '3434', 'erer'];
    //     const array4 = ['sdfsdf', 'erssdfdsff'];
    //
    //     function arryNum(input) {
    //         for(let i = 0; i < input.length; i++) {
    //             if(isNumber(input[i])  === false) {
    //                 return false;
    //             }
    //         }
    //         return true;
    //     }
    //
    //     console.log(arryNum(array1));
    //     console.log(arryNum(array2));
    //     console.log(arryNum(array3));
    //     console.log(arryNum(array4));
    //
    //     function addToEndArray(input){
    //         array1.push(input);
    //     }
    //    addToEndArray('23');
    //
    //
    //     function deleteLastArray(){
    //         array1.pop();
    //     }
    //
    //
    //     //objects
    //
    //     const superNumber = {value:5, negPos:'positive', integer:true};
    //     const superNumber2 = {value:-43, negPos:'negative', integer:false};
    //
    //     console.log(superNumber2);
    //
    //     function makeFavorite(obj) {
    //         obj.favorite = true;
    //         superNumber.favorite = true;
    //     }
    //     console.log(superNumber);
    //     console.log(superNumber2);
    //
    //     //ppulling info from object//
    //     function selectInfo(obj) {
    //         return {value:obj, negPos:obj.negPos};
    //     }
    //     console.log(selectInfo(superNumber));

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function isTallest(arr) {
    let tallest = [0];
    for (let i = 1; i < arr.length; i ++) {
        if (arr[i].heightInMM > tallest.heightInMM) {
            tallest = arr[i];
        }
    }
    return tallest;
}
    console.log(isTallest(hamsters));


function isColorful(hamsters) {
    let color = {fur: []};
    for (let hamster of hamsters) {
        if (hamster.fur.length > color.fur.length){
            color = hamster;
        }
    }
    return color;
}
console.log(isColorful(hamsters))

function mostisColorful(hamsters) {
    let colors = hamsters[0];
    for (let x = 1; x < hamsters.length; x++) {
        if (hamsters[x].fur.length > colors.fur.length){
            colors = hamsters[x];
        }
    }
    return colors;
}
console.log(mostisColorful(hamsters))






