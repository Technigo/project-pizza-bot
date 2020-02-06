const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

var x = vegetarian
var y = hawaiian
var z = pepperoni

alert("Hey! Happy to serve you pizza! On our menu we have " + x + ", " + y + " and " + z + ".");


let orderName = prompt("Enter the name of the pizza you want to order today.");


if (orderName.toLowerCase() == "vegetarian") {
  modifiedName = x;
} else if (orderName.toLowerCase() == "vegetarian pizza") {
  modifiedName = x;
} else if (orderName.toLowerCase() == "hawaiian") {
  modifiedName = y;
} else if (orderName.toLowerCase() == "hawaiian pizza") {
  modifiedName = y;
} else if (orderName.toLowerCase() == "hawaian") {
  modifiedName = y;
} else if (orderName.toLowerCase() == "hawaian pizza") {
  modifiedName = y;
} else if (orderName.toLowerCase() == "pepperoni") {
  modifiedName = z;
} else if (orderName.toLowerCase() == "pepperoni pizza") {
  modifiedName = z;
} else if (orderName.toLowerCase() == "peperoni") {
  modifiedName = z;
} else if (orderName.toLowerCase() == "peperoni pizza") {
  modifiedName = z;
} else {
  alert('Select a pizza from the menu');
  let orderName = prompt("Enter the name of the pizza you want to order today.");
  if (orderName.toLowerCase() == "vegetarian") {
    modifiedName = x;
  } else if (orderName.toLowerCase() == "vegetarian pizza") {
    modifiedName = x;
  } else if (orderName.toLowerCase() == "hawaiian") {
    modifiedName = y;
  } else if (orderName.toLowerCase() == "hawaiian pizza") {
    modifiedName = y;
  } else if (orderName.toLowerCase() == "hawaian") {
    modifiedName = y;
  } else if (orderName.toLowerCase() == "hawaian pizza") {
    modifiedName = y;
  } else if (orderName.toLowerCase() == "pepperoni") {
    modifiedName = z;
  } else if (orderName.toLowerCase() == "pepperoni pizza") {
    modifiedName = z;
  } else if (orderName.toLowerCase() == "peperoni") {
    modifiedName = z;
  } else if (orderName.toLowerCase() == "peperoni pizza") {
    modifiedName = z;
  } else {
    alert('Select a pizza from the menu');
  }
}


const orderQuantity = prompt("How many of " + modifiedName + " do you want?");

const totalCost = orderQuantity * 80;

if (orderQuantity < 3) {
  cookingTime = "10";
} else if (orderQuantity < 6) {
  cookingTime = "15";
} else {
  cookingTime = "20";
} 

console.log(vegetarian, hawaiian, pepperoni, pizzaPrice)
console.log(orderName);
console.log(orderQuantity);
console.log(`The customer has ordered ${orderQuantity} of ${orderName}.`);
console.log('It will cost ' + orderQuantity * 80 + 'kr.');
console.log('It will take ' + cookingTime + ' to prepare.')

document.getElementById("final-order").innerHTML = ("Great, I'll get started on your " + modifiedName + " right away, it will cost you " + totalCost + "kr. The pizzas will take " + cookingTime + " minutes.");






