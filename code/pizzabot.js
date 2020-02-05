const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

console.log(pizzaPrice)

alert(`Hey! Happy to serve your pizza. On our meny we have ${vegetarian}, ${hawaiian}, ${pepperoni}!`)
  
  const orderName = prompt("Enter the name of the pizza you want to order today.", "");
  if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni)
	{
    var orderQuantity =  prompt(
    `How many of ${orderName} do you want?`,"")
  }
  else{
  alert ("Select a pizza from the menu") 
}

const cookingTime = () => {
  if(orderQuantity<2) return 10
  if(orderQuantity>=2 && orderQuantity<=5) return 15
else return 20
};

const orderTotal = orderQuantity*pizzaPrice;

// const checkOrderName = () => { 
//  if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni){ 
// return true}

// else {return false}
//  } //Iteration 6 

//  const totalCost = () => {
//  return orderQuantity*pizzaPrice;
//  } //Iteration 6 

 document.getElementById("order-text").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime()} minutes.`
