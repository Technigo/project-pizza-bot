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

alert(`Hey! Happy to serve your pizza. On our menu we have ${x}, ${y} and ${z}.`);

//Ask the customer:
const orderName = prompt(
  "Enter the name of the pizza you want to order today.");

//ValidateOrder //CookingTime //calculateOrder //Finalize the order
const validateOrderName = (order) => {
  if (order === x || order === y || order === z) {
    return true;
    } else {
      alert("Please, check the menu")
      return false;
    }
  };

const calculateTotalCost = (quantity, price) => {
   return quantity * price;
  }

const calculateCookingTime = (time) => {
    if (time <= 2) {
      return 10;
    } else if (time >= 3 && time <=5) {
      return 15;
    } else {
      return 20;
    }
  }

if (validateOrderName(orderName) === true) {
const orderQuantity = +prompt(`How many of ${orderName} do you want?`);
const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);
const cookingTime = calculateCookingTime(orderQuantity);
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`);
}