class TaskView {
    createTask(action, services) {
        const actionBlock = document.querySelector(".action-block");
        actionBlock.innerHTML = ""; 
        /*actionBlock.style.display = "block";  */
        actionBlock.style.width= "35%";  

        const cancelButton =  document.createElement("button");
        cancelButton.setAttribute("type", "button");
        cancelButton.setAttribute("class","cancel");
        actionBlock.append(cancelButton);

        const addInfo = document.createElement("div");
        addInfo.setAttribute("class","add-info");
        actionBlock.append(addInfo);

        const captionInfo = document.createElement("p");
        captionInfo.setAttribute("class","caption");
        captionInfo.innerText = "new task";
        addInfo.append(captionInfo);

        const taskInfo = document.createElement("p");
        taskInfo.setAttribute("class","task-info");
        addInfo.append(taskInfo);

        const locationInfo = document.createElement("p");
        locationInfo.setAttribute("class","location-info");
        addInfo.append(locationInfo);

        const actionButton =  document.createElement("button");
        actionButton.setAttribute("class","action-button");
        actionButton.innerText = action;
        addInfo.append(actionButton);

        const locationBlock = document.createElement("div");
        locationBlock.setAttribute("class","location-block");
        actionBlock.append(locationBlock);

        const captionLocation = document.createElement("p");
        captionLocation.setAttribute("class","caption");
        captionLocation.innerText = "location";
        locationBlock.append(captionLocation);

        const inputLocation = document.createElement("input");
        inputLocation.setAttribute("class","input-location");        
        inputLocation.placeholder = "Enter location";
        locationBlock.append(inputLocation);

        const typeService = document.createElement("div");
        typeService.setAttribute("class","type-service");
        actionBlock.append(typeService);

        const captionServices = document.createElement("p");
        captionServices.setAttribute("class","caption");
        captionServices.innerText = "type service";
        typeService.append(captionServices);

        const serviceBlock = document.createElement("div");
        typeService.append(serviceBlock);

        services.forEach( item => {            
            const service = document.createElement("div");
            service.id = item.id;
            service.innerText = item.type;
            serviceBlock.append(service);
            const imageButton = document.createElement("button");
            imageButton.setAttribute("class","type-button");
            imageButton.style.backgroundImage = `url(../images/${item.type}.png)`;
            imageButton.style.width = "100%";
            imageButton.style.height = "100%";
            service.prepend(imageButton);
        });

        const taskBlock = document.createElement("div");
        taskBlock.setAttribute("class","task-block");
        actionBlock.append(taskBlock);

        const captionTask = document.createElement("p");
        captionTask.setAttribute("class","caption");       ;
        captionTask.innerText = "service";
        taskBlock.append(captionTask);

        const descriptionBlock = document.createElement("div");
        descriptionBlock.setAttribute("class","description-block");
        actionBlock.append(descriptionBlock);

        const captionDescription = document.createElement("p");
        captionDescription.setAttribute("class","caption");
        captionDescription.innerText = "description";
        descriptionBlock.append(captionDescription);

        const inputDescription = document.createElement("textarea");
        inputDescription.setAttribute("class","description");
        inputDescription.placeholder = "Enter description";
        descriptionBlock.append(inputDescription);
        /* setTimeout(() => {
            actionBlock.style.opacity = "1"; 
        },500);  */   
    }
}

class ListTasksView {
    showTask(tasks) {
        const container = document.querySelector(".container");

        const listTasks = document.createElement("div");
        listTasks.setAttribute("class","list-tasks");
        container.append(listTasks);

        const actionBlock = document.createElement("div");
        actionBlock.setAttribute("class","action-block");
        container.append(actionBlock);

        const newTaskButton = document.createElement("button");
        newTaskButton.setAttribute("class","new-task");
        newTaskButton.innerText = "+ NEW TASK";
        container.append(newTaskButton);
    }   
}

class AddForm {
    constructor(view, services) {
        this.view = view;
        this.services = services;
    }

    saveTask(services) {
        localStorage.setItem("services", JSON.stringify(services));
    }

    handleCreateTasks() {
        this.view.createTask("create task", this.services);
    }

}

class EditForm {
    constructor(view, tasks) {
        this.view = view;
        this.tasks = tasks;
    }

}

class ListForm {
    constructor(view, services) {
        this.view = view;
        this.services = services;
    }

    saveTask(services) {
        localStorage.setItem("services", JSON.stringify(services));
    }

    handleShowTasks() {
        this.view.showTask(this.services);
    }

    /* deleteUser = (currentTask) => {
        this.tasks.forEach((item, i) => {
            if (item.id == currentTask) {
                this.tasks.splice(i, 1);
            }
        });            
        this.saveTask(this.tasks);            
        console.log(this.tasks);
    } */

}

class AddFormControll {
    constructor(model, subscribers) {
        this.model = model;
        this.subscribers = subscribers;
    }

    handleCreateTasks() {
        this.model.handleCreateTasks();
        this.actionforAdd();
    }

    
    actionforAdd() {
        const actionBlock = document.body.querySelector(".action-block");
        const cancelButton =  document.body.querySelector(".cancel");
        const location = document.body.querySelector(".input-location");
        const description = document.body.querySelector(".description");
        const taskInfo = document.body.querySelector(".task-info");
        
        let taskText = "I need a plumber to unblock a toilet", descriptionText;

        description.addEventListener("change", () => { 
            descriptionText = description.value.toLowerCase().bold(); 
            if(!taskText) {
                taskInfo.innerHTML = `${descriptionText}.`;
            } else {
                taskInfo.innerHTML = `${taskText}, ${descriptionText}.`;
            }                    
        });
        
        location.addEventListener("change", () => {
            const locationInfo = document.body.querySelector(".location-info");
            locationInfo.innerText = `My address is ${location.value}`;
        });
        
        cancelButton.addEventListener("click", () => {
            actionBlock.style.width = "0";
            cancelButton.style.display = "none";           
            /* actionBlock.style.opacity = "0"; 
            setTimeout(() => {
                actionBlock.style.display = "none"             
            }, 500); */

        });
    }
  

}

class EditFormControll {
    constructor(model, subscribers) {
        this.model = model;
        this.subscribers = subscribers;
    }

    handleAddForm() {

    }    

}

class ListFormControll {
    constructor(model, subscribers) {
        this.model = model;
        this.subscribers = subscribers;
    }

    handleShowTasks() {
        this.model.handleShowTasks();
        this.actionForShow();
    }

    loadForm() {

    }

    actionForShow() {
        /* const actions = document.body.querySelector("ol");    
        actions.addEventListener("click", (events) => {
            let currentElement = events.target;
            let currentUser = currentElement.parentElement.id;
            if(currentElement.getAttribute("class") === "delete") {
                this.model.deleteUser(currentUser);
                this.handleShowUsers();
            } else if(currentElement.getAttribute("class") === "edit") {
                this.subscribers.publish("editEvent", currentUser);
            }
        });*/

        const newTaskButton =  document.body.querySelector(".new-task");
        newTaskButton.addEventListener("click", () => this.subscribers.publish("addEvent")); 
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

    let services = JSON.parse(localStorage.getItem("services")) || [{id: 1, type:"electician"}, {id: 2, type:"plumber"}, {id: 3, type:"gardener"}, {id: 4, type:"housekeeper"}, {id: 5, type:"cook"}];
    
    const listTasksView = new ListTasksView();
    const taskView = new TaskView();

    const listForm = new ListForm(listTasksView, services);
    const addForm = new AddForm(taskView, services);

    const subscribers = new PubSub();


    const listController = new ListFormControll(listForm, subscribers);
    const addController = new AddFormControll(addForm, subscribers);

    subscribers.subscribe("addEvent", addController.handleCreateTasks.bind(addController));
    subscribers.subscribe("showEvent", listController.handleShowTasks.bind(listController));
    
    listController.handleShowTasks();
    
    });