/*First alert/welcome message. 
alert(`Hey, happy to serve you pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

// Let customer decide which pizza they want. 
let orderName = prompt('Enter the name of the pizza you want to order today.');

// Function for validating that the pizza is on the menu.
const validateOrderName = (orderName) => {
    if (orderName === vegetarian || orderName === hawaiian || orderName == pepperoni) {
        return true
    } else {
        alert('You must select a pizza from the menu!');
    }
}
validateOrderName(orderName); // Calling the validation function

// Asking customer how many pizzas they want. 
let orderQuantity = prompt(`How many of ${orderName} do you want?`);
let orderTotal = orderQuantity * pizzaPrice;


const calculateTotalCost = (orderQuantity, pizzaPrice) => { //Function for calculating order total/total cost.
    return orderTotal;
}
calculateTotalCost(orderQuantity, pizzaPrice); //Result of total cost. 


let message = ''; // Calculating cooking time based on number of pizzas. 
const calculateCookingTime = (orderQuantity) => {
    if (orderQuantity == 1 || orderQuantity == 2 ) {
        message = 'The pizzas will take 10 minutes.'; 
        
    } else if(orderQuantity >= 3 && orderQuantity <= 5) { 
        message = 'The pizzas will take 15 minutes.'; 
    } else {
        message = 'The pizzas will take 20 minutes.'; 
    }
}

calculateCookingTime(orderQuantity); //Calling function.

// End message.
document.getElementById("message").innerHTML=`Great. I'll get started on your ${orderName} right away, it will cost ${orderTotal}kr. ${message}`;

*/

const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80;

let select1 = document.getElementById("hawaii")
let select2 = document.getElementById("pepperoni")
let select3 = document.getElementById("vegetarian")

let value1 = select1.options[select1.selectedIndex].value;
let value2 = select2.options[select2.selectedIndex].value;
let value3 = select3.options[select3.selectedIndex].value;


const calculateOrder = () => {
const orderTotal = value1 * pizzaPrice + value2 * pizzaPrice + value3 * pizzaPrice;
document.getElementById("message").innerHTML = orderTotal;
}
document.getElementById("button").onclick=calculateOrder;


