const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

const checkOrderName = orderName => {
  if (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  ) {
    return true;
  } else {
    return false;
  }
};

const totalCost = orderQuantity => {
  return orderQuantity * pizzaPrice;
};

const cookingTime = (orderQuantity, orderName) => {
  if (orderQuantity < 3) {
    document.getElementById(
      "orderReply"
    ).innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(
      orderQuantity
    )} kr. The pizzas will take 10 minutes.`;
  } else if (orderQuantity < 6) {
    document.getElementById(
      "orderReply"
    ).innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(
      orderQuantity
    )} kr. The pizzas will take 15 minutes.`;
  } else {
    document.getElementById(
      "orderReply"
    ).innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(
      orderQuantity
    )} kr. The pizzas will take 20 minutes.`;
  }
};

const startOrder = () => {
  alert(
    `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and  ${pepperoni}.`
  );

  let orderName = prompt(
    "Enter the name of the pizza you want to order today."
  );
  if (checkOrderName(orderName)) {
    let orderQuantity = prompt(`How many of ${orderName} do you want?`);
    cookingTime(orderQuantity, orderName);
  } else {
    alert("Please select a pizza from the menu.");
  }
};





