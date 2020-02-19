function checkUsername() {                             
    var greeting = document.getElementById('greeting');     
    var userName = document.getElementById('username');
    if (userName.value.length < 5) {                   
      var newName = document.createElement('span');
      newName.entry = userName;
      greeting.appendChild(newName);
      newName.innerHTML = userName.innerText;
    } else {                                              
      greeting.innerText = 'Hi there' + userName;                             
    }
  }