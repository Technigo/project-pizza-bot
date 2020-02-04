const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;


// Iteration 2: Greet the customer with alert()
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

// Iteration 3 - Ask the customer

/*const orderName = prompt("Enter the name of the pizza you want to order today.");

if (orderName == 'vegetarian' || orderName == 'pepperoni' || orderName == 'hawaiian') {
  const orderQuantity = prompt(`How many of ${orderName}  do you want?`);
} else {
  prompt("Enter a valid pizza from the menu")
};

//const orderQuantity = prompt(`How many of ${orderName}  do you want?`);

// Iteration 4 - Finalize the order

const orderTotal = (orderQuantity * pizzaPrice);

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal}  kr`)*/

// Iteration 5 - Add conditionals

let orderName = () => {
  prompt("Enter the name of the pizza you want to order today.");
  if (orderName == 'vegetarian' || orderName == 'pepperoni' || orderName == 'hawaiian') {
    let orderQuantity = prompt(`How many of ${orderName}  do you want?`);
    let orderTotal = (orderQuantity * pizzaPrice);
    if (orderQuantity <= 2) {
      alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal}  kr.The pizzas will take 10 minutes.`);
    } else if (orderQuantity >= 3 && orderTotal <= 5) {
      alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal}  kr.The pizzas will take 15 minutes.`);
    } else {
      alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal}  kr.The pizzas will take 20 minutes.`);
    };
  } else {
    alert("Select a pizza from the menu");
  };
};

/*For loop
let pizza = ['vegetarian', 'hawaiian', 'pepperoni'];

for (let i = [0]; i < [2]; i++) {
  let orderName = () => {
    prompt("Enter the name of the pizza you want to order today.");
    if (orderName == 'vegetarian' || orderName == 'pepperoni' || orderName == 'hawaiian') {
      let orderQuantity = prompt(`How many of ${orderName}  do you want?`);
      let orderTotal = (orderQuantity * pizzaPrice);
      if (orderQuantity <= 2) {
        alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal}  kr.The pizzas will take 10 minutes.`);
      } else if (orderQuantity >= 3 && orderTotal <= 5) {
        alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal}  kr.The pizzas will take 15 minutes.`);
      } else {
        alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal}  kr.The pizzas will take 20 minutes.`);
      };
    } else {
      alert("Select a pizza from the menu");
    };
  }*/



