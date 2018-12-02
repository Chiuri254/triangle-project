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
// var form = document.querySelector('form');
// var fname = document.getElementById('fname');
// var lname = document.getElementById('lname');
// var submit = document.getElementById('submit');
// var para = document.querySelector('p');

// form.onsubmit = function(e) {
//   if (fname.value === '' || lname.value === '') {
//     e.preventDefault();
//     para.textContent = 'You need to fill in both names!';
//   }
// }