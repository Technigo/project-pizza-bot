const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80


console.log(vegetarian)
console.log(hawaiian)
console.log(pepperoni)
console.log(pizzaPrice)

function greeting() {
  document.getElementById("btn").innerHTML = (`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);
}

function order() {

  const orderName = prompt("Enter the name of the pizza you want to order today.");

  let orderQuantity = Number(`How many of ${orderName} do you want?`);

  const checkOrderName = (orderName) => {
    if (orderName === "vegetarian" || orderName === "hawaiian" || orderName === "pepperoni") {
      orderQuantity = Number(prompt(`How many of ${orderName} do you want?`));
    } else {
      prompt(`Please select a pizza from the menu`)
    }
  }


  checkOrderName(orderName)

  let orderTotal = orderQuantity * pizzaPrice

  const totalCost = (orderQuantity) => {
    orderTotal = orderQuantity * pizzaPrice;
  }
  totalCost(orderQuantity)

  const cookingTime = (orderQuantity) => {
    if (orderQuantity <= 2) {
      document.getElementById("conf").innerHTML = (`Great! I´ll get started on your ${orderName} right away, it will cost ${orderTotal} kr.The pizzas will take 10 minutes.`)
    } else if (orderQuantity === 3 || orderQuantity === 4 || orderQuantity === 5) {
      document.getElementById("conf").innerHTML = (`Great! I´ll get started on your ${orderName} right away, it will cost ${orderTotal} kr.The pizzas will take 15 minutes.`)
    } else if (orderQuantity >= 6) {
      document.getElementById("conf").innerHTML = (`Great! I´ll get started on your ${orderName} right away, it will cost ${orderTotal} kr.The pizzas will take 20 minutes.`)
    }
  }

  cookingTime(orderQuantity)
}