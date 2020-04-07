/*2. Пользователь вводит строку, разбиваем ее на элементы массива. 
Создаём объект и наполняем его элементами из масмива: нечётные- ключи, чётные- значения*/

let sentence = prompt("Enter any sentence:");
let arrOfSentence = sentence.split(" ");
let objectOfSentence = {};

for(let i = 0; i < arrOfSentence.length; i++) {
    
    if(i % 2 <= 0) {

        objectOfSentence[arrOfSentence[i]] = arrOfSentence[i + 1];
        i++;

    }

}

//Второй способ

/*arrOfSentence.forEach((item,index,arr) => {
    
    if(index % 2 <= 0) {
        objectOfSentence[item] = arr[index + 1];
        index++;
    }

});*/

console.log(objectOfSentence);

