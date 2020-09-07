const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
console.log(vegetarian,hawaiian,pepperoni);
console.log(pizzaPrice);

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);
const orderName = prompt('Enter the name of the pizza you want to order today.');
console.log(orderName);
const orderQuantity = prompt(`How many of ${orderName} do you want?`);
const orderTotal = orderQuantity * pizzaPrice;
console.log(orderTotal);
let cookingTime = 0;
const deliveryTime = (orderQuantity) => {
    if (orderQuantity <= 2 ) {
       cookingTime = 10;
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        cookingTime = 15;
    } else {
        cookingTime = 20;
    }
}
deliveryTime(orderQuantity);
if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and the pizzas will take ${cookingTime} minutes`);
} else {
    alert(`Sorry, we don't have that pizza. Choose a pizza from the menu`);
};