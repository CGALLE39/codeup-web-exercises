"use strict";

document.getElementById("moon-travel").addEventListener
("dblclick", function() {
    console.log("This has been clicked.");
    document.getElementById("main-content").style.backgroundImage = "url(../img/pizza.png)";

})

//SUBMIT EVENT
document.querySelector("#form").addEventListener
("submit", function(event) {
  event.preventDefault();
  let color = document.getElementById("text-color").value;
  console.log(color);
  document.getElementById("main-content").style.color = color;

})

//CHANGE EVENT

document.querySelector("#travel-items").addEventListener("change", function() {
    document.querySelector(".result").innerHTML = "I think " + event.target.value + "is important too!";
    })

// MOUSE EVENT

let gokuEvent = function() {
    document.querySelector("#goku").src = "img";
}

document.querySelector("#goku").addEventListener("mouesenter", gokuEvent)


document.querySelector()

//REMOVE EVENT
document.querySelector(".goku-chill").addEventListener("click",
    function (){
    console.log("The button has been clicked")
        document.getElementById("goku").remove()("mouseenter", gokuEvent)
    })

//KEYBOARD EVENT

// keyup - only when a key is released
//keydown - as long as the key is being pushed

document.addEventListener("keyup", function(event){
    if (event.key === " ") {
        document.querySelector(".space-bar").style.display = "block";
    }
})