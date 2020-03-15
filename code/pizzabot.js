const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

alert(`Hey! Happy to serve you pizza! On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni} .`);

const finalOrder = (orderName, orderQuantity) => {
  let totalCost = orderQuantity * 80;
  if (orderQuantity < 3) {
    cookingTime = "10";
  } else if (orderQuantity < 6) {
    cookingTime = "15";
  } else {
    cookingTime = "20";
  };
  document.getElementById("final-order").innerHTML = (`Great, I'll get started on your ${orderName} right away. It will cost you ${totalCost}kr. The pizzas will take ${cookingTime} minutes to prepare.`)
};

const checkOrder = () => {
  let orderName = prompt("Enter the name of the pizza you want to order today.");
  if (orderName.toLowerCase() == "vegetarian" || orderName.toLowerCase() == "vegetarian pizza") {
    let orderQuantity = prompt(`How many of ${vegetarian} do you want?`);
    finalOrder(orderName, orderQuantity);
  } else if (orderName.toLowerCase() == "hawaiian" || orderName.toLowerCase() == "hawaiian pizza" || orderName.toLowerCase() == "hawaian" || orderName.toLowerCase() == "hawaian pizza") {
    let orderQuantity = prompt(`How many of ${hawaiian} do you want?`);
    finalOrder(orderName, orderQuantity);
  } else if (orderName.toLowerCase() == "pepperoni" || orderName.toLowerCase() == "pepperoni pizza" || orderName.toLowerCase() == "peperoni" || orderName.toLowerCase() == "peperoni pizza") {
    let orderQuantity = prompt(`How many of ${pepperoni} do you want?`);
    finalOrder(orderName, orderQuantity);
  } else {
    alert('Select a pizza from the menu.');
    checkOrder();
  }
};
checkOrder();

