

/*
const X = "Vegetarian Pizza"
const Y = "Hawaiian Pizza"
const Z = "Pepperoni Pizza"

const pizzaPrice = 80


//Put your Javscript code here:

console.log(X, Y, Z, pizzaPrice)

/*
## **Iteration 2 - Greet the customer**

In code/pizzabot.js, you can start coding the bot interaction. The first step is to greet a new customer.
Use `alert()` to print the message `"Hey! Happy to serve your pizza. On our menu we have X, Y and Z"`.
Use the variables `vegetarian`, `hawaiian` and `pepperoni` to replace `X`, `Y` and `Z` in the message so that it reads
`"Hey! Happy to serve your pizza. On our menu we have Vegetarian Pizza, Hawaiian Pizza and Pepperoni Pizza"`

*/
/*

alert(`Hey! Happy to serve your pizza. On our menu we have ${X}, ${Y} and ${Z}`)

/*
## **Iteration 3 - Ask the customer**

Use `prompt()` to ask the user which pizza they want. The message in the prompt should read
`Enter the name of the pizza you want to order today.`. Their response should be stored in a new variable called `orderName`.

Next, ask the user (with another `prompt()`) how many they'd like: `How many of X do you want?`.
X should be replaced with the `orderName` variable so that it if I ordered "Hawaiian Pizza"
it would read "How many of Hawaiian Pizza do you want?". 
As before, the response from this prompt should be stored in a variable, this time called `orderQuantity`

*/

/*

const orderName = prompt(`Enter the name of the pizza you want to order today`)

const orderQuantity = prompt(`"How many of ${orderName} do you want?`)

/*

## **Iteration 4 - Finalize the order**

Calculate the total price of the order using the `orderQuantity` and `pizzaPrice` variables and store it in a variable called `orderTotal`.
Use an alert to tell the user: `Great, I'll get started on your X right away, it will cost Y kr`
(where X should be replaced by the `orderName` variable and Y should be replaced by the `orderTotal` variable).
For example, if I ordered 3 Hawaiian pizzas, the message should read:
"Great, I'll get started on your Hawaiian Pizza right away, it will cost 240 kr"

*/
/*

const orderTotal = (pizzaPrice * orderQuantity)
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`)


/*
## **Iteration 5 - Add conditionals**

We want you to add conditionals statements (if-statements) to your program to improve it.

### **Checking that the Pizza is on the menu**
When the user enters the `orderName` prompt, add an if-statement to check if the input text matches any of the pizza name variables
(`vegetarian`, `hawaiian`, `pepperoni`).
If yes - show the next promt,
if no - show an alert that says `Select a pizza from the menu` or something similar.

*/

/*
### **Show cooking times**

Before you print the final `Great, I'll get started on your X right away,
it will cost Y kr` message to the user, calculate the cooking time based on these rules and add it to the message:

- 1-2 pizzas: `The pizzas will take 10 minutes.`
- 3-5 pizzas: `The pizzas will take 15 minutes.`
- 6+ pizzas: `The pizzas will take 20 minutes.`

For example, if I ordered 3 Hawaiian pizzas, the message should now read:
"Great, I'll get started on your Hawaiian Pizza right away, it will cost 240 kr. The pizzas will take 15 minutes."

*/

/*
const X = "Vegetarian Pizza"
const Y = "Hawaiian Pizza"
const Z = "Pepperoni Pizza"
const pizzaPrice = 80

/*
alert(`Hey! Happy to serve your pizza. On our menu we have ${X}, ${Y} and ${Z}`)

let orderName = prompt(`Enter the name of the pizza you want to order today`)

if (orderName == X || orderName == Y || orderName == Z) {
  const orderQuantity = prompt(`"How many of ${orderName} do you want?`)
  const orderTotal = (pizzaPrice * orderQuantity)
  if (orderQuantity < 3) {
    alert(`The pizzas will take 10 minutes. Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr.`)
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    alert(`The pizzas will take 15 minutes. Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr.`)
  } else {
    alert(`The pizzas will take 20 minutes. Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr.`)
  }
} else {
  alert(`Select a pizza from the menu`)
}



/*

## **Iteration 6 - Add functions**

Clean up your code by moving some code into functions and then calling that function when needed.

The functions should all reflect the tasks we've completed so far. So, the functions should be:

1. `checkOrderName()` which should take the `orderName` variable as an argument and return `true` or `false` if the pizza is on the menu or not.
2. `totalCost()` which takes `orderQuantity` as an argument and returns the total cost for the order.
3. `cookingTime()` which takes `orderQuantity` and returns the number of minutes it will take to finish the order.


*/


const X = 'Vegetarian Pizza';
const Y = 'Hawaiian Pizza';
const Z = 'Pepperoni Pizza';
const pizzaPrice = 80;


// function for check if order exist on menu
const checkOrderName = () => {
  if (orderName == X || orderName == Y || orderName == Z) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

// function for total cost of order
const totalCost = orderQuantity => {
  const orderTotal = (pizzaPrice * orderQuantity);
  console.log(orderTotal);
  return orderTotal;
};

//function cooking time
const cookingTime = orderQuantity => {
  if (orderQuantity < 3) {
    console.log(10);
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    console.log(15);
    return 15;
  } else {
    console.log(20);
    return 20;
  }
};

//function for order summary
const orderDetails = (onMenu, orderName) => {
  if (onMenu == true) {
    const orderQuantity = prompt(`"How many of ${orderName} do you want?`);
    const orderCost = totalCost(orderQuantity);
    const orderTime = cookingTime(orderQuantity);
    alert(`The pizza will take ${orderTime} minutes. Great, I'll get started on your ${orderName} right away. It will cost ${orderCost} SEK!`);
  } else {
    alert(`Select a pizza from the menu`)
  }
};




// invoke/call functions

alert(`Hey! Happy to serve your pizza. On our menu we have ${X}, ${Y} and ${Z}`);

const orderName = prompt(`Enter the name of the pizza you want to order today`);

const onMenu = checkOrderName();

orderDetails(onMenu, orderName);