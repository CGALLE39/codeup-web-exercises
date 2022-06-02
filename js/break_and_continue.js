

while (true) {
    let enterOddnumber = confirm("please enter an odd number between 1 and 50");
    if (enterOddnumber)
        break;
    }
}



//instructor solution
function () {
    let userNum
    while (true) {
        userNum = parseFloat(prompt("Enter an off number between 1 and 50"));
        if (userNum % 2 !== 0 && userNum >= 1 && userNum <= 50) {
            break;
        }
    }
    for (let j = 1; j <= 50; j += 2) {
        if (j === userNum) {
            console.log("skipping" + userNum);
            continue;
        }
        console.log(j);
        }
}