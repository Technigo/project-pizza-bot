const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Iteration 2
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

//Iteration 3
const orderName = prompt("Enter the name of the pizza you want to order today.");
const trueFalse = validateOrderName(orderName);

//Iteration 6 Add functions
const validateOrderName = (orderName) => {
    if (
        orderName === vegetarian ||
        orderName === hawaiian ||
        orderName === pepperoni
    ) {
        console.log("true");
        return true;


    } else {

        console.log("false");
        return false;
    }
}


if (trueFalse) {
    const orderQuantity = prompt(`How many of ${orderName} do you want?`);
    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`);
} else {
    alert("Select a pizza from the menu.");
}


calculateTotalCost = (orderQuantity, pizzaPrice) => {
    const orderTotal = orderQuantity * pizzaPrice;
}

calculateCookingTime = (orderQuantity) => {
    let cookingTime;
    if (orderQuantity < 3) {
        cookingTime = 10;
    } else if (orderQuantity > 5) {
        cookingTime = 20;
    } else {
        cookingTime = 15;
    }
}