//1) Дан массив из элементов разных типов данных. Вывести в консоль тип данных элементов - значение(null выводит null);

var mainMass = [1,0,205,NaN,'abcd',true,false,120,null,'',56,undefined];
var massLenth = mainMass.length;

console.log('Our Array: ' + mainMass);

for (var i = 0; i < massLenth; i++) {

    var typeOfElement = typeof(mainMass[i]);

    if(mainMass[i]===null) {

        typeOfElement = 'null';

    } else if(isNaN(mainMass[i]) && mainMass[i] !== undefined && typeof(mainMass[i]) !== 'string') {

        typeOfElement = 'NaN';

    }

    console.log('Element of array ' + i + ': ' + typeOfElement + '\n');

}