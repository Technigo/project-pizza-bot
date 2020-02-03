const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

let checkOrderName = (orderName) => {
  if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
    return true
  } else {
    return false
  }
}

let totalCost = (orderQuantity) => {
  return (orderQuantity * pizzaPrice)
}

let cookingTime = (orderQuantity) => {
  if (orderQuantity < 3) {
    document.getElementById("orderReply").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(orderQuantity)} kr. The pizzas will take 10 minutes.`
  } else if (orderQuantity < 6) {
    document.getElementById("orderReply").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(orderQuantity)} kr. The pizzas will take 15 minutes.`
  } else { document.getElementById("orderReply").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(orderQuantity)} kr. The pizzas will take 20 minutes.` }
}

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and  ${pepperoni}.`)

let orderName = prompt("Enter the name of the pizza you want to order today.")

if (checkOrderName(orderName)) {
  let orderQuantity = prompt(`How many of ${orderName} do you want?`)
  cookingTime(orderQuantity)
} else {
  alert("Please select a pizza from the menu.")
}






/*if (
  orderName === vegetarian ||
  orderName === hawaiian ||
  orderName === pepperoni
) {
  let orderQuantity = prompt(`How many of ${orderName} do you want?`)
} else {
  alert("Please select a pizza from the menu.")
  prompt("Enter the name of the pizza you want to order today.")
}
*/


//totalCost(orderQuantity)

//let orderTotal = (orderQuantity * pizzaPrice);

/*if (orderQuantity < 3) {
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take 10 minutes`)
} else if (orderQuantity < 6) {
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take 15 minutes`)
} else {
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take 20 minutes`)
}; */




