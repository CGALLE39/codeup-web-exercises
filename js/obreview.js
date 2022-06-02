


function checkForString(array1) {
    for (let i = 0; i < array1.length; i++)
        if(typeof array1[i] === 'string'){
        } else {
            return false;
        }
            return true;
}




//EVERY OTHER ELEMENT
// for(let i = 0; i < array1.length; i = i*2)


function doubleTheLettersInEachString(strArray) {
    let bucket = '';
    let bucketArray = [];
    for(let i = 0; i < strArray; i++) {
        strArray[i].repeat(2);
        bucketArray.push(bucket);
    }
    return bucketArra(strArray);
}


// Grocery list maker

let name = prompt("Enter name of item");
let quantity = prompt("Enter the quantity");

function newProduct(name, quantity) {
    let obj = {}
    obj.name = name;
    obj.quantity = quantity;
    return obj;
}


let numArr = [2,3,4,5];

function doubleTheElements(strArray) {
    let str = '';
    let finalArray = [];
    for(let i = 0; i < strArray; i++) {
        strArray[i] = 2
        console.log(str);
    }
    return finalArray;
}
console.log(doubleTheElements(numArr));



let numArr2 = [4,5,10,34,35];
function multipleOfFive(numberArray) {
    for(let numie of numberArray) {
        if (numie%5===0) {

        } else {
            return false;
        }
    }
    return true;
}
console.log(multipleOfFive(numArr2));