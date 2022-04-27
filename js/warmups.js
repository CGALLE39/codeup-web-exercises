"use strict";

console.log("Yay! I completed the warm-up!")

let allFirstLetter = ["cat", "dog", "pig", "cow"];
allFirstLetter.forEach(function(element, index,array) {
    console.log()
});


*/Instructor solution *
function allFirstLetters(arr) {
    let bucket = "";
    for (let el of arr) {
        bucket += str.substring(0,1);
    }
    return bucket
}
const testArrStrings = ["cats","dogs","bats","rats"];
console.log(allFirstLetters(testArrStrings));
