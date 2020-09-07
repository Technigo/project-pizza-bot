const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80


console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);

//Put your Javscript code here:


alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

const orderName = prompt("Enter the name of the pizza you want to order today.");

let orderQuantity ;

/*let validateOrderName = (orderName) => {
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
        return true;
    }    else {
        return false;
    }

};*/

const validateOrderName = (pizzaName) => {
    if ((pizzaName === hawaiian) || (pizzaName === pepperoni ) || (pizzaName === vegetarian)) {
    orderQuantity = prompt(`How many of ${orderName} do you want?`);
}   else {
    alert("Select a pizza from the menu"); 
    
}

}

validateOrderName(orderName);


const calculateTotalCost = (num1, num2) => {
    return num1 * num2;
}

const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);



const calculateCookingTime = (quantity) => {

    if (quantity <= 2) {
        return 10;
    } else if (quantity > 2 && quantity < 6) {
        return 15;
    } else {
        return 20;
    };
}

let cookingTime = calculateCookingTime(orderQuantity); 

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal}kr. The pizza(s) will take ${cookingTime} minutes.`);

/*

if (orderName === vegetarian ) {
    orderQuantity = prompt(`How many of ${orderName} do you want?`);

} else if (orderName === hawaiian) {
    orderQuantity = prompt(`How many of ${orderName} do you want?`);

} else if (orderName === pepperoni) {
    orderQuantity = prompt(`How many of ${orderName} do you want?`);
} else {
    alert("Select a pizza from the menu"); 
    orderName = prompt("Enter the name of the pizza you want to order today.");
};

let cookingTime; 

if (orderQuantity <= 2) {
    cookingTime = 10;
} else if (orderQuantity > 2 && orderQuantity < 6) {
    cookingTime = 15;
} else {
    cookingTime = 20;
};

const orderTotal = orderQuantity * pizzaPrice;
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal}kr. The pizza(s) will take ${cookingTime} minutes.`);

*/