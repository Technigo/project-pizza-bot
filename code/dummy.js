const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;
let time = 0;

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

   
        
        alert(`Great I'll get started on your ${orderName} right away. It will cost ${orderTotal}kr. The pizzas will take ${time} minutes`);
     
/*
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);
let placeOrder = () => {
    let orderName = prompt('Enter the name of the pizza you want to order today');
    let orderQuantity = prompt(`How many of ${orderName} would you like?`); 

    let orderTotal = (orderQuantity * pizzaPrice);
    alert(`Great I'll get started on your ${orderName} Pizza(s) right away. It will cost ${orderTotal}kr`);

}
placeOrder();