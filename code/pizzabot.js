const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

let checkOrderName = (orderName) => {
  if (
    orderName === vegetarian || orderName === hawaiian || orderName === pepperoni
  ) {
    return true;
  } else {
    return false;
  }
}

let orderTotal = (orderQuantity) => {
  return +orderQuantity * pizzaPrice
}

const pizzaTime = (orderQuantity) => {
  if (+orderQuantity <= 2) {
    return 10
  } else if (+orderQuantity <= 5) {
    return 15
  } else {
    return 20
  }
}

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)

const orderName = prompt(`Enter the name of the pizza you want to order today.`)

if (checkOrderName(orderName) === true) {
  orderQuantity = prompt(`How many of ${orderName} do you want?`)
  document.getElementById("pizza-order").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal(orderQuantity)} kr. The pizzas will take ${pizzaTime(orderQuantity)} minutes.`
} else {
  alert(`Choose a pizza from the menu`)
}
