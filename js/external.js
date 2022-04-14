console.log("Hello from inline Javascript");
let codeup = "Welcome to my Website!"
console.log(codeup);
console.log(codeup.toUpperCase());

// Alert - alert(argument) - no return
// Confirm - confirm(stringQuestion) - return a boolean value
// Prompt - prompt(stringQuestion) - returns a string

alert(codeup);
let color = prompt("What is your favorite color?");
console.log(color)
    alert(" Great " + color + " is my favorite color too! ");

let Mermaid = +prompt("How many days would you like to rent out The Little Mermaid?");
console.log(Mermaid);

let Bear = +prompt("How many days would you like to rent out Brother Bear?");
console.log(Bear);

let Herc = +prompt("How many days would you like to rent out Hercules?");
console.log(Herc);

alert((Mermaid + Bear + Herc)*3);

let googlehours = +prompt("How many hours did you work for google this week?");
console.log(googlehours);
var googleincome = 400

let amazonhours = +prompt("How many hours did you work for amazon this week?");
console.log(amazonhours);
var amazonincome = 380

let facebookhours = +prompt("How Many hours did you work for facebook this week?");
console.log(facebookhours);
var facebookincome = 350

alert(('Your paycheck is $' + ((googlehours * 400) + (amazonhours * 380) + ( facebookhours * 350))));

let classroom = prompt("Is the classroom full?");
console.log(classroom);

let availability = prompt("what is your availability?");
console.log(availability);

alert ("welcome to class!");
let item = confirm("Are you purchasing more than 2 items?");
console.log(item);

let offer = confirm("Has the offer expired?");
console.log(offer);

let premium = confirm("Are you a premium member?");
console.log(premium);

alert ("You get a discount!");

