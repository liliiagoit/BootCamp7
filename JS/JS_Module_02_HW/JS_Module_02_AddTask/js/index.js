"use strict"

// Check Passwords

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;

do {
    let userPasswords = prompt('Enter your password');
    if (passwords.includes(userPasswords)) {
        alert('Welcome'); 
        break;
    } 
    else {
       alert(`You have only ${attempts} trying!`);
       attempts-=1;
       continue;
   }      
} while (attempts);
  

   do {
    let userPasswords = prompt('Try again!');
    if (userPasswords === null || passwords.includes(userPasswords)){
        alert('Welcome'); 
        break;
    }
    else {
        alert('Your account is blocked');
       break;
    }
    
} while(true)

   