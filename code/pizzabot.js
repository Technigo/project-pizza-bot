// Pizza names and price

const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

const orderSubmit = (event) => {
  event.preventDefault();
  let inputList = document.querySelector('input[name="pizza"]:checked');
  document.getElementById("info").style.display = "block";
  if (inputList === null) {
    document.getElementById("info").innerHTML = "Select a pizza from the menu";
  } else {
    const orderName = inputList.value;
    const orderQuantity = document.getElementById("amountPizzaInputId").value;
    const totalCost = calculateTotalCost(orderQuantity, pizzaPrice);
    const cookingTime = calculateCookingTime(orderQuantity);

    document.getElementById(
      "info"
    ).innerHTML = `Great, I'll get started on your order of ${orderName} right away, it will cost ${totalCost} kr. 
    The pizza(s) will take ${cookingTime} minutes.`;
  }
};

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
  return orderQuantity * pizzaPrice;
};

const calculateCookingTime = (orderQuantity) => {
  if (orderQuantity == 1 || orderQuantity == 2) {
    return 10;
  } else if (orderQuantity > 2 && orderQuantity < 6) {
    return 15;
  } else {
    return 20;
  }
};
