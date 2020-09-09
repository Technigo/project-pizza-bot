const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

/*Functions*/
//Three functions in total needed - iteration 7

/*Check valid pizza name*/
const validateOrderName = (orderName) =>{
  if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni)
  {
      return true;
  }
  else return false;
}
console.log(validateOrderName);

/*calculate order total price*/
const calculateTotalCost = (orderQuantity, pizzaPrice) =>{
  const orderTotal = orderQuantity * pizzaPrice;
  return orderTotal;
}
console.log(calculateTotalCost);


/*calculate cooking time depending on orderQuantity*/
const calculateCookingTime = (orderQuantity) =>{
  let cookingTime;
  if (orderQuantity >= 1 && orderQuantity <=2) {
      cookingTime = 10;
  } else if (orderQuantity >=3 && orderQuantity <=5) {
      cookingTime = 15;
  } else if (orderQuantity >= 6) {
      cookingTime = 20;
  } else {
      cookingTime = 0;
  }
  return cookingTime;
}
console.log(calculateCookingTime);


/* Start of program */
alert(`Hello! Happy to serve you pizza. On our menu we have ${vegetarian}, ${pepperoni}, ${hawaiian}`);

const orderName = prompt("Enter the name of the pizza you want to order");
console.log(orderName);

if (validateOrderName(orderName)===true) {
  const orderQuantity = prompt(`How many of ${orderName} do you want?`);
  const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);
  let cookingTime = calculateCookingTime(orderQuantity);
  //TO GET MESSAGE IN ALERT: 
  //const messageText = alert(`Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`)
  
  //TO GET MESSAGE SHOWN IN OUR HTML FILE
  const messageText = (`Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`)
  document.getElementById("message").innerHTML = messageText;
}
else {
  alert("Select a pizza from the menu");
}