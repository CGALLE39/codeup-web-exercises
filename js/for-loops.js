

function showMultiplicationTable(num) {

    for (let i = 1; i <= 10; i++) {
        console.log(num + "x" + i + "=" + (i * num));
    }
}
showMultiplicationTable(7);
showMultiplicationTable(3);

// Use a for loop and the code from the previous lessons to generate 10 random numbers between
// 20 and 200 and output to the console whether each number is odd or even. For example:
//  201/ max === 201 - 20 = 181 to generate a number between 20 - 200
let rando = Math.floor(Math.random() * 181) + 20;
function evenOrodd(rando) {
    for (let i = 1; i <= 10; i++) {
        rando = Math.floor(Math.random() * 181) + 20;
        if (rando % 2 === 0) {
            console.log(rando + " even") }
        else { console.log(rando + " odd");
        }
    }
}
evenOrodd(rando);

//////////////////////////////////////////////////

function numberPyramid() {
       for(let i = 0; i < 10; i ++) {
          let  txt ='';
           for(let j= 0; j < i;j++ ){
             txt += i;
         }
           console.log(txt);
    }
}
numberPyramid();

// repeat method ****************
function numPyramid() {
    for(let i =0; i < 10; i ++){
        console.log(i.toString().repeat(i))
    }
}
numPyramid();
///////////////////////////////////////////////////

function countDown() {
 for (let i = 100; i >= 5; i = i - 5) {
        console.log(i);
        }
    }

    countDown();
// ////////////////////////////////////////////////////////


