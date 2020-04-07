var mainMass = [1,0,205,NaN,"abcd",true,false,120,null,"",56,undefined];

for (var i = 0; i < mainMass.length; i++) {
 
    if (mainMass[i] == false
        || (isNaN(mainMass[i]) && typeof(mainMass[i])!=="string") 
        || mainMass[i] == null)
    {
        mainMass.splice(i,1);  
        i--;
    } 

  }

console.log(mainMass);







