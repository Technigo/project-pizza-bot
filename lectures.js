// # Variables and Data types
let age = 25

// with let you can reassign variables, and with const you can't
let favouriteFruit = "Apple"
favouriteFruit = "Orange"
console.log(favouriteFruit)
// You need to declare variables only once

// ## Data types:

// String
let name = "Apple"

// Boolean 
let isSour = false

// Float
let weight = 0.3

// Integer
let numberOfSeeds = 5


// Replace a letter in a string:
let message = "Hello world!"
console.log(message.replace('Hello', 'Goodbye'))
console.log(message.replace('H', 'J'))
// The above does not work on integers, floats or booleans

// ===== FUNCTIONS ======
// Declare, invoke, and X functions.
// function greeting() {
    // Here's the function. Don't use this syntax.
// }

// This is the syntax we should use – the arrow function way. ES6. 
const greeting = () => {
    // Inside of here goes the rules
}

// Call function: Function name and round brackets 
// greeting()

// Arguments

// This is the syntax we should use – the arrow function way. ES6. 
// Two different names of writing with variables
const personalGreeting = (name) => {
    // This is a better way to write it
    console.log(`Hello ${name} welcome to Technigo!`)
}

const personalGreetings = (name, times) => {
    for(let i = 0; i < times; i++) {
        console.log(`Hello ${name}, welcome to technigo. Round ${times}.`)
    }
}

const user = "Axel"
const howManyTimes = 4

personalGreetings(user, howManyTimes)



// Call function: Function name and round brackets 
personalGreeting("Axel")

// ====== Conditional statements w. Damien
// If's
let price = 100

if (price > 300){
    console.log("Free shipping!")
    } else {
    console.log("Not free shipping")
}

if (price > 300){
    console.log("Free shipping!")
    } else if (price = 300) {
        console.log("Not free shipping")
    } else { 
        console.log("Slasken")
}

// === checks the type. If the five is a 
// == doesn't check the type (it sees the string as a number)
// Triple === is the new way to do things. Always use triple equals.

//       && and 
//       || or
//       !()

// ## Tutorial: Javascript arrow functions
// https://www.youtube.com/watch?v=h33Srr5J9nY&ab_channel=WebDevSimplified

// Old style functions, which we'll convert to arrow functions
function sum(a,b) {
    return a + b
}

function isPositive(number) {
    return number >= 0
}

function randomNumber() {
    return Math.random
}

document.addEventListener('click', function() {
    console.log('Click')
})

// With an arrow function, the function word is assumed.
// Everything after the arrow is going to be returned from the function
let sum2 = (a,b) => a + b

function isPositive(number) {
    return number >= 0
}

let isPositive2 = (number) => {
    return number >= 0
}
let isPositive2 = (number) => number >= 0

// If we only have one argument to pass in, then we can skip the parentheses
let isPositive2 = number => number >= 0

let randomNumber2 = () => Math.random

// Where arrow functions shine are when you create anonymous functions.
document.addEventListener('click', () => console.log('Click'))

// ----- CLASS BASICS -----
class Person {
    constructor(name) {
        this.name = name
    }

printNameArrow() {
    setTimeout(() => {
        console.log('Arrow function: ' + this.name)
    },100)
    }
}