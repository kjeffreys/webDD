function checkUsername() {                             
    var greeting = document.getElementById('greeting');     
    var userName = document.getElementById('username');
    if (userName.value.length < 5) {                   
      greeting.textContent = 'Hi there' + userName; 
    } else {                                              
      greeting.textContent = 'Hi there' + userName;                             
    }
  }