const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const pizzaMenu = [vegetarian, hawaiian, pepperoni]

const pizzaPrice = 80
let orderName
let orderQuantity
let orderTotal
let cookingTime

checkOrderName = (pizza) => {
  for (var i = 0; i < pizzaMenu.length; i++) {
    if (pizzaMenu[i] === pizza) {
      return true;
    } else {
      return false;
    }
  }
}


totalCost = (quantity) => {
  return pizzaPrice * parseFloat(quantity);
}

cookingTime = (quantity) => {
  if (parseFloat(quantity) <= 2) {
    return 10;
  } else if (parseFloat(quantity) < 6) {
    return 15;
  } else {
    return 20;
  }
};

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

orderName = prompt("Enter the name of the pizza you want to order today.");


if (checkOrderName(orderName) === true) {
  orderQuantity = prompt(`How many of ${orderName} do you want?`);
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(orderQuantity)} kr. Your pizza will take ${cookingTime(orderQuantity)} minutes to prepare.`);
} else {
  alert("Select a pizza from the menu")
}