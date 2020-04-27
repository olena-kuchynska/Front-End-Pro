"use strict"

class FormView {
    createForm() {
        const styles = document.head.querySelector("link");
        styles.setAttribute("href", "./styles/styles_form.css");

        const container = document.body.querySelector("div");

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
        nameOfUser.setAttribute("class","name");
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
        ageOfUser.setAttribute("class","age");
        ageInput.append(ageOfUser);        
    }

}

class AddFormView extends FormView {

    createForm() {
        const container = document.body.querySelector("div");
        container.innerHTML = "";

        super.createForm();

        const caption = document.createElement("h1");
        caption.innerText = "Registration Form";
        container.prepend(caption);

        const infoTable = document.body.querySelector("table");
        
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
    showUsersList(users) {
        const styles = document.head.querySelector("link");
        styles.setAttribute("href", "./styles/list_form.css");

        const container = document.body.querySelector(".container");
        container.innerHTML = "";

        const caption = document.createElement("h1");
        caption.innerText = "List of Users";
        container.append(caption);

        const usersList = document.createElement("ol");
        container.append(usersList);

        users.forEach( item => {
            const user = document.createElement("li");
            user.id = item.id;
            user.innerText = item.surname;
            usersList.append(user);
            const deleteButton = document.createElement("button");
            deleteButton.setAttribute("class","delete");
            user.append(deleteButton);
            const editButton = document.createElement("button");
            editButton.setAttribute("class","edit");
            user.append(editButton);
        });

        const blockButton = document.createElement("div");
        container.append(blockButton);

        const returnButton = document.createElement("button");
        returnButton.setAttribute("class","return");
        returnButton.setAttribute("type","button");
        returnButton.innerText = "Return to Form";
        blockButton.append(returnButton);
    }
}

class EditFormView extends FormView {

    createForm() {
        const container = document.body.querySelector("div");
        container.innerHTML = "";

        super.createForm();

        const caption = document.createElement("h1");
        caption.innerText = "Edit information about User";
        container.prepend(caption);

        const infoTable = document.body.querySelector("table");
        
        const stringButtons = document.createElement("tr");
        infoTable.append(stringButtons);

        const buttons = document.createElement("td");
        buttons.setAttribute("colspan","2");
        stringButtons.append(buttons);

        const editButton = document.createElement("button");
        editButton.setAttribute("class","ready");
        editButton.setAttribute("type","button");
        editButton.innerText = "Ready";
        buttons.append(editButton);         
    }    
}

class AddForm {
    constructor(viewAddForm, users) {
        this.viewAddForm = viewAddForm;
        this.users = users;
    }
    
    saveUser(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }
    
    handleAddForm() {
        this.viewAddForm.createForm();
    }
 
    addUser = () => {
        const infoUser = document.querySelectorAll("input");
        const surnameUser = document.querySelector(".surname");
    
        if (surnameUser.value === "") {
            alert("Please,fill in all information for registration!");
        } else {                
            let id = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
            let newUser = {id};
    
            infoUser.forEach(item => {                
                newUser[item.name] = item.value;
                item.value = "";           
            });
    
            this.users.push(newUser);
            this.saveUser(this.users);
            console.log(this.users);  
        }      
    }
} 

class ListForm {
    constructor(viewUsers, users) {
        this.viewUsers = viewUsers;
        this.users = users;
    }
    
    saveUser(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }
   
    handleShowUsers() {
        this.viewUsers.showUsersList(this.users);
    }
    
    deleteUser = (currentUser) => {
        this.users.forEach((item, i) => {
            if (item.id == currentUser) {
                this.users.splice(i, 1);
            }
        });            
        this.saveUser(this.users);            
        console.log(this.users);
    }

}

class EditForm {
    constructor(viewEditForm, users) {
        this.viewEditForm = viewEditForm;
        this.users = users;
    }
    
    saveUser(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }
    
    handleEditForm() {        
        this.viewEditForm.createForm();
    }

    loadInfo = (currentUser) => {
        const name = document.querySelector(".name");
        const surname = document.querySelector(".surname");
        const age = document.querySelector(".age");
                  
        this.users.forEach(item => {                
            if (item.id == currentUser) {                    
                surname.value = item.surname;
                name.value = item.name;
                age.value = item.age;                   
            }
        });                    
    }
    
    editUser = (currentUser) => {
        const surname = document.querySelector(".surname");
        const name = document.querySelector(".name");
        const age = document.querySelector(".age");
    
        this.users.forEach(item => {
            if (item.id == currentUser) {                
                item.surname = surname.value;
                item.name = name.value;
                item.age = age.value;
            }
        });
        this.saveUser(this.users);
        console.log(this.users);
    }      
}

class AddUserControll {
    constructor(model, subscribers) {
        this.model = model;
        this.subscribers = subscribers;
    }

    handleAddForm() {
        this.model.handleAddForm();
        this.actionForAdd();
    }
    
    actionForAdd() {
        const addButton =  document.body.querySelector(".add");        
        addButton.addEventListener("click", this.model.addUser);

        const showButton =  document.body.querySelector(".show");        
        showButton.addEventListener("click", () => this.subscribers.publish("showEvent"));
    }
   
}

class ListUserControll {
    constructor(model, subscribers) {
        this.model = model;
        this.subscribers = subscribers;
    }

    handleShowUsers() {
        this.model.handleShowUsers();
        this.actionForShow();
    }

    actionForShow() {
        const actions = document.body.querySelector("ol");    
        actions.addEventListener("click", (events) => {
            let currentElement = events.target;
            let currentUser = currentElement.parentElement.id;
            if(currentElement.getAttribute("class") === "delete") {
                this.model.deleteUser(currentUser);
                this.handleShowUsers();
            } else if(currentElement.getAttribute("class") === "edit") {
                this.subscribers.publish("editEvent", currentUser);
            }
        });

        const returnButton =  document.body.querySelector(".return");
        returnButton.addEventListener("click", () => this.subscribers.publish("addEvent"));
    }    

}

class EditUserControll {
    constructor(model, subscribers) {
        this.model = model;
        this.subscribers = subscribers;
    }
       
    handleEditForm(currentElement) {
        this.model.handleEditForm();        
        this.model.loadInfo(currentElement);
        this.actionForEdit(currentElement);
    }

    actionForEdit(currentUser) {
        const editButton = document.querySelector(".ready");
        editButton.addEventListener("click", () => {
            this.model.editUser(currentUser);
            this.subscribers.publish("showEvent");
        });     
    }
}

class PubSub {
    constructor() {
        this.subscribers = {};
    }

    subscribe(event, callback) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }    
        this.subscribers[event].push(callback);
    }

    publish(event, data) {
        if (!this.subscribers[event]) return;
        this.subscribers[event].forEach(subscriberCallback =>
            subscriberCallback(data));
    }
}

document.addEventListener("DOMContentLoaded", function() {

let users = JSON.parse(localStorage.getItem("users")) || [];

const addFormView = new AddFormView();
const usersView = new UsersView();
const editFormView = new EditFormView();

const subscribers = new PubSub();

const listForm = new ListForm(usersView, users);
const editForm = new EditForm(editFormView, users);
const addForm = new AddForm(addFormView, users);

let addController = new AddUserControll(addForm, subscribers);
let showController = new ListUserControll(listForm, subscribers);
let editController = new EditUserControll(editForm, subscribers);

subscribers.subscribe("addEvent", addController.handleAddForm.bind(addController));
subscribers.subscribe("showEvent", showController.handleShowUsers.bind(showController));
subscribers.subscribe("editEvent", editController.handleEditForm.bind(editController));

addController.handleAddForm();

});