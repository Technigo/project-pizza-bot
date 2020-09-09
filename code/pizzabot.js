//1) Defenition of variables 

const vegetarian = "Vegetarian"
const hawaiian = "Hawaiian"
const pepperoni = "Pepperoni"

const pizzaPrice = 80

//2) Functions

const validateOrderName = (orderName) => {
    if (orderName.toLowerCase() === vegetarian.toLowerCase()) {
        return true;

    } else if (orderName.toLowerCase() === hawaiian.toLowerCase()) {
        return true;
    
    } else if (orderName.toLowerCase() === pepperoni.toLowerCase()) {
        return true;
    
    } else {
        alert('Select a pizza from the menu!');
        return false;
    }
};

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
    let orderTotal = orderQuantity * pizzaPrice;
    return orderTotal;
}

const calculateCookingTime = () => {
    let orderTime = 0; 
    if (orderQuantity <= 2) {
        orderTime = 10;
        return orderTime;

    } else if (orderQuantity < 6) {
        orderTime = 15;
        return orderTime;

    } else {
        orderTime = 20;
        return orderTime;
    }
}

//  3) The bot

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

const orderName = prompt('Enter the name of the pizza you want to order today.');
const isValidOrder = validateOrderName(orderName);
const orderQuantity = prompt(`How many of ${orderName} Pizzas do you want?`);

if (isValidOrder === true) {
    const isTotalCost = calculateTotalCost(orderQuantity, pizzaPrice);
    console.log(isTotalCost);
    const isOrderTime = calculateCookingTime(orderQuantity);
    console.log(isOrderTime);
    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${isTotalCost} kr. The pizzas will take ${isOrderTime} minutes.`);
}
