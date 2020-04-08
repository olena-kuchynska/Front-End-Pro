/* Создайте форму(с помощью js), которая состоит из трех инпутов(Имя, Фамилия, возраст) и двух кнопок: ADD, SHOW.
При заполнении полей и нажатии на кнопку ADD, создается объект и добавляется в массив. 
При нажатии на SHOW форма перерисовуется на список Фамилий ваших объектов, с крестиком рядом. 
При нажатии на крестик объект удаляется из массива и список перерисовывается уже без этой фамилии. 
Подсказка: здесь 2 View*/

"use strict"

let users = [{surname:"bulatova"},{surname:"bunsul"},{surname:"birshenko"},{surname:"ivanov"}];

class AddFormView {

    createForm() {

        const styles = document.head.querySelector("link");
        styles.setAttribute("href", "./styles/addForm.css");

        const container = document.body.querySelector("div");
        container.innerHTML = "";

        const caption = document.createElement("h1");
        caption.innerText = "Registration Form";
        container.append(caption);

        const info = document.createElement("p");
        info.innerText = "Please, fill the form. Required fields are marked *";
        container.append(info);

        const form = document.createElement("form");
        container.append(form);

        const infoTable = document.createElement("table");
        form.append(infoTable);

        const stringName = document.createElement("tr");
        infoTable.append(stringName);

        const nameLabel = document.createElement("td");
        nameLabel.innerText = "Name";
        stringName.append(nameLabel);

        const nameInput = document.createElement("td");
        stringName.append(nameInput);

        const nameOfUser = document.createElement("input");
        nameOfUser.setAttribute("type","text");
        nameOfUser.setAttribute("name","name");
        nameInput.append(nameOfUser);

        const stringSuname = document.createElement("tr");
        infoTable.append(stringSuname);

        const surnameLabel = document.createElement("td");
        surnameLabel.innerText = "Surname";
        stringSuname.append(surnameLabel);

        const star = document.createElement("span");
        star.innerText = "*";
        surnameLabel.append(star);

        const surnameInput = document.createElement("td");
        stringSuname.append(surnameInput);

        const surnameOfUser = document.createElement("input");
        surnameOfUser.setAttribute("type","text");
        surnameOfUser.setAttribute("name","surname");
        surnameOfUser.setAttribute("class","surname");
        surnameInput.append(surnameOfUser);

        const stringAge = document.createElement("tr");
        infoTable.append(stringAge);

        const ageLabel = document.createElement("td");
        ageLabel.innerText = "Age";
        stringAge.append(ageLabel);

        const ageInput = document.createElement("td");
        stringAge.append(ageInput);

        const ageOfUser = document.createElement("input");
        ageOfUser.setAttribute("type","number");
        ageOfUser.setAttribute("name","age");
        ageInput.append(ageOfUser);

        const stringButtons = document.createElement("tr");
        infoTable.append(stringButtons);

        const buttons = document.createElement("td");
        buttons.setAttribute("colspan","2");
        stringButtons.append(buttons);

        const addButton = document.createElement("button");
        addButton.setAttribute("class","add");
        addButton.setAttribute("type","button");
        addButton.innerText = "Add";
        buttons.append(addButton);

        const showButton = document.createElement("button");
        showButton.setAttribute("class","show");
        showButton.setAttribute("type","button");
        showButton.innerText = "Show users";
        buttons.append(showButton);
        
    }
    
}

class UsersView {
    showUsersList() {
        const styles = document.head.querySelector("link");
        styles.setAttribute("href", "./styles/deleteForm.css");

        const container = document.body.querySelector(".container");
        container.innerHTML = "";

        const caption = document.createElement("h1");
        caption.innerText = "List of Users";
        container.append(caption);

        const usersList = document.createElement("ol");
        container.append(usersList);

        users.forEach( item => {
            const user = document.createElement("li");
            user.innerText = item.surname;
            usersList.append(user);
            const deleteButton = document.createElement("button");
            deleteButton.setAttribute("class","delete");
            user.append(deleteButton);
        });

        const blockButton = document.createElement("div");
        container.append(blockButton);

        const returnButton = document.createElement("button");
        returnButton.setAttribute("class","return");
        returnButton.setAttribute("type","button");
        returnButton.innerText = "Return to Form";
        blockButton.append(returnButton);

        /* const updateButton = document.createElement("button");
        updateButton.setAttribute("class","update");
        updateButton.setAttribute("type","button");
        updateButton.innerText = "Update";
        container.append(updateButton); */
    }
}

class User {
    constructor(viewForm, viewUsers) {
    this.viewForm = viewForm;
    this.viewUsers = viewUsers;
    }

    handleShowForm() {
        this.viewForm.createForm();
    }

    handleShowUsers() {
        this.viewUsers.showUsersList();
    }

    addUser() {
        const infoUser = document.querySelectorAll("input");
        const surnameUser = document.querySelector(".surname");

        if (surnameUser.value === "") {
            alert("Please,fill in all information for registration!");
        } else {
            let newUser = {};

            infoUser.forEach(item => {
                newUser[item.name] = item.value;
                item.value = "";           
            });

            users.push(newUser);
            console.log(users);  
        }      
    }

    deleteUser(events) {
        const infoUser = events.target.parentElement.innerText;
        
        users.forEach((item, i) => {
            if (item.surname === infoUser) {
                users.splice(i, 1);
            }
        });
        console.log(users);
        //console.log(this);
    }
}

class UsersController {
    constructor(model) {
        this.model = model;
    }

    handleShowForm() {
        this.model.handleShowForm();
        this.actionForAdd();
    }

    handleShowUsers() {
        //console.log(this);
        this.model.handleShowUsers();
        this.actionForShow();
    }


    actionForAdd() {
        let showUsers = this.handleShowUsers;
        let currentContext = this;
        function actionShow(){
            showUsers.call(currentContext);
        }
        const addButton =  document.body.querySelector(".add");
        addButton.addEventListener("click", this.model.addUser);
        const showButton =  document.body.querySelector(".show");        
        showButton.addEventListener("click", actionShow);
    }

    actionForShow() {
        let showUsers = this.handleShowUsers;
        let currentContext = this;
        function updateUsers(){
            showUsers.call(currentContext);
        }

        const actionDelete = document.body.querySelector("ol");
        actionDelete.addEventListener("click",  this.model.deleteUser);
        actionDelete.addEventListener("click", updateUsers);

        let showForm = this.handleShowForm;
        function returnToForm(){
            showForm.call(currentContext);
        }

        const returnButton =  document.body.querySelector(".return");        
        returnButton.addEventListener("click", returnToForm);
        
        /* const updateButton =  document.body.querySelector(".update");        
        updateButton.addEventListener("click", updateUsers); */
    }


}

document.addEventListener("DOMContentLoaded", function() {

const addFormView = new AddFormView();
const usersView = new UsersView();
const model = new User(addFormView, usersView);
const controller = new UsersController(model);

controller.handleShowForm();

});