"use strict";

const input = 'George Raymond Richard Martin';

const firstLetters = input.split(' ').map(word => word[0]).join('');

console.log(firstLetters);

const people= [
    {
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56,
    },
    {
        name: 'Rachel',
        age: 45,
    },
    {
        name: 'Nate',
        age: 67,
    },
    {
        name: 'Jeniffer',
        age: 65,
    }
];

const ages = people.map(person => person.age);
[Math.min(ages), Math.max(ages), Math.max(ages) - Math.min(ages)];

console.log(ages);

const letters = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
];

const letterAlign = letters.flat().reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]) {
        accumulator[currentValue] += 1;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(letterAlign);

if (true) {
    let x = 5;
}
console.log(typeof x);
//
// let numbers = [1, 2, 3, 4, 5];
// const numbersMap = numbers.map(n => n * 3)
// console.log(numbersMap);



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isDivisibleBy3 = n => n % 3 === 0;
console.log(numbers.filter(isDivisibleBy3));
console.log(numbers);

function sayHello(name) {
    return 'Hello, ' + name + '!';
}
console.log(sayHello("Cynthia"
));
const sayMello = (name) => `Hello, ${name}!`
console.log(sayMello("Cynthia"));