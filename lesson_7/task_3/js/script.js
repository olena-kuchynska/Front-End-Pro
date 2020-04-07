//3) Найти и заменить в тексте: число 1 на one, 2 на two, 3 на three

var currentStr = "1 for death and 2 for birth,\n3 for wind and 4 for earth,\n5 for fire, 6 for rain,\n7 joy and 8 is pain,\n9 to go, 10 back again!";
var stringToArr = currentStr.split(/(\d+)/);
var strLenght = stringToArr.length;

console.log("Current string:\n" + currentStr);
//console.log(stringToArr);

for (var i = 0; i < strLenght; i++) {

    var numberToStr;

    switch(stringToArr[i]) {
        case "1":
            numberToStr = "ONE";
            break;
        case "2":
            numberToStr = "TWO";
            break;
        case "3":
            numberToStr = "THREE";
            break;
        case "4":
            numberToStr = "FOUR";
            break;
        case "5":
            numberToStr = "FIVE";
            break;
        case "6":
            numberToStr = "SIX";
            break;
        case "7":
            numberToStr = "SEVEN";
            break;
        case "8":
            numberToStr = "EIGHT";
            break;
        case "9":
            numberToStr = "NINE";
            break;
        case "10":
            numberToStr = "TEN";
            break;
        default:
            numberToStr = stringToArr[i];
            break;
        }

    stringToArr[i] = numberToStr;

}

var newString = stringToArr.join("");

console.log("New string:\n" + newString);