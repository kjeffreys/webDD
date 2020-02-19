var h2Changer = document.getElementById('mainGreeting');
var newName = document.getElementById('username');


function checkUsername() {                             

    var nameEntry = newName.nodeValue;
    var textUpdate = h2Changer.innerHTML + nameEntry;
    h2Changer.innerText = textUpdate;

  }