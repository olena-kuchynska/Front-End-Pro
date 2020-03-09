/*Создайте конструктор Student, в котором два приватных свойства и публичный метод, который выводит эти свойства. 
Любой созданный объект должен иметь доступ к этому методу через прототип. 
Создайте два объекта из конструктора, которые имеют уникальный метод(для каждого объекта 1 уникальный метод)*/

function Student() {
    let nameOfCourse = "Front-End-Pro";
    let timeOfStuding = 4;
    Student.prototype.getInfo = () => {
        console.log(`${nameOfCourse} lasts for ${timeOfStuding} months`);
    }
}

let firstStudent = new Student();
let secondStudent = new Student();

firstStudent.getName = () => { 
    console.log('Name of first student is Oleg'); 
}

secondStudent.getSurname = () => { 
    console.log('Surname of second student is Bulatova'); 
}

firstStudent.getInfo();
firstStudent.getName();

secondStudent.getInfo();
secondStudent.getSurname();

console.log(firstStudent,secondStudent);
