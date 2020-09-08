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

const orderTotal = orderQuantity * pizzaPrice;

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr.`);

// Iteration 5




