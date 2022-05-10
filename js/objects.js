(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: "Rick",
        lastName: "Sanchez"
    }
    console.log(person.firstName)
    console.log(person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

console.log("Hello from " + person.firstName + " " + person.lastName)

    // person.sayHello = function() {
    // return "Hello from " + this.firstName + " " + this.lastName +"!";
    // }
    // console.log(sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a ****** foreach ****** loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
let hebShopper = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
    ];

    hebShopper.forEach(function (hebShopper) {
       if (hebShopper.amount > 200)
        console.log("Congrats, " + hebShopper.name + ", you have spent $" + hebShopper.amount + " you get a 12% discount. your new bill amount is $" + (0.88 * hebShopper.amount));
        else {
            (hebShopper.amount < 200)
                console.log("Sorry, " + hebShopper.name + ", you have spent $" + hebShopper.amount + ". You will need to spend $" + (200 - hebShopper.amount) + " in order to recieve a discount.");
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // var books = [
    //     {
    //         Title : ["Violet Evergarden", "Naruto", "Demon Slayer", "Attack on Titan", "Ranking of Kings"],
    //         firstName : ["Kana", "Masashi", "Koyoharu", "Hajime", "Sosuke"],
    //         lastName : ["Akatsuki", "Kishimoto", "Gotouge", "Isayama","Toka"]
    //     }
    // ];

    let books = [
        {
            Title: "Violet Evergarden",
            author: {
                firstName: "Kana",
                lastName: "Akatsuki"
            }
        },
        {
            Title: "Naruto",
            author: {
                firstName: "Masashi",
                lastName: "Kishimoto"
            }
        },
        {
            Title: "Demon Slayer",
            author: {
                firstName: "Koyoharu",
                lastName: "Gotouge"
            }
        },
        {
            Title: "Attack on Titan",
            author: {
                firstName: "Hajime",
                lastName: "Isayama"
            },
        },
        {
            Title: "Ranking of Kings",
            author: {
                firstName: "Sosuke",
                lastName: "Toka"
            }
        }

];
    console.log(books[0].Title);
    console.log(books[0].firstName);
    console.log(books[0].lastName);
let i = 1
    books.forEach(function (books) {
        console.log("Book # " + i++ + "\n" + "Title: " + books.Title + "\n" + books.author.firstName + "\n" + books.author.lastName)
    })




    // console.log("Book # 1 " + "Title: " + books[0].Title + books[0].firstName + "" + books[0].lastName);
    // console.log("Book # 2 " + "Title: " + books[1].Title + books[1].firstName + "" + books[1].lastName);
    // console.log("Book # 3 " + "Title: " + books[2].Title + books[2].firstName + "" + books[2].lastName);
    // console.log("Book # 4 " + "Title: " + books[3].Title + books[3].firstName + "" + books[3].lastName);
    // console.log("Book # 5 " + "Title: " + books[4].Title + books[4].firstName + "" + books[4].lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function createBook(title, author) {
        let authorArr = author.split(" ");
        if (authorArr.length < 2) {
            return {
                title,
                author: {
                    firstName: "",
                    lastName: authorArr[0]
                }
            }
        } else {
             return {
                title,
                author: {
                    firstName: authorArr[0],
                    lastName: authorArr[1]
                 }
            }
        }
    }

        let title = prompt("Give me your favorite book title");
        let author = prompt("And who wrote it?");

        let bookFromPrompt = createBook(title, author);
        console.log(bookFromPrompt);




    // Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}

var car = [{
    make: "hyundai",
    model: "accent",
},
    {
        make: "honda",
        model: "civic",
    },
    {
       make: "kia",
       model: "forte"
    }
    ];
car.forEach(function(car) {
    let i = 1
    console.log( i ++ + car.make + " " + car.model)
})


})();
