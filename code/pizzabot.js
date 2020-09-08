const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

console.log("Vegetarian Pizza", "Hawaiian Pizza","Pepperoni Pizza");

//Put your Javscript code here:

/*iteration 2*/ 

const X = vegetarian;
const Y = hawaiian;
const Z = pepperoni;

alert(`Hey! Happy to serve your pizza. On our menu we have ${X}, ${Y} and ${Z}`);

/*iteration 3 and 5*/ 
const orderName = prompt("Enter the name of the pizza you want to order today.");
if (orderName === "vegetarian" || orderName === "hawaiian" || orderName === "pepperoni") {
    } else {
    alert(`Select a pizza from the menu`);
};

const orderQuantity = prompt(`How many of ${orderName} do you want?`);

/*iteration 4 */

const orderTotal = orderQuantity * pizzaPrice;
alert (`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`);
if (orderQuantity <= 2) {
alert (`The pizzas will take 10 minutes`); 
} else if (orderQuantity <= 5) {
alert (`The pizzas will take 15 minutes`);
} else {
alert (`The pizzas will take 20 minutes`);
}  

