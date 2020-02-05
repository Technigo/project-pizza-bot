const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const pizzaPrice = 80

console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);
console.log(pizzaPrice);

const buttonClicked = () => {
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);
orderName = prompt(`Enter the name of the pizza you want to order today.`);
if (checkOrderName(orderName)) {
  totalCost();
  cookingTime();
  orderUp();
}
}

const checkOrderName = () => {
  if (orderName == vegetarian || orderName == hawaiian || orderName == pepperoni) {
  return true;
  } else {
    alert("Sorry, we don't have that on the menu. Please try again.");
    buttonClicked();
    return false;
  }
}

const totalCost = (orderQuantity) => {
  var element = document.getElementById("money-feedback");
  element.innerHTML = `That will be a total of ${orderQuantity * pizzaPrice} kr.`;
  return orderQuantity * pizzaPrice;
}

const cookingTime = (orderQuantity) => {
  if (orderQuantity >0 && orderQuantity <=2) {
    var element = document.getElementById("time-feedback");
    element.innerHTML = "Your order will be ready in 10 minutes.";
  } else if ( orderQuantity >2 && orderQuantity <6) {
    var element = document.getElementById("time-feedback");
    element.innerHTML = "Your order will be ready in 15 minutes.";
  } else if ( orderQuantity >=6 && orderQuantity <100) {
    var element = document.getElementById("time-feedback");
    element.innerHTML = "Your order will be ready in 20 minutes.";
  }
}

const orderUp = () => {
  if ( checkOrderName() ) {
    orderQuantity = prompt(`How many of ${orderName} would you like?`)
    if ( orderQuantity >=1 ) {
      totalCost(orderQuantity);
      cookingTime(orderQuantity);
    } else {
      alert("0 pizzas is not a valid option. Please try again.")
      orderUp(orderName);
    }
  }
}