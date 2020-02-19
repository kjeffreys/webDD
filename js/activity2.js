var h2Changer = document.getElementsByTagName('mainGreeting');
var newName = document.getElementById('username');


function checkUsername() {                             

    h2Changer.innerText += newName.textContent;

  }