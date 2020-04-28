/* У вас есть массив чисел. Нужно отсортировать нечетные числа, а четные оставить на своих местах. 
Например: sortArray([5,3,2,8,1,4]) ==> [1,3,2,8,5 4] Ноль не является нечестным числом */

function sortArray(array) {
    let result = [];
    let evenArray = [];

    array.forEach((element,i) => {

        if(element%2 === 0) {
            result[i] = element;
        } else {
            evenArray.push(element);
        }
        
    });

    evenArray.sort(function(a,b){ 
        return a - b;
    });

    for(let i = 0; evenArray.length; i++) {
        if(!result[i] && result[i] !== 0) {
            result[i] = parseInt(evenArray.splice(0,1));
        }
    }      

    return result;
}

console.log(sortArray([0,5,3,2,8,1,4]));