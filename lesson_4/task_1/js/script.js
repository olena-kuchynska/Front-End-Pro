var primeryMass = [];
var secondaryMass = [12,'abcd'];

var firstPartMass = prompt("Enter first value of massive:");
var secondPartMass = prompt("Enter second value of massive:");
var thirdPartMass = prompt("Enter third value of massive:");

primeryMass.push(firstPartMass);
primeryMass.push(secondPartMass);
primeryMass.push(thirdPartMass);

var concatMass = primeryMass.concat(secondaryMass);
var stringOfMass = concatMass.join('');

console.log(stringOfMass.length);








