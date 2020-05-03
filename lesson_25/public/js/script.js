"use strict"

document.addEventListener("DOMContentLoaded", () => {
  let url = 'http://localhost:3000/users';
  const button = document.querySelector('button');
  const div = document.querySelector('div');

  button.addEventListener('click', () => {
    div.innerText = "";
    fetch(url)
    .then(infoUser => infoUser.json())
    .then(infoUser => {
      const listOfUsers = document.createElement("ol");
      div.append(listOfUsers);
      infoUser.forEach(element => {
        const user = document.createElement("li");
        user.innerText = element.name;
        listOfUsers.append(user);      
      });
      div.setAttribute('style','border: 1px solid black;');
    })
    .catch(err => console.error(`Connection Error:${err}`)); 
    });  
});