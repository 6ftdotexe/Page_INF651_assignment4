/* Practice Assignment 4:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create a function named helloWorld that returns the exact phrase:
// "Hello World!".

helloWorld();

function helloWorld() {
    return ("Hello World!");
}

// 2) Create a function named greeting that will accept a "name" parameter
// and return the string: "Hello, name." where "name" is replaced
// with whatever value we want to provide when calling the function.

let name = prompt("Enter your name");
greeting(name);

function greeting(name) {
    return ("Hello " + name + ".");
}

// 3) Create a function named divisibleByThree that accepts a "number" parameter
// and will return accurate boolean data depending on the value
// of the "number" parameter. Hint: Try the modulus operator.

let number = prompt("Enter a number");
divisibleByThree(number);

function divisibleByThree(number) {
    return ((number%3==0) ? true : false);
}

// 4) Create a function named averageAge that accepts 3 parameters:
// num1, num2, and num3. The function should return the average of
// all three numbers, but the parameter num3 is missing, it should
// return the average of num1 and num2. Returned results should be
// rounded to the nearest integer. Hint: Use a Math method to round.
var num1 = Number(prompt("Enter a number (num1)",NaN));
var num2 = Number(prompt("Enter a number (num2)",NaN));
var num3 = Number(prompt("Enter a number (num3)",NaN));
averageAge(num1, num2, num3);

function averageAge(num1, num2, num3) {
    var total = 0;
    var array = [];
    if(isNaN(num1)){
        array = [num2, num3];
    } else if(isNaN(num2)){
        array = [num1, num3];
    } else if(isNaN(num3)){
        array = [num1, num2];
    } else{
        array = [num1, num2, num3];
    }
   
    for(var i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    var avg = total / array.length;
    return (Math.round(avg));
}

// 5) Create a function named leetSpeak that accepts a word
// as a parameter and returns the same word except all of the letter
// e occurances (lower case only) are replaced by the number 3.
// Replace any lower case a with the number 4, too.
// Hints: You will use a loop. You will use conditionals.
// Example: leet is returned as l33t. speak is returned as sp34k

let str = prompt("Enter a word");
speakLeet(str);

function speakLeet(str) {
	var leetCode = {
		a: "4",
		e: '3'
	}
	
	var translatedStr = "";

	for (i = 0; i < str.length; i++) {
        if(str.charAt(i) == "a" || str.charAt(i) == "e"){
		    translatedStr += leetCode[str.charAt(i)];
        }
        else translatedStr += str.charAt(i);
	}

	return(translatedStr);
}

// Print code to index.html

var q1 = helloWorld();
var q2 = greeting(name);
var q3 = divisibleByThree(number);
var q4 = averageAge(num1, num2, num3);
var q5 = speakLeet(str);

const questions = [q1, q2, q3, q4, q5];
let text = ""
for (let j = 1; j < 6; j++){
    console.log (j + ". " + questions[j-1] + "\n");
    text += j + ". " + questions[j-1] + "<br>";
}
document.getElementById("text").innerHTML = text;