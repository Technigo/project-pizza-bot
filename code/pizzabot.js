const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

//greeting
alert(`Welcome, customer! Happy to serve your pizza. On our menu we have: ${vegetarian}, ${hawaiian} and ${pepperoni}`);

//ALL THE FUNCTIONS
//function that asks user for input + returns it
const orderName = () => {
    //name of a pizza is saved in a pizzaName variable
    const pizzaName = prompt(`Enter the name of the pizza you want to order today:`);
    //the function returns the value of the variable
    return pizzaName;
};

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

//function that calculates the cooking time
const calculateCookingTime = (orderQuantity) => {
    if (orderQuantity <= 2) {
      return 10;
    } else if (orderQuantity >= 6) {
      return 20;
    } else {
      return 15;
    }
};

//function calculating and returning total cost
const calculateTotalCost = (orderQuantity, pizzaPrice) => {
    return orderQuantity * pizzaPrice;
};

let isPizzaOnMenu = false;
let pizzaOrdered;

while (!isPizzaOnMenu)
{
    //call a function orderName and save a returned value to the variable pizzaOrdered
    pizzaOrdered = orderName();
    //as long as this is false, the while loop will continue
    isPizzaOnMenu = validateOrderName(pizzaOrdered);

    if (isPizzaOnMenu == false)
        alert(`Pizza you chose is not available. Please select a pizza from the menu.`);
}

const orderQuantity = prompt(`How many of ${pizzaOrdered}s do you want?`);
alert(`Great, I'll get started on your ${pizzaOrdered}s right away, it will cost ${calculateTotalCost(orderQuantity, pizzaPrice)} kr.`);


//final message displayed in DOM
document.getElementById("orderSummary").innerHTML = `<h2>Thank you for your order!</h2> The ${pizzaOrdered}s are being
prepared as you read this. The total cost is ${calculateTotalCost(orderQuantity, pizzaPrice)} kr. The order will take ${calculateCookingTime(orderQuantity)} minutes.`;

