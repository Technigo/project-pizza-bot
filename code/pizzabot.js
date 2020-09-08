const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)

let orderName = prompt(`Enter the name of the pizza you want to order today.`)

const checkOrderName = (itemOrdered) => {
  return itemOrdered === vegetarian || itemOrdered === hawaiian || itemOrdered === pepperoni
}

while (!checkOrderName(orderName))  {
  orderName = prompt(`Please enter either ${vegetarian}, ${hawaiian} or ${pepperoni}.`)
} // The while loop can't be broken out of unless you enter a valid value
  
let orderQuantity = prompt(`How many ${orderName} do you want?`)

while (orderQuantity < 1 || isNaN(orderQuantity)) {
  orderQuantity = prompt(`Please enter a number above 0.`)
} // The while loop can't be broken out of unless you enter a valid value

const totalCost = (totalOrdered) => {
  return pizzaPrice * totalOrdered
}

const orderTotal = totalCost(orderQuantity)

const calculateCookingTime = (itemsToCook) => {
  if (itemsToCook > 0 && itemsToCook <= 2) {
    return 10
  } else if (itemsToCook > 2 && itemsToCook <= 5) {
    return 15
  } else if (itemsToCook >= 6) {
    return 20
  }
}

const cookingTime = calculateCookingTime(orderQuantity)

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and take ${cookingTime} minutes.`)
