//10-е задание срез

function getLetter(str) {
    var reg = /[аоиеёэыуюя]/gi;
    var count = str.match(reg);
    console.log(count);
    if(count===null) {
    return "В фразе нет согласных букв";
    } else {
    return count.length;
    }
    
    }
    console.log("Кол-во гласных букв фразе: " + getLetter("Введите цвет сфетофора"));