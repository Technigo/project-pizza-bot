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

/*## **Iteration 3 - Ask the customer**

Use `prompt()` to ask the user which pizza they want. The message in the prompt should read 
`Enter the name of the pizza you want to order today.`. Their response should be 
stored in a new variable called `orderName`.
Next, ask the user (with another `prompt()`) how many they'd like: 
`How many of X do you want?`. X should be replaced with the `orderName` 
variable so that if I ordered "Hawaiian Pizza" it would read "How many Hawaiian Pizzas do you want?".
As before, the response from this prompt should be stored in a variable, this time called `orderQuantity` */

const orderName = prompt ('Enter the name of the pizza you want to order today.');
const orderQuantity = prompt ("How many " + orderName + " pizzas do you want?");  

// fourth iteration

