const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

console.log(vegetarian, hawaiian, pepperoni);

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

const orderName = prompt ("Enter the name of the pizza you want to order today.");

console.log(orderName);

const orderQuantity = prompt (`How many of ${orderName} do you want?`);

console.log(orderQuantity);

const orderTotal = (pizzaPrice * orderQuantity);

console.log(orderTotal)

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`)