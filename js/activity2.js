var h2Changer = document.getElementById('mainGreeting');
var newName = document.getElementById('username');


function checkUsername() {                             

    var nameEntry = newName.nodeValue;
    var textUpdate = h2Changer.innerHTML + nameEntry;
    h2Changer.innerHTML = textUpdate;
    console.log(nameEntry);
    console.log(textUpdate);
    console.log(h2Changer.innerHTML);

  }