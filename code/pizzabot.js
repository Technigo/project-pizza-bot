console.log('Is this working?');

const x = "Vegetarian Pizza"
console.log(x);

const y = "Hawaiian Pizza"
console.log(y);

const z = "Pepperoni Pizza"
console.log(z);

const pizzaPrice = 80;
console.log(pizzaPrice);

//Put your Javscript code here:


// second iteration
alert(`Hey! Happy to serve your pizza. On our menu we have ${x}, ${y} and ${z}.`)


// third iteration

const orderName = prompt ('Enter the name of the pizza you want to order today.');
const orderQuantity = prompt ("How many " + orderName + " pizzas do you want?");  

// fourth iteration

const orderTotal = orderQuantity * pizzaPrice;
alert("Great, I'll get started on your " + orderName + " pizza(s) right away, it will cost " + orderTotal +" kr.");

// fifth iteration

/* When the user enters the `orderName` prompt,
add an if-statement to check if the input text matches
any of the pizza name variables (`vegetarian`, `hawaiian`, 
pepperoni`). If yes - show the next prompt,
if no - show an alert that says `Select a pizza from the menu` 
or something similar.

### **Show cooking times**

Before you print the final `Great, I'll get started on your X right away, it will cost Y kr` message to the user, calculate the cooking time based on these rules and add it to the message:

- 1-2 pizzas: `The pizzas will take 10 minutes.`
- 3-5 pizzas: `The pizzas will take 15 minutes.`
- 6+ pizzas: `The pizzas will take 20 minutes.`

*/


const checkOrderName = () => {

}

if (orderName.toLowerCase() === vegetarian || orderName.toLowerCase() === hawaiian || orderName.toLowerCase() === pepperoni) {
    return true;
} else {
   
}