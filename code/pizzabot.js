const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//console.log(`${vegetarian} + ${hawaiian} + ${pepperoni} + ${pizzaPrice}`);

//Put your Javscript code here:
let orderQuantity;
let orderTotal;
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`); //iteration2

    const orderName = prompt('Enter the name of the pizza you want to order today');//iteration3
      if (orderName === "vegetarian" || orderName === "hawaiian" || orderName === "pepperoni") { //iteration5
         orderQuantity = prompt(`How many of ${orderName} would you like?`); //iteration3
        orderTotal = (orderQuantity * pizzaPrice); //iteration4
           } else { alert(`Select a pizza from the menu`);
             }

   let cookingTime;
const calculateCookingTime(orderQuantity) => {
  
}
if (orderQuantity <= 2) {
  cookingTime = 10;
} else if (orderQuantity > 2 && orderQuantity <6 ) {
  cookingTime = 15;
} else {
  cookingTime = 20;
}

alert(`Great I'll get started on your ${orderName} right away. It will cost ${orderTotal}kr. The pizzas will take ${cookingTime} minutes`);
     
