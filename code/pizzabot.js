const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
console.log(vegetarian, hawaiian, pepperoni)

alert(`Hey, happy to serve your pizza! In our menu we have: ${vegetarian}, ${hawaiian} and ${pepperoni}`);



let orderName = prompt("Enter the name of the pizza you want to order today", "Enter Pizza")

/* if (orderName == null) {
txt = "You have not enter any pizza name yet";
}
else {
txt = "You have ordered " + orderName + "!";
} */
//Doesn't show "No Pizza", why? Something with the boolean, the == null is never true.
orderName == null ? txt = `You have not entered any pizza name yet`: txt= `You have ordered ${orderName}` //New way of writing if-statement (Ternary)

alert(txt);

let orderQuantity = prompt(`How many of ${orderName} do you want?`, `Number of pizza`)

console.log (orderQuantity) 

let orderTotal = orderQuantity*pizzaPrice
alert(`Great! I'll get started on your ${orderName}, It will cost you ${orderTotal} kr`) 



/* 
  console.log(`Hey, happy to serve your pizza! In our menu we have: ${vegetarian}, ${hawaiian} and ${pepperoni}`)


 */





  






  









  








  






  








  








  






  









  








  






  








  








  






  








  












