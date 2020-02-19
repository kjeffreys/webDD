var h2Changer = document.getElementById('mainGreeting');
var newName = document.getElementById('username');


function checkUsername() {                             

    var newStr = h2Changer.innerText + newName.value;
    h2Changer.innerText = newStr;

  }