const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

//test
//console.log(`Test if connection HTML-JS works: ${vegetarian}, ${hawaiian} and ${pepperoni}`);

alert(`Welcome, customer! Happy to serve your pizza. On our menu we have: ${vegetarian}, ${hawaiian} and ${pepperoni}`);

// const orderName = prompt(`Enter the name of the pizza you want to order today:`);
const orderName = (pizza) => {
    pizza = prompt(`Enter the name of the pizza you want to order today:`);
    return pizza;
};
orderName();


//Function that tests whether the user input matches the pizza name
//pass orderName() function as a parameter?
const validateOrderName = (orderName()) => {
    if (orderName().toLowerCase() === vegetarian.toLowerCase() ||
    orderName().toLowerCase() === hawaiian.toLowerCase() ||
    orderName().toLowerCase() === pepperoni.toLowerCase ()) {
        return true;
    }
    else {
        return false;
    }
};

let orderQuantity;
// var orderTotal;
const calculateOrderTotal = (n1, n2) => {
    result = n1 * n2;
    return result
};

if (validateOrderName(orderName())) {
    orderQuantity = prompt(`How many of ${orderName()}s do you want?`);
    alert(`Great, I'll get started on your ${orderName()}s right away, it will cost ${calculateOrderTotal(orderQuantity, pizzaPrice)} kr.`);
}
else {
    alert(`Select a pizza from the menu.`);
    // return orderName;
}

let cookingTime;
if (orderQuantity <= 2) {
    cookingTime = 10;
}
else if (orderQuantity >= 3 && orderQuantity < 6) {
    cookingTime = 15;
}
else 
cookingTime = 20;


document.getElementById("orderSummary").innerHTML = `<h2>Thank you for your order!</h2> The ${orderName()}s are being
prepared as you read this. The total cost is ${orderTotal} kr. The order will take ${cookingTime} minutes.`;

