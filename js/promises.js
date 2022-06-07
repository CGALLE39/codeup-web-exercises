// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

//Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

// path parameters: username
//returning just the date of the last commit that user made

//
// const gitUser = fetch('https://api.github.com/users/CGALLE39/events/public')
// .then((resp) => resp.json())

// fetch('https://api.github.com/users/events/public',{headers: {'Authorization': 'PROMISE_KEY'}}).then(gitHub => gitHub.json());

//create html that allows user to enter a gitHub Username
//create new github link with new username
//pull and filter out commit @ index of 0

// console.log(gitUser);

let userName = prompt("Enter a username");

function getCommit(str) {
    const promise = fetch('https://api.github.com/users/' + str + '/events/public', {headers: {'Authorization': 'PROMISE_KEY'}})
        .then(gitHub => gitHub.json())
        .then((data) => {
            console.log(data)
            let lastCommit = {
                commit: `${data[0].payload.commits[0].url}`
            }
            return lastCommit;
        })
        .then(user => console.log(user))
        .catch(error => console.error(error));
}
    console.log(getCommit(userName));


// function wait(num) {
//     wait(num).then(() => console.log('You\'ll see this after' + num + 'seconds'));
// }
// console.log(wait(nummie));

let nummie = prompt("gimmie a number");
function wait(num) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve (wait(nummie).then(() => ('You\'ll see this after' + num + 'second')));
            } else {
                reject ('um, I don\'t like that');
            }
        }, num);
    });
}
const waitUp = wait();
console.log(waitUp);
console.log(wait(nummie))
