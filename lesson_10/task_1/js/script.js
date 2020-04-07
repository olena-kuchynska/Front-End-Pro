/*1.Напишите функцию, которая сравнивает два объекта(ключ и значение одинаковые) и копирует их в новый объект, 
где свойства будут значениями, а значения ключами.*/

let firstObject = {
    name: "Olena",
    age: 24,
    dateOfBith: "01.01.1996",
    today: "23.02.20",
    gender: "woman"    
}

let secondObject = {
    name: "Olena",
    age: 24,
    dateOfBith: "01.01.1996",
    today: "22.02.20",  
}
console.log(firstObject);
console.log(secondObject);

function getNewObject(firstObject, secondObject) {

    let newObject = {};

    for(let x in firstObject) {

        for(let y in secondObject) {

            if(x === y && firstObject[x] === secondObject[y]) {
                
                newObject[firstObject[x]] = x;

            }

        }

    }

    return newObject;

}

console.log(getNewObject(firstObject,secondObject));