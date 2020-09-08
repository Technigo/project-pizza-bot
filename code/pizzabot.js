//Put your Javascript code here:

const vegetarian = "Vegetarian Pizza";
console.log(vegetarian);

const hawaiian = "Hawaiian Pizza";
console.log(hawaiian);

const pepperoni = "Pepperoni Pizza";
console.log(pepperoni);

const pizzaPrice = 80;
console.log(pizzaPrice);

const welcomeMessage = () => {
   alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);
};

welcomeMessage();

//Variables for inserting choice and quantity of pizza using the prompt method.//

let orderName = prompt("Enter the name of the pizza you want to order today"); 
let orderQuantity;
const validateOrderName = () => { //have to be "Vegetarian Pizza", not variable name.
   if (orderName === vegetarian || orderName === pepperoni || orderName === hawaiian) {
      orderQuantity = prompt(`How many of ${orderName} do you want?`); 
   } else {
      alert("Select a pizza from the menu, please!");
      orderName = prompt("Enter the name of the pizza you want to order today");
      //verifyOrder();  //have to insert loop back to begining of function. otherwise error NaN.
   }
};

validateOrderName();


let orderTotal;
//Understand function, parameters, argumens, paretheses. Try removing parameters.
const calculateTotalCost = (pizzaPrice, orderQuantity) => {
   orderTotal = pizzaPrice * orderQuantity
}

calculateTotalCost(pizzaPrice, orderQuantity);

let orderTime;
const calculateCookingTime = () => {
   if (orderQuantity <= 2) {
      orderTime = 10;
      alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take ${orderTime} minutes.`);
   } else if (orderQuantity > 2 && orderQuantity <= 5) {
      orderTime = 15;
      alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take ${orderTime} minutes.`);
   } else {
      orderTime = 20;
      alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take ${orderTime} minutes.`);
   }
};

calculateCookingTime();