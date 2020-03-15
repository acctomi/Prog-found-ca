// QUESTION: 1.
Declare and initialise a variable with a string value.

var vegetable = "carrot";

// QUESTION: 2.
Create an object variable called person and give it two properties (a key and a value) of your choice

var person = {
  name: "Inge" ,
  age: 27
};

// QUESTION: 3.
Create a variable called outOfStock and assign it a boolean value.
Create an if else statement that checks the value of outOfStock.
If it is true, console log "Out of stock". Otherwise log "In stock".

var outOfStock = true;
if (outOfStock === true) {
  console.log ("Out of stock");
}
else {
  console.log("In stock");
}

// QUESTION: 4.
Create an array of five numbers.
Loop through the array and console log each value.

var numbers = [5, 4, 3, 2, 1];
for(var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// QUESTION: 5.
Create a for loop that counts from 15 to 25.
Console log the value of the counter variable inside the loop.

for(var i = 15; i < 25; i++) {
  console.log(i);
}

// QUESTION: 6.
Using the same loop from the above question,
only log the value of the counter variable if it is equal to 20.

for(var i = 15; i < 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}

// QUESTION: 7.
Create an array of two objects. Each object must have the same three properties (with different values):
one property with a string value
one property with a number value
one property with a boolean value
Loop through the array and console log the number value and the boolean value.

var array = [
  {stringValue: "First string", numberValue: 1, booleanValue: true},
  {stringValue: "Second string", numberValue: 2, booleanValue: false}
];
for(var i = 0; i < array.length; i++) {
  console.log(array[i].numberValue);
  console.log(array[i].booleanValue);
}

// QUESTION: 8.
Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
Inside the function, log the string "I don't like " together with the argument.
Call the function and pass in a value of your choice.

function whatIDontLike(bugs) {
  console.log("I don't like " + bugs);
}
whatIDontLike("spiders");

// QUESTION: 9.
Create a function that accepts two arguments.
Inside the function, subtract the second argument from the first and console log the result.

function subtract(five, two) {
  var sum = two - five;
  console.log(sum);
}
subtract(5, 2);

// QUESTION: 10.
Create an empty array.
Create a function that accepts one argument.
Inside the function, add the argument to the array.
Call the function and pass in a value of any type.

var empty = [];
function myName(name) {
    return empty.push(name);
}
myName("Mina");
console.log(empty);
