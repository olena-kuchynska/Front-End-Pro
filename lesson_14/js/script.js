/* Создать архитектуру MVC для Human и Animals. Human умеет создавать людей(объекты), добавлять в массив, удалять из массива.
 Animal имеет те же возможности, что и Human(методы с таким же функционалом). 
 View выодит в консоль человека или животное, которое добавили/удалили и другой метод выводит весь массив. 
 Массив и для людей и для животных один, но люди находятся вначале, животные в конце(животные добавляются в конец, люди в начало). 
 Дергайте контроллер просто вручную(предавая нужные данные просто в метод). */

 'use strict'

let nature = [];
let massege = 0;

class NatureController {
    constructor(model) {
        this.model = model;
    }

    action(message) {

        if (massege) {
            let [action, type, name] = message.split(' ');

            (action === 'add') ? this.handleAdd(action, type, name) :
            (action === 'delete') ? this.handleDelete(action, type, name) :
            console.log('Uncorrect data!');

        } else {
            console.log('The End');
        }
        
    }

    handleAdd(action, type, name) {
        this.model.addInhab(action, type, name);
    }

    handleDelete(action, type, name) {
        this.model.deleteInhab(action, type, name);
    }

}

class Inhabitant {
    constructor(view) {
        this.view = view;
    }

    addInhab(action, type, name) {
        if(type === 'human') {
            nature.unshift({type, name});            
        } else if(type === 'animal') {
            nature.push({type, name});
        }

        this.view.showAction(name, action);
        this.view.showNature();
        
    }

    deleteInhab(action, type, name) {
        nature.forEach((item, i, arr) => {
            if (item.type === type && item.name === name) {
                nature.splice(i, 1);
            }
        });
        this.view.showAction(name, action);
        this.view.showNature();
    }

}


class View {

    showAction(name, action) {
        console.log(`inhabitant: ${name}, action: ${action}`);
    }

    showNature() {
        console.log(nature);
    }

}
let view = new View();
let inhabitant = new Inhabitant(view);
let controller = new NatureController(inhabitant);

do {
    massege = prompt('Add actions, type and name of inhabitant');
    controller.action(massege);
} while(massege);



/* 
class NutureController {
    constructor(model) {
        this.model = model;
    }

    action(message) {
        const [action,type,name] = message.toLowerCase().split(' ');

        (action === 'add' && type === 'animal') ? this.handleAnimalAdd(action,type,name) :
        (action === 'add' && type === 'human') ? this.handleHumanAdd(action,type,name) :
        (action === 'delete' && type === 'animal') ? this.handleAnimalDelete(action,type,name) :
        (action === 'delete' && type === 'human') ? this.handleHumanDelete(action,type,name):
        console.log('Uncorrect data!');
    }

    handleAnimalAdd(action,type,name) {
        this.model.animalAdd(action,type,name);
    }

    handleHumanAdd(action,type,name) {
        this.model.humanAdd(action,type,name);
    }

    handleAnimalDelete(action,type,name) {
        this.model.animalDelete(action,type,name);
    }

    handleHumanDelete(action,type,name) {
        this.model.humanDelete(action,type,name);
    }

}
 */


