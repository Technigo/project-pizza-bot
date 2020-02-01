const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

console.log(pizzaPrice)

alert(`Hey! Happy to serve your pizza. On our meny we have ${vegetarian}, ${hawaiian}, ${pepperoni}!`)
  
  var orderName = prompt("Enter the name of the pizza you want to order today.", "");
  if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni)
	{
    var orderQuantity =  prompt(
    `How many of ${orderName} do you want?`,"")
  }
  else{
  alert ("Select a pizza from the menu") 
}

if(orderQuantity<2) var cookingTime = 10
  if(orderQuantity>=2 && orderQuantity<=5) var cookingTime = 15
  else var cookingTime = 20 
;


var orderTotal = orderQuantity*pizzaPrice;

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime}.`)

const checkOrderName = () => { 
 if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni){ 
return true}

else {return false}
 }

 alert (checkOrderName())

 const totalCost = () => {
 return orderQuantity*pizzaPrice;
 }

 alert (totalCost())

 let cookingTime2 = () => {
     if(orderQuantity<2) return 10
     if(orderQuantity>=2 && orderQuantity<=5) return 15
  else return 20
 };
 alert (cookingTime2())

 document.getElementById("welcome-text").innerHTML = "What Pizza would you like?"

 HTMLElementObject.innerHTML = Text
