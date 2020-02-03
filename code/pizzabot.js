const vegetarian = 'Vegetarian Pizza'
const hawaiian = 'Hawaiian Pizza'
const pepperoni = 'Pepperoni Pizza'

const pizzaPrice = 80

alert(`Hello there, we are happy to serve you pizza! On todays menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}!`);
const orderName = prompt('Enter the name of the pizza you want to order today!');

/* This function will check if the order is correct*/
const checkOrderName = (orderName) => {
  if (orderName == hawaiian || orderName == vegetarian || orderName == pepperoni) {
    return true;
  } else {
    return false;
  }
}

/*Invoke if orderName exist*/
const order = checkOrderName(orderName);


/*total cost function*/
const totalCost = (orderQuantity) => {
  orderTotal = (orderQuantity * pizzaPrice);
  return orderTotal;
}

/* Cooking time function */
const cookingTime = (orderQuantity) => {
  if (orderQuantity < 3) {
    return (10);
  } else if (orderQuantity < 6) {
    return (15);
  } else {
    return (20);
  }
}


const checkOrder = (order) => {
  if (order === true) {
    orderQuantity = prompt(`How many of ${orderName} do you want?`);
    /*Invoking the function*/
    orderTotal = totalCost(orderQuantity);
    /*Invoking the function*/
    minutes = cookingTime(orderQuantity);
    document.getElementById("greeting").innerHTML = `Great, we'll get started on your ${orderName} right away. It will cost ${orderTotal} kronor and will take ${minutes} minutes!`;
  } else {
    document.getElementById("greeting").innerHTML = `Select a pizza from the menu`;
  }
}

/*Invoking the function*/
checkOrder(order);