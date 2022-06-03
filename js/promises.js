// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

function getGithubUser() {
    return fetch('https://api.github.com/CGALLE39')
        .then(response => response.json())
}
