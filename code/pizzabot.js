const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

let pizzaPrice = 80;

//Put your Javscript code here:

//greeting
alert(`Welcome, customer! Happy to serve your pizza. On our menu we have: ${vegetarian}, ${hawaiian} and ${pepperoni}`);


//user input saved in the variable orderName
//write prompt in a function and then return orderName as a variable
// let orderName = prompt(`Enter the name of the pizza you want to order today:`);
const orderName = () => {
    //name of a pizza is saved in a pizzaName variable
    const pizzaName = prompt(`Enter the name of the pizza you want to order today:`);
    //the function returns the value of the variable
    return pizzaName;
};
//value of the function is assigned to a new variable
let pizzaOrdered = orderName();


//below: pizzaOrdered instead of orderName


//function testing whether the user input matches the pizza name
const validateOrderName = (pizzaOrdered) => {
    if (pizzaOrdered.toLowerCase() === vegetarian.toLowerCase() ||
    pizzaOrdered.toLowerCase() === hawaiian.toLowerCase() ||
    pizzaOrdered.toLowerCase() === pepperoni.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
};

//validation of orderName stored in a variable
let isPizzaOnMenu = validateOrderName(pizzaOrdered);
let orderQuantity;


//function calculating and returning total cost
const calculateTotalCost = (orderQuantity, pizzaPrice) => {
    totalCost = orderQuantity * pizzaPrice;
    return totalCost;
};

//FIX: prevent the user to go forward if the pizza name is not valid
//https://stackoverflow.com/c/technigo/questions/1447/1475#1475
if (isPizzaOnMenu) {
    orderQuantity = prompt(`How many of ${pizzaOrdered}s do you want?`);
    alert(`Great, I'll get started on your ${pizzaOrdered}s right away, it will cost ${calculateTotalCost(orderQuantity, pizzaPrice)} kr.`);
} 
else {
    alert(`Select a pizza from the menu.`);
}

//function that calculates the cooking time
const calculateCookingTime = () => {
    if (orderQuantity <= 2) {
      return 10;
    } else if (orderQuantity >= 6) {
      return 20;
    } else {
      return 15;
    }
};

//final message displayed in DOM
document.getElementById("orderSummary").innerHTML = `<h2>Thank you for your order!</h2> The ${pizzaOrdered}s are being
prepared as you read this. The total cost is ${calculateTotalCost(orderQuantity, pizzaPrice)} kr. The order will take ${calculateCookingTime()} minutes.`;

