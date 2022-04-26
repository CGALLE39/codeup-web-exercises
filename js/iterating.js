(function(){
    "use strict";
// last element of an array will be the length -1
    // nameofArray.forEach(function)
//     /**
//      * TODO:
//      * Create an array of 4 people's names and store it in a variable called
//      * 'names'.
//      */
    let names = ["Cynthia", "Rebecca", "Rene", "Julio"];

    // /**
    //  * TODO:
    //  * Create a log statement that will log the number of elements in the names
    //  * array.
    //  */
        console.log(names.length);
    // /**
    //  * TODO:
    //  * Create log statements that will print each of the names individually by
    //  * accessing each element's index.
    //  */
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i ++){
        console.log( i + names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (name) {
        console.log(name);
    });

    names.forEach(function (element, index, array) {
        console.log('The name at index ' + index + ' is ' + element);
    });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
// names.forEach(function (element, index, array){
// console.log ("first is " + names[0]);
// console.log ("second is " + names[1]);
// console.log ("last is " + names[3]);

// });
function first(arry) {
    return arry[0];
    }
    console.log(first(names));

    function second(arry) {
        return arry[1];
    }
    console.log(second(names));

    function last(arry) {
        return arry[3];
        // *another method is : arry[arry.length - 1];
    }
    console.log(last(names));

})();
