/* В предыдущее задание добавьте логику для возврата первой формы, при нажатии на кнопку Назад, 
которая появляется во второй View(там, где список с фамилиями). Добавьте кнопку изменить, рядом с удалить. 
При нажатии изменить пользователь может изменить данные(появляется форма с инпутами для изменения и кнопка Готово, 
после нажатия данные по этому юзеру изменяются). Добавьте логику для хранения данных на клиенте, 
чтоб после перезагрузки список и все данные отобрражались также.*/

"use strict"

let users = [{surname:"bulatova"},{surname:"bunsul"},{surname:"birshenko"},{surname:"ivanov"}];

class FormView {
    createForm() {
        const styles = document.head.querySelector("link");
        styles.setAttribute("href", "./styles/addForm.css");

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

class User {
    constructor(viewAddForm, viewUsers, viewEditForm) {
    this.viewAddForm = viewAddForm;
    this.viewEditForm = viewEditForm;
    this.viewUsers = viewUsers;
    }

    handleAddForm() {
        this.viewAddForm.createForm();
    }

    handleShowUsers() {
        this.viewUsers.showUsersList();
    }

    handleEditForm() {
        
        this.viewEditForm.createForm();
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
        const currentElement = events.target;
        const infoUser = events.target.parentElement.innerText;
        
        if(currentElement.getAttribute("class") === "delete") {
        
            users.forEach((item, i) => {
                if (item.surname === infoUser) {
                    users.splice(i, 1);
                }
            });
            console.log(users); 
        }

    }

    loadInfo(events) {
        const infoUser = events.target.parentElement.innerText;
        const name = document.querySelector(".name");
        const surname = document.querySelector(".surname");
        const age = document.querySelector(".age");
              
            users.forEach((item, i) => {
                if (item.surname === infoUser) {
                    
                    surname.value = item.surname;

                    if(item.name) {
                        name.value = item.name;
                    }

                    if(item.age) {
                        age.value = item.age;
                    } 
                }
            });
    }

    editUser(currentUser) {
        
        console.log(currentUser);
        //const infoUser = document.querySelectorAll("input");
        /* const surname = document.querySelector(".surname");
        const name = document.querySelector(".name");
        const age = document.querySelector(".age");

        users.forEach((item, i) => {
            if (item.surname === surname.value) {                
                user[surname.name] = item.value;
                if(item.name) {
                    name.value = item.name;
                }

                if(item.age) {
                    age.value = item.age;
                } 
            }
        });
        console.log(users);

        infoUser.forEach(item => {
            newUser[item.name] = item.value;
            item.value = "";           
        });*/  

    }     
    
}

class UsersController {
    constructor(model) {
        this.model = model;
    }

    handleAddForm() {
        this.model.handleAddForm();
        this.actionForAdd();
    }

    handleShowUsers() {
        //console.log(this);
        this.model.handleShowUsers();
        this.actionForShow();
    }

    handleEditForm(currentElement) {
        this.loadEditForm();
        this.model.handleEditForm();
        this.actionForEdit(currentElement);
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
        function updateUsers() {
            showUsers.call(currentContext);
        }

        let editForm = this.handleEditForm;
        function showEditUsers(events) {
            let currentElement = events.target;
            let currentUser = currentElement.parentElement.innerText;
            if(currentElement.getAttribute("class") === "edit") {
                editForm.call(currentContext,currentUser);
            }                  
        }

        const actions = document.body.querySelector("ol");
        actions.addEventListener("click",  this.model.deleteUser);
        actions.addEventListener("click", updateUsers);
        actions.addEventListener("click", showEditUsers);

        let showForm = this.handleAddForm;
        function returnToForm() {
            showForm.call(currentContext);
        }

        const returnButton =  document.body.querySelector(".return");        
        returnButton.addEventListener("click", returnToForm);
    }

    loadEditForm() {
        const editForm = document.querySelector(".container");
        editForm.addEventListener("click",this.model.loadInfo);        
    }

    actionForEdit(currentUser) {
        let showUsers = this.handleShowUsers;
        let currentContext = this;
        function updateUsers() {
            showUsers.call(currentContext);
        }
        function editUser() {
            currentContext.model.editUser(currentUser);
        }
        const editButton = document.querySelector(".ready");
        editButton.addEventListener("click",this.model.editUser);
        editButton.addEventListener("click",updateUsers);
        
    }


}

document.addEventListener("DOMContentLoaded", function() {

const addFormView = new AddFormView();
const usersView = new UsersView();
const editFormView = new EditFormView();
const model = new User(addFormView, usersView, editFormView);
const controller = new UsersController(model);

controller.handleAddForm();
//setTimeout(editFormView.createForm(),2000);

});