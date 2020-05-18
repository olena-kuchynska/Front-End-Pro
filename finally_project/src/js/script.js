import TaskView from './taskView';
import ListTasksView from './listTasksView';
import ListForm from './listForm';
import TaskForm from './taskForm';
import ListFormControll from './listFormControll';
import TaskFormControll from './taskFormControll';
import PubSub from './pubSub';

document.addEventListener('DOMContentLoaded', function() {

    const listTasksView = new ListTasksView();
    const taskView = new TaskView();

    const listForm = new ListForm(listTasksView);
    const taskForm = new TaskForm(taskView);

    const subscribers = new PubSub();


    const listController = new ListFormControll(listForm, listTasksView, subscribers);
    const taskFormController = new TaskFormControll(taskForm, taskView, subscribers);

    subscribers.subscribe('addEvent', taskFormController.handleCreateTasks.bind(taskFormController));
    subscribers.subscribe('showEvent', listController.handleGetTasks.bind(listController));
    subscribers.subscribe('editEvent', taskFormController.handleEditForm.bind(taskFormController));
    
    listController.handleShowTasks();    
    
});




