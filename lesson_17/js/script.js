/* Создайте форму(с помощью js), которая состоит из трех инпутов(Имя, Фамилия, возраст) и двух кнопок: ADD, SHOW.
При заполнении полей и нажатии на кнопку ADD, создается объект и добавляется в массив. 
При нажатии на SHOW форма перерисовуется на список Фамилий ваших объектов, с крестиком рядом. 
При нажатии на крестик объект удаляется из массива и список перерисовывается уже без этой фамилии. 
Подсказка: здесь 2 View*/


'use strict'

let users = [{surname:'bulatova'},{surname:'bunsul'},{surname:'birshenko'},{surname:'ivanov'}];

class AddFormView {

    createForm() {

        const styles = document.head.querySelector('link');
        styles.setAttribute('href', './styles/addForm.css');

        const container = document.body.querySelector('div');
        container.innerHTML = "";

        const form = document.createElement('form');
        container.append(form);

        const infoTable = document.createElement('table');
        form.append(infoTable);

        const stringName = document.createElement('tr');
        infoTable.append(stringName);

        const nameLabel = document.createElement('td');
        nameLabel.innerText = "Name";
        stringName.append(nameLabel);

        const nameInput = document.createElement('td');
        stringName.append(nameInput);

        const nameOfUser = document.createElement('input');
        nameOfUser.setAttribute("type","text");
        //nameOfUser.setAttribute("required","required");
        nameOfUser.setAttribute("name","name");
        nameInput.append(nameOfUser);

        const stringSuname = document.createElement('tr');
        infoTable.append(stringSuname);

        const surnameLabel = document.createElement('td');
        surnameLabel.innerText = "Surname";
        stringSuname.append(surnameLabel);

        const surnameInput = document.createElement('td');
        stringSuname.append(surnameInput);

        const surnameOfUser = document.createElement('input');
        surnameOfUser.setAttribute("type","text");
        //surnameOfUser.setAttribute("required","required");
        surnameOfUser.setAttribute("name","surname");
        surnameInput.append(surnameOfUser);

        const stringAge = document.createElement('tr');
        infoTable.append(stringAge);

        const ageLabel = document.createElement('td');
        ageLabel.innerText = "Age";
        stringAge.append(ageLabel);

        const ageInput = document.createElement('td');
        stringAge.append(ageInput);

        const ageOfUser = document.createElement('input');
        ageOfUser.setAttribute("type","number");
        //ageOfUser.setAttribute("required","required");
        ageOfUser.setAttribute("name","age");
        ageInput.append(ageOfUser);

        const stringButtons = document.createElement('tr');
        infoTable.append(stringButtons);

        const buttons = document.createElement('td');
        buttons.setAttribute("colspan","2");
        stringButtons.append(buttons);

        const addButton = document.createElement('button');
        addButton.setAttribute('class','add');
        addButton.innerText = "Add";
        buttons.append(addButton);

        const showButton = document.createElement('button');
        showButton.setAttribute('class','show');
        showButton.innerText = "Show";
        buttons.append(showButton);
        
    }
    
}

class UsersView {
    showUsersList() {
        const styles = document.head.querySelector('link');
        styles.setAttribute('href', './styles/deleteForm.css');
        const container = document.body.querySelector('.container');
        container.innerHTML = "";

        const usersList = document.createElement('ol');
        container.append(usersList);

        users.forEach( item => {
            const user = document.createElement('li');
            user.innerText = item.surname;
            usersList.append(user);
            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('class','delete');
            user.append(deleteButton);
        });
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
        let newUser = {};

        infoUser.forEach(item => {
            newUser[item.name] = item.value;
            item.value = "";
        });

        users.push(newUser);
        console.log(users);        
    }

    deleteUser(events) {
        const infoUser = events.target.parentElement.innerText;
        
        users.forEach((item, i) => {
            if (item.surname === infoUser) {
                users.splice(i, 1);
            }
        });
        console.log(users);
        this.handleShowUsers();
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
        this.model.handleShowUsers();
        this.actionForShow();
    }

    actionForAdd() {
        const addButton =  document.body.querySelector('.add');
        addButton.addEventListener('click', this.model.addUser);
        const showButton =  document.body.querySelector('.show');        
        showButton.addEventListener('click', this.handleShowUsers);
    }

    actionForShow() {
        
        const deleteButton = document.body.querySelectorAll('.delete');
        deleteButton.forEach(item => {
            item.addEventListener('click', this.model.deleteUser);
        });
        /* const returnButton =  document.body.querySelector('.return');        
        returnButton.addEventListener('click', this.handleShowForm); */
    }


}

const addFormView = new AddFormView();
const usersView = new UsersView();
const model = new User(addFormView, usersView);
const controller = new UsersController(model);

document.addEventListener('DOMContentLoaded', function() {

controller.handleShowForm();

});