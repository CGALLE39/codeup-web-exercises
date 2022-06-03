const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

///REDUCE METHOD
let tallestHamster = hamsters.reduce((tallOne, hamster) => {
    return (tallOne.heightInMM > hamster.heightInMM) ? tallOne : hamster
;}, {heightInMM: 0});

console.log(tallestHamster);

///VANILLA JS METHOD

function isTallest(arr) {
    let tallest = [0];
    for (let i = 1; i < arr.length; i ++) {
        if (arr[i].heightInMM > tallest.heightInMM) {
            tallest = arr[i];
        }
    }
    return tallest;
}
console.log(isTallest(hamsters));

///// REDUCE METHOD

const mostColorful = (prev, hamster) => {
    if (prev.fur.length > hamster.fur.length) {
        return prev;
    } else {
        return hamster;
    }
}
let mostColorfulHamster = hamsters.reduce(mostColorful, {fur: []});
console.log(mostColorfulHamster);

