// your code here
function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories());
  req.open('GET', `https://api.github.com/users/${document.getElementById('username').value}/repos`)
}

function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
}
