"use strict";

let char = prompt("Enter a word"); {


    function charCounter(str){
        str =String(str);
        return str.length;
    }
    console.log(charCounter(char));
}

let num1 = prompt("gimmie a number idiot");
let num2 = prompt("gimmie another number");{
    function addNum(x,y){
        return (+x + +y);
    }
    console.log(addNum(num1,num2));
}

let noun = prompt("gimmie a noun");
let verb = prompt("gimmie a verb");
let adj = prompt("gimmie an adjective");
let adv = prompt("gimmie an adverb");
    function storyTime (a, b , c ,d){
        return "do you " + (a  +  b  +  c  +  d) + "? Thats crazy!"
    }
    console.log(storyTime(noun,verb,adj,adv));
