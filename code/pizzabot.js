////JAVASCRIPT////
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);


//Greeting:

const x = "vegetarian";
const y = "hawaiian";
const z = "pepperoni";


document.getElementById("greeting").innerHTML = (`Hey! Happy to serve you pizza! On the menu we have ${x}, ${y} and ${z}.`);


const calculateTotalCost = (orderQuantity) => {
  orderTotal = (orderQuantity * pizzaPrice)
}

const calculateCookingTime = (orderQuantity) => {
  if (orderQuantity > 0 && orderQuantity <= 2) {
      cookingTime = 10
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
      cookingTime = 15
  } else if (orderQuantity >= 6) {
      cookingTime = 20
  }
}

let validateOrderName = (orderName, orderQuantity) => {
  event.preventDefault();
  if (orderName === x || orderName === y || orderName === z) {
      calculateTotalCost(orderQuantity)
      calculateCookingTime(orderQuantity)
      document.getElementById("final").innerText = (`Thanks ${userName.value}! You just ordered ${orderQuantity} ${orderName}. The total cost is ${orderTotal} kr and the order will take ${cookingTime} minutes.`);
  } else {
      document.getElementById("final").innerText = (`Sorry, that pizza isn't on the menu. Please choose between ${x}, ${y} or ${z}.`);
  }
  };