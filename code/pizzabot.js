const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80
console.log(vegetarian)

//Put your Javscript code here:
function checkPizza(pizza) {
  const type = pizza;
  if (type === hawaiian || type === pepperoni || type === vegetarian) {
    return type
  }
  else {
    return "Pepperoni Pizza"
  }
}
function totalCost(x, y) {
  const pizzaTotal = x * y;
  return pizzaTotal;
}

function cooking(number) {
  const quantity = number;
  if (quantity > 5) {
    return 20
  }
  else if (quantity > 2) {
    return 15
  }
  else if (quantity > 0) {
    return 10
  }
  else {
    return 0
  }
}




// Greeting 
alert("Welcome to our pizzeria we serve " + pepperoni + " " + vegetarian + " " + hawaiian + ".")
// Order
let pizzaType = prompt("what pizza do you want")
console.log(pizzaType)
const pizzaNum = prompt("how many?")
const total = totalCost(pizzaNum, pizzaPrice)
alert("Ill get started on your order right away it will cost you " + total + " kr.")

pizzaType = checkPizza(pizzaType);
alert(pizzaType);
const time = cooking(pizzaNum);
alert(time);

const para = "You have ordered " + pizzaNum + " " + pizzaType + " cooking will take " + time + " and the cost is " + total

document.getElementById("text").innerHTML = para;





