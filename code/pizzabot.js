//1) Defenition of variables 

const vegetarian = "Vegetarian"
const hawaiian = "Hawaiian"
const pepperoni = "Pepperoni"

const pizzaPrice = 80

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

const calculateTotalCost = (pizzaName) => {
    let orderTotal = orderQuantity * pizzaPrice;
    return orderTotal;
}



    } else if (orderQuantity < 6 || orderQuantity > 2) {
        orderTime = 15;
        return orderTime;

    } else {
        orderTime = 20;
        return orderTime;
    }
}

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
const isValidOrder = validateOrderName(orderName);
const orderQuantity = prompt(`How many of ${orderName} Pizzas do you want?`);

if (isValidOrder === true) {
    const isTotalCost = calculateTotalCost(orderQuantity, pizzaPrice);
    console.log(isTotalCost);
    const orderTime = calculateCookingTime(orderQuantity);
    console.log(isorderTime);
    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${isTotalCost} kr. The pizzas will take ${orderTime}`);
}
