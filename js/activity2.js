var h2Changer = document.getElementById('mainGreeting');
var newName = document.getElementById('username');


function checkUsername() {                             

    var newStr = 'Welcome, ' + newName.value;
    var newH2 = document.createElement('h2');
    newH2.innerText = newStr;
    h2Changer.parentNode.replaceChild(newH2, h2Changer);

  }