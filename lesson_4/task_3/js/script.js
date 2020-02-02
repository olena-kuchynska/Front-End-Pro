//Генератор случайных строк для массива.

/*var mainMass = [];
var noRepeatMass = [];
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
var countOfString = prompt('Enter count of massive:');

for (var i = 0; i < countOfString; i++ ) {
   
    var str = '';
    var countOfLetter = Math.floor(Math.random() * 3) + 1;

    for (var j = 0; j < countOfLetter; j++){
    
    var indexOfLetter = Math.floor(Math.random() * alphabet.length);
    str += alphabet[indexOfLetter];

    }

    mainMass[i] = str;    
}
console.log(mainMass);*/

//Сравнивает сроки и удаляет повторения(не раотает если обьеденить с функцией генеррации случайных чисел)

var mainMass = ['abc','ab1223'];

for (var i = 0; i < mainMass.length; i++) {

    var firstString = String(mainMass[i]);
    var secondString = String(mainMass[i+1]);

    if (mainMass[i+1]!==undefined) { 
        var firstMassOfStr = firstString.split('');
        var secondMassOfStr = secondString.split('');
        var lenthOfFirstMass = firstMassOfStr.length;
        
        for(var j = 0; j < firstMassOfStr.length; j++) {
            
            while(firstMassOfStr.length!==1) {

                for (var f = 0; f < secondMassOfStr.length; f++) {

                    if(firstMassOfStr[j]==secondMassOfStr[f]) {
                        firstMassOfStr.splice(j,1);
                        secondMassOfStr.splice(f,1);
                        f--;
                    }
                }           

                if (firstMassOfStr.length>lenthOfFirstMass)  {
                    j--;
                } 
            }
        }  
                       
        mainMass[i] = firstMassOfStr.join('');
        mainMass[i+1] = secondMassOfStr.join('');
    }
}
console.log(mainMass);






