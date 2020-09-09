// Variables
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaList = ["Vegetarian Pizza","Hawaiian Pizza","Pepperoni Pizza"]

const pizzaPrice = 80


// Functions

// 1. `validateOrderName()` which should take the `orderName` variable as an argument and return `true` or `false` if the pizza is on the menu or not.
// 2. `calculateTotalCost()` which takes `orderQuantity` and `pizzaPrice` as arguments and returns the total cost for the order.
// 3. `calculateCookingTime()` which takes `orderQuantity` and returns the number of minutes it will take to finish the order.

const validateOrderName = (orderName) => {
  if (pizzaList.includes(orderName)) {
    return true;  
  } else {
    return false; 
  }
};

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
  const totalCost = (orderQuantity * pizzaPrice);
  return totalCost;
};

const calculateCookingTime = (orderQuantity) => {

  if (orderQuantity >= 1 && orderQuantity <= 2 ) {
    return "The pizzas will take 10 minutes";

  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return "The pizzas will take 15 minutes";
    
  } else { 
    return "The pizzas will take 20 minutes.";
  }

};


// ===== ABOVE HERE, ARE FUNCTION DEFINITIONS AND VARIABLES =======


alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)

const orderName = prompt(`Enter the name of the pizza you want to order today`)
// Om användaren skriver något annat än "Hawaiian pizza, Pepperoni pizza, eller Vegetarian pizza, så ska datorn säga "Vi har tyvärr inte den pizzan".

// ===== EXAMPLE FROM THE LABS =======

// const orderCheck = (orderName) => {
 
//     const orderQuantity = prompt(`How many of ${orderName} do you want?`);
//     console.log(`Number of pizzas: ` + orderQuantity);
    
    
//     const orderTotal = pizzaPrice * orderQuantity
//     console.log(`Totala priset blir ` + orderTotal)

//     alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} Swedish Kronor.`)

//   } else {
//     console.log("Sorry we don't have that pizza!");  
//   }
// };



// orderCheck(orderName);


 
// ===== END OF EXAMPLE FROM THE LABS =======


// Before you print the final `Great, I'll get started on your X right away, it will cost Y kr` message to the user, calculate the cooking time based on these rules and add it to the message:

// - 1-2 pizzas: `The pizzas will take 10 minutes.`
// - 3-5 pizzas: `The pizzas will take 15 minutes.`
// - 6+ pizzas: `The pizzas will take 20 minutes.`

// For example, if I ordered 3 Hawaiian pizzas, the message should now read: "Great, I'll get started on your Hawaiian Pizza(s) right away, it will cost 240 kr. The pizza(s) will take 15 minutes."


// ## **Iteration 4 - Finalize the order**

// Calculate the total price of the order using the `orderQuantity` and `pizzaPrice` variables and store it in a variable called `orderTotal`. Use an alert to tell the user: `Great, I'll get started on your X right away, it will cost Y kr` (where X should be replaced by the `orderName` variable and Y should be replaced by the `orderTotal` variable).

// For example, if I ordered 3 Hawaiian pizzas, the message should read: "Great, I'll get started on your Hawaiian Pizza(s) right away, it will cost 240 kr"


// Är det här en funktion? Eller bara en variabel med andra variabler?


// ## **Iteration 5 - Add conditionals**
// We want you to add conditionals statements (if-statements) to your program to improve it.


