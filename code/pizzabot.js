//1) Defenition of variables 

const vegetarian = "Vegetarian"
const hawaiian = "Hawaiian"
const pepperoni = "Pepperoni"

const pizzaPrice = 80

//Put your Javscript code here:

// Iteration 1

//Console log

console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);
console.log(pizzaPrice);

// Iteration 2

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);
const orderName = prompt('Enter the name of the pizza you want to order today.');

const validateOrderName = (orderName) => {
    if (orderName.toLowerCase() === vegetarian.toLowerCase()) {
        orderDetails(orderName);
        return true;

    } else if (orderName.toLowerCase() === hawaiian.toLowerCase()) {
        orderDetails(orderName);
        return true;
    
    } else if (orderName.toLowerCase() === pepperoni.toLowerCase()) {
        orderDetails(orderName);
        return true;
    
    } else {
        alert('Select a pizza from the menu!');
        return false;
    }
};

const orderDetails = (pizzaName) => {
    const orderQuantity = prompt(`How many of ${pizzaName} Pizzas do you want?`);
    const orderTotal = orderQuantity * pizzaPrice;
    alert(`Great, I'll get started on your ${pizzaName} right away, it will cost ${orderTotal} kr.`);
}

if (validateOrderName === true) {
    calculateTotalCost(orderQuantity, pizzaPrice);
    alert(`Great, I'll get started on your ${pizzaName} right away, it will cost ${orderTotal} kr. The pizzas will take ${orderTime}`);
}

    const orderQuantity = prompt(`How many of ${pizzaName} Pizzas do you want?`);

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
    const orderTotal = orderQuantity * pizzaPrize;
    return orderTotal;
}



// Iteration 3 
const orderDetails = (pizzaName) => {
    const orderQuantity = prompt(`How many of ${pizzaName} Pizzas do you want?`);
    
    alert(`Great, I'll get started on your ${pizzaName} right away, it will cost ${orderTotal} kr. The pizzas will take ${orderTime}`);
}

// Iteration 3 








    if (orderQuantity <= 2) {
        orderTime === 10;
    } else if (orderQuantity < 6 || orderQuantity > 2); 
