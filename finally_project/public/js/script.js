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
        serviceBlock.setAttribute("class","service-list");
        typeService.append(serviceBlock);

        services.forEach( item => {            
            const service = document.createElement("div");
            service.setAttribute("class","service");
            service.id = item.id;
            serviceBlock.append(service);
            const serviceName = document.createElement("p");            
            serviceName.innerText = item.type;
            service.append(serviceName);
            const imageButton = document.createElement("button");
            imageButton.setAttribute("class","type-button");
            imageButton.style.background = `url(./images/${item.type}.png) no-repeat center center`;
            service.prepend(imageButton);
        });

        const taskBlock = document.createElement("div");
        taskBlock.setAttribute("class","task-block");
        actionBlock.append(taskBlock);

        const captionTask = document.createElement("p");
        captionTask.setAttribute("class","caption");
        taskBlock.append(captionTask);

        const taskListBlock = document.createElement("div");                    
        taskListBlock.setAttribute("class","task-name-list");        
        taskBlock.append(taskListBlock);

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

        const actionBlock = document.createElement("div");
        actionBlock.setAttribute("class","action-block");
        container.append(actionBlock);        

        const listTasks = document.createElement("div");
        listTasks.setAttribute("class","list-tasks");
        container.append(listTasks);

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
        this.typeOfService = "";
        this.taskOfService = "";
        this.descriptionText = "";
    }

    saveTask(services) {
        localStorage.setItem("services", JSON.stringify(services));
    }

    handleCreateTasks() {
        this.view.createTask("create task", this.services);
    }

    actionCancel(cancelButton) {
        const actionBlock = document.body.querySelector(".action-block");
        actionBlock.style.width = "0";
        cancelButton.style.display = "none";           
            /* actionBlock.style.opacity = "0"; 
            setTimeout(() => {
                actionBlock.style.display = "none"             
            }, 500); */

    }

    changeService(serviceList, currentElement) {
        const taskBlock = document.body.querySelector(".task-block");
        for (let i = 0; i < serviceList.childNodes.length; i++) {
            for (let j=0; j <  serviceList.childNodes[i].childNodes.length; j++ ) {
                serviceList.childNodes[i].childNodes[j].style.border = "none";
            }                
        }
        if(currentElement.getAttribute("class") === "service") {

            taskBlock.style.display = "block";            
            currentElement.childNodes[0].style.border = "1px solid #4c71fe";
            this.taskOfService = 
                this.typeOfService === currentElement.innerText.toLowerCase()
                ? this.taskOfService : "";                        

            this.typeOfService = currentElement.innerText.toLowerCase();
            taskBlock.childNodes[0].innerText = `${this.typeOfService} tasks`;                    
            taskBlock.childNodes[1].innerHTML = "";           

            this.services.forEach( item => {            
                if(item.id == currentElement.id && item.tasks) {                    
                    let tasks = item.tasks;
                    tasks.forEach( item => {
                        const task = document.createElement("span");                                           
                        task.setAttribute("class","task-name");
                        task.innerText = item;
                        taskBlock.childNodes[1].append(task);
                    });
                }
            });// for loop
            this.changeTask();
        }
         
    }

    chooseTask(taskName, currentElement) {
        const taskInfo = document.body.querySelector(".task-info");
        for (let i = 0; i < taskName.childNodes.length; i++) {
            taskName.childNodes[i].style.border = "none";       
        }
        if(currentElement.getAttribute("class") === "task-name") {
            currentElement.style.border = "1px solid #4c71fe";
            this.taskOfService = currentElement.innerText.toLowerCase();
            this.changeTask();
        }       
        
    }

    changeTaskInfo(description) {        
        this.descriptionText = description.value.toLowerCase();
        this.changeTask();        
    }

    changeTask() {
        const taskInfo = document.body.querySelector(".task-info");

        if(!this.typeOfService) {
            taskInfo.innerHTML = `${this.descriptionText.bold()}.`;
        } else if(!this.descriptionText) {
            if(!this.taskOfService){
                taskInfo.innerHTML = `I need ${`a ${this.typeOfService}`.bold()}.`;
            } else {
                taskInfo.innerHTML = 
                `I need ${`a ${this.typeOfService}`.bold()} 
                to ${this.taskOfService.bold()}.`;
            }            
        } else if(!this.taskOfService) {
            taskInfo.innerHTML = 
                `I need ${`a ${this.typeOfService}`.bold()}, 
                ${this.descriptionText.bold()}.`;
        } else {
            taskInfo.innerHTML = 
                `I need ${`a ${this.typeOfService}`.bold()} 
                to ${this.taskOfService.bold()}, 
                ${this.descriptionText.bold()}.`;
        }
    }

    changeLocation(location) {
        const locationInfo = document.body.querySelector(".location-info");
        locationInfo.innerText = `My address is ${location}`;
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
        const cancelButton =  document.body.querySelector(".cancel");
        const location = document.body.querySelector(".input-location");
        const description = document.body.querySelector(".description");
        const serviceList = document.body.querySelector(".service-list"); 
        const taskName = document.body.querySelector(".task-name-list"); 
        

        description.addEventListener("change", () => { 
            this.model.changeTaskInfo(description);                               
        });
        
        location.addEventListener("change", () => {
            this.model.changeLocation(location.value);            
        });

        serviceList.addEventListener("click", (event) => {
            const currentElement = event.target.parentElement;
            this.model.changeService(serviceList, currentElement);  
        });

        taskName.addEventListener("click", (event) => {
            this.model.chooseTask(taskName, event.target);
        });

        cancelButton.addEventListener("click", (event) => {
            this.model.actionCancel(event.target);   
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

    let services = JSON.parse(localStorage.getItem("services")) || [{id: 1, type:"electician"}, 
    {id: 2, type:"plumber", tasks: ["Unblock toilet", "Unblock a sink", "Fix a water leak", "Install a sink", "Install a shower", "Install a toilet"]}, 
    {id: 3, type:"gardener"}, {id: 4, type:"housekeeper"}, {id: 5, type:"cook"}];
    
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