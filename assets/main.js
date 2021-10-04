/* Practice Assignment 4:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create a function named helloWorld that returns the exact phrase:
// "Hello World!".

let helloWorld = helloWorld();

function helloWorld() {
    console.log("Hello World!");

}

// 2) Create a function named greeting that will accept a "name" parameter
// and return the string: "Hello, name." where "name" is replaced
// with whatever value we want to provide when calling the function.

let greeting = greeting(name);

function greeting(name) {
    console.log("Hello " + name + ".");
}

// 3) Create a function named divisibleByThree that accepts a "number" parameter
// and will return accurate boolean data depending on the value
// of the "number" parameter. Hint: Try the modulus operator.

let divisibleByThree = divisibleByThree(number);

function divisibleByThree(number) {
    if (number % 3 == 0) {
        return true;
    }
    else {
        return false;
    }
}

// 4) Create a function named averageAge that accepts 3 parameters:
// num1, num2, and num3. The function should return the average of
// all three numbers, but the parameter num3 is missing, it should
// return the average of num1 and num2. Returned results should be
// rounded to the nearest integer. Hint: Use a Math method to round.

let avgerageAge = averageAge(num1, num2, num3);

function averageAge(num1, num2, num3) {
    
}

// 5) Create a function named leetSpeak that accepts a word
// as a parameter and returns the same word except all of the letter
// e occurances (lower case only) are replaced by the number 3.
// Replace any lower case a with the number 4, too.
// Hints: You will use a loop. You will use conditionals.
// Example: leet is returned as l33t. speak is returned as sp34k

let leetSpeek = leetSpeak(word);

function leetSpeak(word) {
    if (word.contains("e")){
        word = word.replace("e", 3);
    }
    if (word.contains("a")){
        word = word.replace("a", 4);
    }
}