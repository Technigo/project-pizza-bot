//1) Defenition of variables 

const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Console log

console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);
console.log(pizzaPrice);

//2, Greet the customer 

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

//3, Promt what pizza they would like -- får inte detta att funka 
var orderName = prompt("Enter the name of the pizza you want to order today.");
if (orderName === vegetarian, hawaiian, pepperoni){
  document.getElementById("demo").innerHTML =
  "How many " + orderName + "do you want";
}