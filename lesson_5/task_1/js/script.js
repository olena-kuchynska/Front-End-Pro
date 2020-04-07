var login = prompt("Enter your login:");
var pass = prompt("Enter your password:");

var regForLogin = /^[A-Z]{1}\w*\d{2}$/g;
var regForPass = /^[A-ZА-ЯЁ]{1,5}$/g;

alert("Your login is " + regForLogin.test(login) + "\nAnd your password is " + regForPass.test(pass));







