const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);

//Greeting:

const x = "vegetarian";
const y = "hawaiian";
const z = "pepperoni";

alert(`Hey! Happy to serve your pizza. On our menu we have ${x}, ${y} and ${z}.`);


//Ask the customer:

const orderName () =>  
    prompt("Enter the name of the pizza you want to order today.")
    if (orderName !== x || orderName !== y || orderName !== z)
    alert("choose a pizza on the menu") 
    return true
}


//Add conditionals: //Checking that the pizza is on the menu:


orderQuantity = prompt(`How many of ${orderName} do you want?`);
const orderTotal = orderQuantity * pizzaPrice
console.log(orderName, orderQuantity);



//Finalize the order:
const pizza10 = "The pizza will take 10 minutes";
const pizza15 = "The pizza will take 15 minutes";
const pizza20 = "The pizza will take 20 minutes";


orderQuantity = alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. ${pizza10} ${pizza15} ${pizza20}`);

const pizzaTime = (orderQuantity) => {
}
    orderName = document.getElementById("pizzas").value
    if (orderQuantity <= 2) {
      cookingTime = "10 minutes"
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
      cookingTime = "15 minutes"
    } else {
      cookingTime = "20 minutes"
    }

console.log(orderTotal);
