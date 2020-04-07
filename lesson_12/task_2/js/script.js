/*Создайте класс Animals, который умеет создавать животных, добавлять их в массив, удалять из массива по имени животного. 
Класс WatchAnimals, у которого есть методы watchCreate и watchDelete, которые вызываются при добавлении и удалении животных из массива 
и запускают методы showCreate и showDelete из класса Show. эти методы выводят в консоль добавленные или удалённый объект соответственно.*/

let zoo = [];

class Show {

    showCreate(nameOfAnimal) {
        console.log(nameOfAnimal + " was created");
    }

    showDelete(nameOfAnimal) {
        console.log(nameOfAnimal + " was deleted");
    }
}

class WatchAnimals extends Show{

    watchCreate(nameOfAnimal) {
        super.showCreate(nameOfAnimal);
    }

    watchDeleate(nameOfAnimal) {
        super.showDelete(nameOfAnimal);
    }

}

class Animals extends WatchAnimals {

    constructor(nameOfAnimal) {
        super();
        this.nameOfAnimal = nameOfAnimal;
    }

    addAnimals() {
        zoo.push(this.nameOfAnimal);
        super.watchCreate(this.nameOfAnimal);
    }

    deleateAnimals() {
        zoo.forEach((element,i) => {
            if(element===this.nameOfAnimal) {
                zoo.splice(i,1);
                super.watchDeleate(this.nameOfAnimal);            
            } else {
                console.log("We don\"t have this animal");
            }
        });        
    }

}

//console.log(Show.prototype);
//console.log(WatchAnimals.prototype);

let zebra = new Animals("zebra");
console.log(zebra);

zebra.addAnimals();
console.log(zoo);

zebra.deleateAnimals();
console.log(zoo);
