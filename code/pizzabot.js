const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)


let orderName = prompt('Enter the name of the pizza you want to order today.')




if (orderName == vegetarian || orderName == hawaiian || orderName == pepperoni) {
  
  
} else {
  alert('Order a pizza from the menu')
  orderName = prompt('Enter the name of the pizza you want to order today.')
}
const orderQuantity = prompt(`How many of ${orderName} do you want?`)
const orderTotal = orderQuantity * pizzaPrice

let pizzaTime = "" 

if (orderQuantity <= 2) {
  // pizzaTime = alert('The pizzas will take 10 minutes!')
pizzaTime="10 min"
} else if (orderQuantity >= 3 && orderQuantity <= 5) {
  // pizzaTime = alert('The pizzas will take 15 minutes!') 
  pizzaTime="15 min"
  } else {
    //pizzaTime = alert('The pizzas will take 20 minutes!')
    pizzaTime="20 min"
  }


alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. It will be ready
 in ${pizzaTime}`) 