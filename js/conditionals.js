"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if (color === 'blue') {
        return "Blue is the color of the sky.";
    } else if (color === 'red') {
        return "Strawberries are red.";
    } else if (color === 'orange'){
        return "Oranges are orange.";
    } else if (color === 'yellow') {
        return "The sun is yellow.";
    } else if (color === 'green') {
        return "Grass is green.";
    } else if (color === 'indigo') {
        return "Indigo snakes are endangered!"
    } else if (color === 'violet') {
        return "Amethyst are violet!";
    } else if (color === 'cyan') {
        return "I don't know anything about cyan.";
    } else {
        return "I don't know that color.";
    }
}

console.log(analyzeColor('blue'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color) {
    switch (color) {
        case "blue":
            return "Blue is the color of the sky.";
            break;
        case "red":
            return "Strawberries are red.";
            break;
        case "orange":
            return "Oranges are orange.";
            break;
        case "yellow":
            return "The sun is yellow.";
            break;
        case "green":
            return "Grass is green.";
            break;
        case "indigo":
            return "Indigo snakes are endangered!";
            break;
        case "violet":
            return "Amethyst are violet!";
            break;
        case "cyan":
            return "I don't know anything about cyan.";
            break;
        default:
            return "I'm sorry I don't know that color."
            break;
    }

}

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var favColor2 = prompt("What is your favorite color?");
alert(analyzeColor(favColor2));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNum, total) {
    var luck = total; var luck1 = total - (.1 * total); var luck2 = total - (.25 * total); var luck3 = total - (.35 * total); var luck4 = total - (.5 * total);
    if (luckyNum === 0) {
        return "Your toal is: $" + total;
    } else if (luckyNum === 1) {
        return "Your total is: $" + luck1;
    } else if (luckyNum === 2) {
        return "Your total is: $" + luck2;
    } else if (luckyNum === 3) {
        return "Your total is: $" + luck3;
    } else if (luckyNum === 4) {
        return "Your total is: $" + luck4;
    } else if (luckyNum === 5) {
        return "Your trip today is free!";
    } else {
        return "Your total is: $" + total;
    }

}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var billTotal = (parseFloat(prompt("What was your total bill?")));

var final = calculateTotal(luckyNumber, billTotal)
alert('Your lucky number is:' + luckyNumber + "! Your original total was: $" + billTotal + " Your final bill total after your lucky number discount is: " + final);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var ok1 = confirm("Would you like to enter a number?");
if (ok1 === true) {
    var number =(parseFloat(prompt("Please enter a number:")));
    var oddEven = number % 2;

    if (oddEven === 0) {
        alert("Your number is even.");
    } else {
        alert("Your number is odd.");
    }
    alert("Your number pluss 100 is:" + (number + 100));
    if (number === 0) {
        alert("Your number is neither positive or negative");
    } else if (number >= 0.1) {
        alert("Your number is positive.")
    } else {
        alert("your number is negative");
    }
} else {
    alert("Ok maybe later.");
}

//this is a test for github