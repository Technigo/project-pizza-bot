const pizzaPrice = 80;

console.log(vegetarian, hawaiian, pepperoni, pizzaPrice);

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

let orderName = prompt("Enter the name of the pizza you want to order today.. ");

let orderQuantity = prompt(`How many of ${orderName} do you want?`);
console.log(orderQuantity);

let orderTotal = orderQuantity * pizzaPrice;

console.log(orderTotal);




  if ((orderName === "vegetarian", "hawaiian", "pepperoni")) {
    orderQuantity;
  } else {
    alert("Order something else");
    return [orderName];
  }
  
  let orderQuantity = prompt(`How many of ${orderName} do you want?`);
  console.log(orderQuantity);
  
  let orderTotal = orderQuantity * pizzaPrice;
  console.log(orderTotal);
  
  alert(
    ` Great! I'll get started on your ${orderName} right away!, it will cost ${orderTotal} kr`
  );
  

