var fullName = prompt("Enter your Surname, Name, Patronymic:");
var firstIndexSpace = fullName.indexOf(" ");
var lastIndexSpace = fullName.lastIndexOf(" ");

var abbreviatedName = fullName.slice(0,firstIndexSpace+1) + fullName.charAt(firstIndexSpace+1) + ". " + fullName.charAt(lastIndexSpace+1) + ".";
alert(abbreviatedName);