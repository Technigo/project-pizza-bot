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

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

// alert("Hey! Happy to serve your pizza. On our menu we have " + vegetarian + " , " + hawaiian + " and " + pepperoni)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Example : `string text ${variable} string text`


//let orderName = 
// Check if user input is stored in orderName
//console.log(orderName);
//= prompt(`How many of ${orderName} do you want?`);
// Check if user input is stored in orderQuantity
//console.log(orderQuantity);


// Iteration 4


//alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`);

// https://www.w3schools.com/js/js_arithmetic.asp

//Iteration 5 - conditionals

// const cookingTime = () => {
  
// }

const orderWhole = () => {
  let orderName = prompt(`Enter the name of the pizza you want to order today.`);
  if ((orderName === vegetarian) || (orderName === hawaiian) || (orderName === pepperoni)) {
  let orderQuantity = prompt(`Super! How many ${orderName} would you like?`);
  let orderTotal = orderQuantity * pizzaPrice;
    if (orderQuantity >0 && orderQuantity <=2) {
    cookingTime = "10 minutes"
  }
    else if (orderQuantity >2 && orderQuantity <6) {
    cookingTime = "15 minutes"
  }
    else if (orderQuantity >=6) {
    cookingTime = "20 minutes"
  }
    else {
    alert("Sorry, that option does not exist. Please start over!");
    orderWhole();
    console.log("order quantity invalid")
    };
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and your order will be ready in ${cookingTime}`);
  console.log("works")
}
else {
  alert("Uhoh, we do not have that on the menu.");
  orderWhole();
  console.log("doesn't work")
}
}
orderWhole()

