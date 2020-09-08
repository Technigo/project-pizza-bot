const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

// Iteration 1
console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);
console.log(pizzaPrice);

// Iteration 2

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

// Iteration 3 

const orderName = prompt('Enter the name of the pizza you want to order today.');

if (orderName === vegetarian) {
    const orderQuantity = prompt(`How many of ${orderName} Pizzas do you want?`);

}else if (orderName === hawaiian) {
    const orderQuantity = prompt(`How many of ${orderName} Pizzas do you want?`);

}else if (orderName === pepperoni) {
    const orderQuantity = prompt(`How many of ${orderName} Pizzas do you want?`);

} else {
    alert('Select a pizza from the menu!');
}




//console.log(orderName());

// const orderName = prompt('Enter the name of the pizza you want to order today.');

//const orderQuantity = prompt(`How many of ${orderName} Pizzas do you want?`);

// Iteration 4

const orderTotal = orderQuantity * pizzaPrice;

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr.`);

// Iteration 5




