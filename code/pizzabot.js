const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

let orderQuantity = 0

let orderTotal = 0

let time = 0;

//Put your Javscript code here:

console.log(vegetarian, hawaiian, pepperoni, pizzaPrice);

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`)

let orderName = prompt('Enter the name of the pizza you want to order today.');

if (orderName === vegetarian || orderName === hawaiian || orderName=== pepperoni){
   orderQuantity = prompt(`How many of ${orderName} do you want?`);

  orderTotal = (orderQuantity * pizzaPrice);
  
  if(orderQuantity <=2 ){
    time = 10;
  }else if (orderQuantity <=5 ){
    time = 15;
  }else if (orderQuantity >=6){
    time = 20;
  };

   alert(`Great, I'll get started on your ${orderName}s right away, it will cost ${orderTotal}kr. The pizzas will take ${time} minutes.`);





  } else{
 alert('Select a pizza from the menu')
};


