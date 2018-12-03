function triangleTracker() {

    var number1 = parseFloat(document.getElementById("firstnumber").value);
    var number2 = parseFloat(document.getElementById("secondnumber").value);
    var number3 = parseFloat(document.getElementById("thirdnumber").value)
if ( number1==number2 && number2==number3 && number1 == number3 ){
  alert('Equilateral-All sides are equal.');
} else if (number1 == number2 || number1 == number3 ||number2 ==number3){
 alert(' Isosceles-Exactly 2 sides are equal.');
} else if ((number1 + number2) <= number3 || (number1 + number3) <= number2 ||(number2+number3<=number1 )){
 alert('Scalene-No sides are equal.');
} else {
  alert('Not a triangel-A triangel has three side of which two are equal.');
}
function triangleTracker() {
  return number3;
}
    
}
 
