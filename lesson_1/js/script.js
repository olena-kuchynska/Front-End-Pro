//ошибки
var a = ("str" || 5); //"2320 "
var b = ("str" || 5) > 0;// "123"
var c = (10 && true);
var d = ("str" || 5) > 0 || (10 && true);
var f = NaN > 0;
console.log(a,b,c,d,f );


 