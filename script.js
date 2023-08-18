// FOREACH
const number = [45, 4, 9, 16, 25];
let text = "";
number.forEach(myFunctions);
function myFunctions(text, index, array) {
  console.log(text, index, array); //inspect
  document.getElementById(
    "demo1"
  ).innerHTML = `total index : ${index},array: ${array}`;
}
// result inspect
// 45 0 Array(5)
// 4  1 Array(5)
// 9  2 Array(5)
// 16 3 Array(5)
// 25 4 Array(5)

// result innerHtml
// total index : 4 array: 45,4,9,16,25

// forEach - print index
const numbers = [45, 4, 9, 16, 25];
let textt = "";
numbers.forEach(myFunctiona);
function myFunctiona(index) {
  console.log(index);
}
// result
// 45
// 4
// 9
// 16
// 25

// forEach - Array
const numberss = [45, 4, 9, 16, 25];
let texttt = "";
numberss.forEach(myFunctional);
function myFunctional(array) {
  console.log(array);
}
// result
// 45
// 4
// 9
// 16
// 25

// forEach using ID
let texts = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("demo4").innerHTML = texts;

function myFunction(item, index) {
  texts += index + ": " + item + "<br>";
}
// result
// 0: apple
// 1: orange
// 2: cherry

// MAP
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunctionali);
function myFunctionali(value) {
  return value * 2;
}
console.log(numbers2);
// result
// 90
// 8
// 18
// 32
// 50

// MAP USING INDEX / Array
const numbers3 = [45, 4, 9, 16, 25];
const numbers4 = numbers3.map(myFunctionalis);
function myFunctionalis(index) {
  return index * 3;
}
console.log(numbers4);

// Filter - return > 10
const numeric = [45, 10, 100, 25, 90];
const over10 = numeric.filter(myFunctionalitation);
function myFunctionalitation(value, index, array) {
  return value > 10;
}
document.getElementById("demo7").innerText = over10;
console.log(over10);
// result - innerhtml
// 45, 100, 25, 90;

// result - inspect
// 0: 45
// 1: 100
// 2: 25
// 3: 90
// length: 4

// EVERY - Check value = true / false
const number1 = [22, 24, 29, 21, 30];
let allOver20 = number1.every(function1);
function function1(value, index, array) {
  return value > 20;
}
console.log(allOver20);
document.getElementById("demo8").innerHTML = allOver20;
// result inspect
// true

// Some
const numberi2 = [28, 17, 25, 40];
let someOver18 = numberi2.some(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18);
document.getElementById("demo9").innerHTML = someOver18;
// result
// true

// IndexOf - searches an array for the value of the element and returns at what position?
var names = ["John", "Paul", "George"];
let name = names.indexOf("George");
console.log(name);
document.getElementById("demo10").innerHTML = name;
// result
/* (2) ["John", "Paul"] */

// indexOf - displays a reduced index
const fruits1 = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits1.indexOf(/mango/i);
console.log(position);
document.getElementById("demo11").innerHTML = position;
// result
// -1

// Find()
const arr1 = [9, 16, 6, 25, 29];
let first = arr1.find(myFunctionsssi);
function myFunctionsssi(value, index, array) {
  return value > 18;
}
console.log(first);
document.getElementById("demo12").innerHTML = first;
// result
// 25
