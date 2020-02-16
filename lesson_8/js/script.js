/*Даны два массива. Сравнить массивы и вывести одинаковые элементы в о дельный массив. 
Если одинаковый элемент число, которое делится на пять без остатка, добавить в финальный массив FIVE, вместо числа. 
Если одинаковый элемент строка, в которой больше 5 символов, добавить в финальный массив FSTR вместо элемента. 
Остальные совпадающие элементы, просто добавить в массив.*/

var firstArray = [1,0,205,NaN,'abcd',true,false,120,null,'Hi, Google!',56,undefined];
var secondArray = [205,120,true,34,1,true,'abcd',56,'Hi, Google!',3];

function getSameElem(firstArray,secondArray) {

    firstArray = getUniqueArr(firstArray);
    secondArray = getUniqueArr(secondArray);

    var newArr = [];

    secondArray.forEach(item => {

        if(firstArray.includes(item)) {
            newArr.push(getChange(item));
        }

    });

    return newArr;

}

function getChange(valueOfArr) {

    var valueLenth = valueOfArr.length;

    if(typeof(valueOfArr) === 'number' && valueOfArr % 5 === 0) {
        
        return 'FIVE';

    } else if(typeof(valueOfArr) === 'string' && valueLenth > 5) {
        
        return 'FSTR';

    } else {

        return valueOfArr;
        
    }

}

function getUniqueArr(arr) {

    var result = [];

    arr.forEach(item => {

        if(!result.includes(item)) {
            result.push(item);
        }

    });

    return result;  

}

console.log('First Array: ' + firstArray);
console.log('Second Array: ' + secondArray);

console.log('The Same elemets of these arrays: ' + getSameElem(firstArray,secondArray));