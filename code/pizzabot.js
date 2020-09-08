const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

//Make variable easier - if we can 

// const pizzaPrice = 80


// GREETING

alert(`Hey! Happy to serve your pizza. On our menu we have ${hawaiian}, ${vegetarian} and ${pepperoni}`);


// NAME OF PIZZA + IF NOT TRUE THEN ALERT TO USER ASKING THEM TO ORDER SOMETHING OFF THE MENU
let orderName = prompt('Enter the name of the pizza you want to order today.');

const validateOrderName = (orderName) => {
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni){
        return true; 
    }
    else { 
        alert("Sorry you have to order something off the menu");
    return false;
    }
};

validateOrderName(orderName);



// HOW MANY DO YOU WANT TO ORDER? + CALCULATION
let orderQuantity = prompt( `How many of ${orderName} do you want?`);
const pizzaPrice = 80;

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
    const orderTotal = (orderQuantity * pizzaPrice);
};

calculateTotalCost (orderQuantity, pizzaPrice);



// FINALISE ORDER; SHOW PIZZA TYPE, ORDER TOTAL AND COOKING TIME
const calculateCookingTime = () => {
    if (orderQuantity <= 2) {
        alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizza will take 10 min.`);
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizzas will take 15 min.`);
    } else {
        alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizzas will take 20 min.`);
    }
};

calculateCookingTime(orderQuantity);


// if (pizzaIsOnMenu === true) {
//     let orderQuantity = prompt( `How many of ${orderName} do you want?`);
//     const orderTotal = (orderQuantity * pizzaPrice);

//     if (orderQuantity <= 2) {
//         alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizza will take 10 min.`);
//     } else if (orderQuantity >= 3 && orderQuantity <= 5) {
//         alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizzas will take 15 min.`);
//     } else {
//         alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizzas will take 20 min.`);
//     }
// }
 




