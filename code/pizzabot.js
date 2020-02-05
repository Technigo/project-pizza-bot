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

//Iteration 2
//alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

// alert("Hey! Happy to serve your pizza. On our menu we have " + vegetarian + " , " + hawaiian + " and " + pepperoni)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Example : `string text ${variable} string text`

// Iteration 3
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
// const orderWhole = () => {
//   let orderName = prompt(`Enter the name of the pizza you want to order today.`);
//   if ((orderName === vegetarian) || (orderName === hawaiian) || (orderName === pepperoni)) {
//   let orderQuantity = prompt(`Super! How many ${orderName} would you like?`);
//   let orderTotal = orderQuantity * pizzaPrice;
//     if (orderQuantity >0 && orderQuantity <=2) {
//     cookingTime = "10 minutes"
//   }
//     else if (orderQuantity >2 && orderQuantity <6) {
//     cookingTime = "15 minutes"
//   }
//     else if (orderQuantity >=6) {
//     cookingTime = "20 minutes"
//   }
//     else {
//     alert("Sorry, that option does not exist. Please start over!");
//     orderWhole();
//     console.log("order quantity invalid")
//     };
//   alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and your order will be ready in ${cookingTime}`);
//   console.log("works")
// }
// else {
//   alert("Uhoh, we do not have that on the menu.");
//   orderWhole();
//   console.log("doesn't work")
// }
// }
// orderWhole()


const buttonClicked = () => {
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);
orderName = prompt(`Enter the name of the pizza you want to order today.`);
checkOrderName(orderName);
totalCost();
cookingTime();
orderUp();
}


const checkOrderName = () => {
  if (orderName == vegetarian || orderName == hawaiian || orderName == pepperoni) {
    return true;
  } else {
    alert("Sorry, we don't have that on the menu. Please try again.");
    buttonClicked();
    return false;
  }
}

// Invoke function with users input as parameter
//checkOrderName(orderName);

const totalCost = (orderQuantity) => {
  var element = document.getElementById("money-feedback");
  element.innerHTML = `That will be a total of ${orderQuantity * pizzaPrice} kr.`;
  return orderQuantity * pizzaPrice;
}

const cookingTime = (orderQuantity) => {
  if (orderQuantity >0 && orderQuantity <=2) {
    var element = document.getElementById("time-feedback");
    element.innerHTML = "Your order will be ready in 10 minutes.";
  } else if ( orderQuantity >2 && orderQuantity <6) {
    var element = document.getElementById("time-feedback");
    element.innerHTML = "Your order will be ready in 15 minutes.";
  } else if ( orderQuantity >=6 && orderQuantity <100) {
    var element = document.getElementById("time-feedback");
    element.innerHTML = "Your order will be ready in 20 minutes.";
  }
}


const orderUp = () => {
  if ( checkOrderName() ) {
    orderQuantity = prompt(`How many of ${orderName} would you like?`)
    // Check if orderQuantity is true and more then 0 units ordered
    if ( orderQuantity >=1 ) {
      totalCost(orderQuantity);
      cookingTime(orderQuantity);
    } else {
      alert("0 pizzas is not a valid option. Please try again.")
      orderUp(orderName);
    }
  }
}
//orderUp();


