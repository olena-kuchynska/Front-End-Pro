//2) Дано предложение. Найти слова, содержащие буквы в верхнем регистре. 
//В этих словах заменить маленький буквы на большие, а большие на маленькие.
//'hello MY name is JavaScript and I like your code styLe'

var sentence = 'hello MY name is JavaScript and I like your code styLe';
var stringToMass = sentence.split(' ');
var stringLength = stringToMass.length;

console.log('Current sentence: ' + sentence);

for(var i = 0; i < stringLength; i++) {

    var regUpperCase = /[A-Z]+/;
    var regLowerCase = /[a-z]+/;

    if(regUpperCase.test(stringToMass[i])) {

        var wordToMass = stringToMass[i].split('');
        var wordLength = wordToMass.length;
        //console.log(wordToMass);

        for( var j = 0; j < wordLength; j++) {

            var letter;

            if(regUpperCase.test(wordToMass[j])) {

                letter = wordToMass[j].toLowerCase();
                
            } else if(regLowerCase.test(wordToMass[j])) {

                letter = wordToMass[j].toUpperCase();

            }

            wordToMass[j] = letter;
        }

        stringToMass[i] = wordToMass.join('');
        
    } 

}

var newSentence = stringToMass.join(' ');

console.log('New sentence: ' + newSentence);

