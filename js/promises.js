// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

//Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

// path parameters: username
//returning just the date of the last commit that user made


const gitUser = fetch('https://api.github.com/users');


// fetch('https://api.github.com/users/events/public',{headers: {'Authorization': 'PROMISE_KEY'}}).then(gitHub => gitHub.json());

//create html that allows user to enter a gitHub Username
//create new github link with new username
//pull and filter out commit @ index of 0

console.log(gitUser);

//23

function getCommit() {
    const promise = fetch('https://api.github.com/users', {headers: {'Authorization': 'PROMISE_KEY'}}).then(gitHub => gitHub.json());

}
