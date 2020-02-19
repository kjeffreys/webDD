function checkUsername() {                             
    var greeting = document.getElementById('greeting');     
    var userName = document.getElementById('username');
    if (userName.value.length < 5) {                   
      greeting.firstChild.innerText = 'Hi there' + userName; 
    } else {                                              
      greeting.innerText = 'Hi there' + userName;                             
    }
  }