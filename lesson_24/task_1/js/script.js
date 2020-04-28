/* Напишите простой парсер, который имеет 4 команды: i - увеличивает число на 1,
 d - уменьшает на 1, s - возводит в квадрат число, o - возвращает число внутри массива. 
 Например: parse("iiisdoso") => [8] остальные символы игнорятся. Начальное значение 0. 
 Если нет o, в консоль выводится сообщение */

 function  parse(string) {
   let count = 0;
   string = string.toString().split("");

   if(string.indexOf("o") === -1) {
    return "String not converted";

   } else {
    for(let i = 0; i < string.length; i++) {
      switch(string[i]) {
        case "i":
          count++;
          break;
        case "d":
          count--;
          break;
        case "s":
          count*=count;
          break;
        case "o":
          return [count];
      }
    }
  }
 }

console.log(parse("iiisdoso"));