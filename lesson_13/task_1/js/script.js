/*1) напишите функцию, которая принимает 1 параметр.
при первом вызове, она его запоминает, при втором,- - суммирует переданый параметр с тем, что передали первый раз и тд
например
sum(3) = 3
sum(5) = 8
sum(228) = 236*/

function getSum(firstValue) {

    return (secondValue) => {

        if(typeof(secondValue) !== "undefined") {

            return firstValue += secondValue;

        }
    }   

}

let sum = getSum(0); 

console.log(sum(3)); // = 3
console.log(sum(5)); //= 8
console.log(sum(228)); //= 236

