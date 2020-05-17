class TaskView {
    constructor() {          
        this.typeOfService;
        this.taskOfService;
        this.descriptionText;
        this.location;
        this.taskText;
    }

    showTaskForm(action) {
        const actionBlock = document.querySelector(".action-block");
        actionBlock.innerHTML = "";        
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
    }

    showServices(services) {
        const serviceBlock = document.body.querySelector(".service-list");

        services.forEach( item => {            
            const service = document.createElement("div");
            service.setAttribute("class","service");
            service.id = item["_id"];
            serviceBlock.append(service);
            const serviceName = document.createElement("p");            
            serviceName.innerText = item.type;
            service.append(serviceName);
            const imageButton = document.createElement("button");
            imageButton.setAttribute("class","type-button");
            imageButton.style.background = `url(./images/${item.type}.png) no-repeat center center`;
            service.prepend(imageButton);
        });
    }

    actionCancel() {
        const actionBlock = document.body.querySelector(".action-block");        
        actionBlock.innerHTML = "";        
        actionBlock.style.width = "0";
    }

    changeService(services, currentElement) {        
        const serviceList = document.body.querySelector(".service-list");
        const taskBlock = document.body.querySelector(".task-block");

        for (let i = 0; i < serviceList.childNodes.length; i++) {
            for (let j=0; j <  serviceList.childNodes[i].childNodes.length; j++ ) {
                serviceList.childNodes[i].childNodes[j].style.border = "none";
            }                
        }

        currentElement.childNodes[0].style.border = "1px solid #4c71fe";

        let checkedService = currentElement.innerText.toLowerCase();
        this.taskOfService = "";
        this.typeOfService = checkedService;

        taskBlock.childNodes[0].innerText = `${checkedService} tasks`;                    
        taskBlock.childNodes[1].innerHTML = "";           

        services.forEach( item => {            
            if(item["_id"] === currentElement.id && item.tasks) {                    
                let tasks = item.tasks;
                tasks.forEach( item => {
                    const task = document.createElement("span");                                           
                    task.setAttribute("class","task-name");
                    task.innerText = item;
                    taskBlock.childNodes[1].append(task);
                });
            }
        });

        taskBlock.style.display = "block";
        this.changeTask();                
    }

    chooseTask(currentElement) {        
        const taskName = document.body.querySelector(".task-name-list");

        for (let i = 0; i < taskName.childNodes.length; i++) {
            taskName.childNodes[i].style.border = "none";       
        }       

        currentElement.style.border = "1px solid #4c71fe";
        
        this.taskOfService = currentElement.innerText.toLowerCase();
        this.changeTask(); 
    }

    loadLocation(infoLocation) {        
        const inputLocation = document.body.querySelector(".input-location");
        inputLocation.value = `${infoLocation.region}, ${infoLocation.city}`;
        this.location = inputLocation.value;

        const location = document.body.querySelector(".location-info");
        location.innerText = `My address is ${this.location}`;  
    }

    changeTaskInfo(description) {      
        this.descriptionText = description.toLowerCase();
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

        let index = taskInfo.innerText.indexOf(",")
        this.taskText = taskInfo.innerText.slice(0,index);
    }

    changeLocation(location) {
        const locationInfo = document.body.querySelector(".location-info");
        locationInfo.innerText = `My address is ${location}`;
        this.location = location;
    }

    getTaskInfo() {
        return {
            typeOfService: this.typeOfService, 
            taskOfService: this.taskOfService, 
            taskText: this.taskText, 
            description: this.descriptionText, 
            location: this.location
        };
    }

    loadEditForm(task, services) { 
        const inputDescription = document.body.querySelector(".description");
        const inputLocation = document.body.querySelector(".input-location");
        const serviceBlock = document.body.querySelector(".service-list").childNodes;        

        for(let i = 0; i < serviceBlock.length; i++) {
            if(serviceBlock[i].innerText.toLowerCase() === task.typeOfService) {        
                this.changeService(services, serviceBlock[i]);
            }
        }

        const taskList = document.body.querySelectorAll(".task-name");

        for(let i = 0; i < taskList.length; i++) {
            if(taskList[i].innerText.toLowerCase() === task.taskOfService) {           
                this.chooseTask(taskList[i]);
            }
        }

        inputDescription.innerText = task.description;
        inputLocation.value = task.location;
        this.changeTaskInfo(task.description);        
        this.changeLocation(task.location);
        this.changeTask();
    }    
}

class ListTasksView {
    showTask() {
        const container = document.querySelector(".container");

        const actionBlock = document.createElement("div");
        actionBlock.setAttribute("class","action-block");
        container.append(actionBlock);        

        const currentTasks = document.createElement("div");
        currentTasks.setAttribute("class","current-tasks");
        container.append(currentTasks);

        const newTaskButton = document.createElement("button");
        newTaskButton.setAttribute("class","new-task");
        newTaskButton.innerText = "+ new task";
        currentTasks.append(newTaskButton);

        const tasksList = document.createElement("div");
        tasksList.setAttribute("class","tasks-list");
        currentTasks.append(tasksList);  
    }

    showTaskList(tasks) {
        const tasksList = document.body.querySelector(".tasks-list");
        tasksList.innerHTML = "";

        let month = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'];

        if(tasks) {
            tasks.forEach(item => {
                const task = document.createElement("div");
                task.setAttribute("class","task");
                task.id = item["_id"];
                tasksList.append(task);
                    
                const dateCreating = document.createElement("p");                     
                let date = new Date(item.dateCreating); 
                let hours =  date.getHours() < 10 ? `0${date.getHours()}`: date.getHours();
                let minutes =  date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes();
                let dateStr = `${dayOfWeek[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()}, ${hours}:${minutes}`;            
                dateCreating.innerText = dateStr;
                task.append(dateCreating);

                const taskTest = document.createElement("p");            
                taskTest.innerText = item.taskText;
                task.append(taskTest);

                const editButton = document.createElement("button");
                editButton.setAttribute("class","edit-button");
                editButton.innerText = "edit";
                task.append(editButton);

                const deleteButton = document.createElement("button");
                deleteButton.setAttribute("class","delete-button");
                deleteButton.innerText = "delete";
                task.append(deleteButton);
            });
        }

    }

    resizeWindow() {
        const listTask = document.body.querySelector(".tasks-list");

        let element = document.body.querySelector(".new-task");
        let marginTop = parseInt(getComputedStyle(element, true).marginTop);
        let marginBottom = parseInt(getComputedStyle(element, true).marginBottom);

        listTask.style.maxHeight = `calc(
                ${document.documentElement.clientHeight}px - 
                ${element.offsetHeight + marginTop + marginBottom}px
            )`;
    }     
}

class TaskForm {
    constructor(view) {
        this.view = view;
        this.services;
        this.currentTask;
    }

    getServices(currentTask) {
        fetch("/services")
        .then(infoServices => infoServices.json())
        .then(infoServices => {
            this.services = infoServices;
            this.view.showServices(infoServices);
            if(currentTask) {
                this.getCurrentTask(currentTask);
            }          
        })
        .catch(err => console.error(`Connection Error:${err}`));
    }

    getCurrentTask = (currentTask) => {
        fetch(`/tasks/${currentTask.id}`)
        .then(infoServices => infoServices.json())
        .then(infoServices => {
            this.currentTask = currentTask.id;
            this.view.loadEditForm(infoServices, this.services);            
        })
        .catch(err => console.error(`Connection Error:${err}`));        
    }

    getLocation() {
        fetch("/location")
        .then(infoLocation => infoLocation.json())
        .then(infoLocation => {
            this.view.loadLocation(infoLocation);            
        })
        .catch(err => console.error(`Connection Error:${err}`));
    }   

    addTask = (task) => {
        if(task.typeOfService && task.location) {         
            fetch("/tasks", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(task)
            })
            .then(response => response)
            .catch(err => console.error(`Connection Error:${err}`));
        } else {
            alert("Enter all data, please!!");
        }
    }

    editTask = (task) => { 
        fetch(`/tasks/${this.currentTask}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                    },
                body: JSON.stringify(task)
        })
        .then(response => response)
        .catch(err => console.error(`Connection Error:${err}`));
    }

}

class ListForm {
    constructor(view) {
        this.view = view;
    }

    getTasks() {    
        fetch("/tasks")
        .then(infoTasks => infoTasks.json())
        .then(infoTasks => this.view.showTaskList(infoTasks))
        .catch(err => console.error(`Connection Error:${err}`));
    }

    deleteTask = (currentTask) => {
        fetch(`/tasks/${currentTask.id}`, {
                method: 'DELETE'
            })
        .then(response => response)
        .catch(err => console.error(`Connection Error:${err}`));
    }
}

class TaskFormControll {
    constructor(model, view, subscribers) {
        this.model = model;
        this.view = view;
        this.subscribers = subscribers;
    }

    handleCreateTasks() {
        this.view.showTaskForm("create task");
        this.model.getServices(); 
        this.model.getLocation();        
        this.actionforForm();
    }

    handleEditForm(currentTask) {
        this.model.getServices(currentTask);
        this.view.showTaskForm("edit task");   
        this.actionforForm();
    }
    
    actionforForm() {        
        const cancelButton =  document.body.querySelector(".cancel");
        const location = document.body.querySelector(".input-location");
        const description = document.body.querySelector(".description");
        const serviceList = document.body.querySelector(".service-list"); 
        const taskName = document.body.querySelector(".task-name-list"); 
        const actionButton = document.body.querySelector(".action-button");        

        description.addEventListener("input", () => { 
            this.view.changeTaskInfo(description.value);                               
        });
        
        location.addEventListener("input", () => {
            this.view.changeLocation(location.value);            
        });

        serviceList.addEventListener("click", (event) => {
            let currentElement = event.target.parentElement;
            if(currentElement.getAttribute("class") === "service") {
                this.view.changeService(this.model.services, currentElement);
            }     
        });

        taskName.addEventListener("click", (event) => {
            let currentElement = event.target;
            if(currentElement.getAttribute("class") === "task-name") {
                this.view.chooseTask(currentElement);
            }
        });

        cancelButton.addEventListener("click", () => {
            this.view.actionCancel();   
        });

        actionButton.addEventListener("click", (event) => {
            let taskInfo = this.view.getTaskInfo();
            let task = {
                typeOfService: taskInfo.typeOfService,
                taskOfService: taskInfo.taskOfService,
                dateCreating: Date.now(),
                taskText:  taskInfo.taskText,
                description: taskInfo.description,
                location:  taskInfo.location
            }
            if(event.target.innerText.toLowerCase() === "create task") {                
                this.model.addTask(task);                
            } else if(event.target.innerText.toLowerCase() === "edit task") {
                this.model.editTask(task);               
            }
            this.subscribers.publish("showEvent");
            this.view.actionCancel();
        });
    }
}

class ListFormControll {
    constructor(model, view, subscribers) {
        this.model = model;        
        this.view = view;
        this.subscribers = subscribers;
        this.tasks;
    }

    handleShowTasks() {
        this.handleGetTasks();
        this.view.showTask();
        this.actionForShow();
    }

    handleGetTasks() {
        this.model.getTasks();
    }

    actionForShow() {
        const actions = document.body.querySelector(".tasks-list");    
        actions.addEventListener("click", (events) => {
            let currentElement = events.target;
            let currentTask = currentElement.parentElement;
            if(currentElement.getAttribute("class") === "delete-button") {
                this.model.deleteTask(currentTask);
                this.handleGetTasks();
            } else if(currentElement.getAttribute("class") === "edit-button") {
                this.subscribers.publish("editEvent", currentTask);                
            }            
        });    
        
        window.addEventListener("resize", () => {
            this.view.resizeWindow();
        });

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

    const listTasksView = new ListTasksView();
    const taskView = new TaskView();

    const listForm = new ListForm(listTasksView);
    const taskForm = new TaskForm(taskView);

    const subscribers = new PubSub();


    const listController = new ListFormControll(listForm, listTasksView, subscribers);
    const taskFormController = new TaskFormControll(taskForm, taskView, subscribers);

    subscribers.subscribe("addEvent", taskFormController.handleCreateTasks.bind(taskFormController));
    subscribers.subscribe("showEvent", listController.handleGetTasks.bind(listController));
    subscribers.subscribe("editEvent", taskFormController.handleEditForm.bind(taskFormController));
    
    listController.handleShowTasks();    
    
});