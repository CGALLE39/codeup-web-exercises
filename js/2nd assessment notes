/**
Instructor solutions
 */

function checkForNumber (num) {
    if (typeof num === "number") {
        return "number";
    } else {
        return "not a number";
    }
}

function evenOrOdd (num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

function doubleTheElements (arr) {
    let double = [];
    for (let num of arr) {
        double.push(num *2);
    }
    return double;
}

function sumOfElements (arr) {
    let bucket = 0;
    arr.forEach(function(num){
        bucket += num;
    })
    return bucket;
}

function totalPrice (arr) {
    let bucket = 0;
    for (let i = 0; i < arr.length; i++) {
        bucket += arr[i].price;
    }
    return bucket;
}

function findHighestPrice (arr) {
    let bucket = 0;
    for (let product of arr)  {
        if (product.price > bucket) {
            bucket = product.price;
        }
    }
    return bucket;
}

function discountCheck(input) {
    if (input.clubMember === true || totalPrice(input.items) >= 150) {
        return true;
    } else {
        return false;
    }
}

function newProduct(name, price) {
    let obj = {}
        obj.name = name;
        obj.price = price;
    return obj;
}

function countWords (str) {
    if (str === "") {
        return 0;
    } else {
        let words = str.split(" ");
        console.log(words);
        return words.length;
    }
}

function describeNumber(num) {
    if (!isNaN(parseFloat(num))) {
        let obj = {};
        obj.value = parseFloat(num);
        obj.evenOrOdd = evenOrOdd(num);
        obj.numberOfDigits = num.toString.length;
        console.log(obj)
        return obj;
    }
}

function screamingSnakeCase (str) {
    let upperCaseStr = str.toUpperCase();
    let array = upperCaseStr.split(" ");
    let finalStr = array.join("_");
    return finalStr;
}
// one like solution
// return str.toUpperCase().split("_").join("_");

