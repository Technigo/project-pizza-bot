const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
console.log(vegetarian, hawaiian, pepperoni, pizzaPrice)

alert(`Hey! Happy to serve you a pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)

const orderName = prompt(`Enter the name of the pizza you want to order today.`);
console.log(orderName);


// let orderQuantity;

if (orderName == "Vegetarian Pizza") {
  orderQuantity = Number(prompt(`How many of ${orderName} do you want`))
} else if (orderName == "Hawaiian Pizza") {
    orderQuantity = Number(prompt(`How many of ${orderName} do you want`))
} else if (orderName == "Pepperoni Pizza") {
    orderQuantity = Number(prompt(`How many of ${orderName} do you want`))
} else {
  alert(`Select a pizza from our menu`)
}


console.log(orderQuantity)





const orderTotal = (orderQuantity * pizzaPrice);
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`);
