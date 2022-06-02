"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(colorType) {
        if (colorType === "red") {
            return "Roses are red";
        } else if (colorType === "orange") {
            return "Mandarins are orange";
        } else if (colorType === "yellow") {
            return "lemons are yellow";
        } else if (colorType === "green") {
            return "Healthy grass should be green";
        }else if (colorType === "blue") {
            return "The sky is blue on a good day";
        }else if (colorType === "purple") {
            return "Grimace from McDonald's is purple";
        } else {
            console.log("that's an ugly color")
        }
    }

    console.log(analyzeColor("red"));
    console.log(analyzeColor("blue"));
    console.log(analyzeColor("purple"));
    console.log(analyzeColor("pink"));
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(str) {
    switch (str) {
        case "red":
            return "Roses are red";
        case "orange":
            return "Mandarins are orange";
        case "yellow":
            return "lemons are yellow";
        case "green":
            return "Healthy grass should be green";
        case "blue":
            return "The sky is blue on a good day";
        case "violet":
            return "Grimace from McDonald's is violet";
        default:
            return "I don't like that color.";
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let col = prompt("Hey you, pick a color");

alert(analyzeColor(col));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


// function calculateTotal(num, billTotal) {
//     num = Number(num);
//     if (num === 0) {
//         alert("Sorry, " + num + " wins you absolutely nothing, that's not so lucky.");
//     } else if (num === 1) {
//         alert("Wow you get 10% off, your total is  $ " + (billTotal - (billTotal * .10)));
//     } else if (num === 2) {
//         alert("Dang dude, you get 25% off! Your total is now  $ " + (billTotal - (billTotal * .25)));
//     } else if (num === 3) {
//         alert("Cool, you just got 35% off, your new total is $ "+ (billTotal - (billTotal * .35)));
//     } else if (num === 4) {
//         alert("WOWIE you get 50% off! Your total is now $ " + (billTotal - (billTotal * .5)));
//     } else if (num === 5) {
//         alert("Congrats gets you everything for FREE!");
//     }
// }
// console.log(calculateTotal(4, 100));
// console.log(calculateTotal( 5, 25));
// console.log(calculateTotal( 3, 85));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 let luckyNumber = Math.floor(Math.random() * 6);
alert ("Your lucky number is " +  luckyNumber);

    function calculateTotal(num) {
   num = Number(num);
    let billTotal = window.prompt("how much is your bill?");
   console.log(billTotal);
   if (num === 0) {
       alert("Sorry, " + num + " wins you absolutely nothing, that's not so lucky.");
   } else if (num === 1) {
       alert("Wow you get 10% off, your total is  $" + (billTotal - (billTotal * .10)));
   } else if (num === 2) {
       alert("Dang dude, you get 25% off! Your total is now  $" + (billTotal - (billTotal * .25)));
   } else if (num === 3) {
       alert("Cool, you just got 35% off, your new total is $"+ (billTotal - (billTotal * .35)));
    } else if (num === 4) {
       alert("WOWIE you get 50% off! Your total is now $" + (billTotal - (billTotal * .5)));
   } else if (num === 5) {
        alert("Congrats " + num + " gets you everything for FREE!");
    }
 }
   console.log(calculateTotal(luckyNumber));

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
     * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    let enterNum = confirm("Would you like to enter a number?");
    console.log(enterNum);
        if (enterNum == true)
        {
            alert("Please enter a number.");
        }
        else if (enterNum == false)
        {
            alert("Okay, fine then...");
        }
let randoNum = window.prompt("Please enter a number");
        console.log(randoNum);
        function isEven(n) {
            n = Number(n);
            if (n % 2 === 0) {
                alert (randoNum + " is even!");
            }else if (n % 2 !== 0){
                alert (randoNum + " is odd!");
            }
        }

        console.log(isEven(randoNum));

        function isAdd(n) {
            n = Number(n);
            return (n + 100)
        }
        console.log(isAdd(randoNum));

        function isPos(n) {
            n = Number(n);
            if (n > 0) {
                alert (randoNum + " is positive!");
            }
            else if (n < 0) {
                alert (randoNum + " is negative!");
            }
        }

        console.log(isPos(randoNum));










