var list = document.getElementsByTagName('ul')[0];
var newName = document.getElementById('username');


function checkUsername() {                             

    var newGreeting = document.createElement('li');
    var newText = document.createTextNode('Hi ' + newName.textContent);
    newGreeting.appendChild(newText);
    list.appendChild(newGreeting);

  }