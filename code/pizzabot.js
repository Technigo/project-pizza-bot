const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

//Make variable easier - if we want 

const pizzaPrice = 80

//Put your Javscript code here:

// ITERATION 2

alert(`Hey! Happy to serve your pizza. On our menu we have ${hawaiian}, ${vegetarian} and ${pepperoni}`);

// ITERATION 3

let orderName = prompt('Enter the name of the pizza you want to order today.');
if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
    orderQuantity = prompt(`How many of ${orderName} do you want?`)
} else  {
    alert("Sorry you have to order something of the menu")
}


    
let cookingTime = prompt(`How many of ${orderName} do you want?`);
if (orderQuantity <= 2) {
    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizza will take 10 minutes`);
}


// ITERATION 4

const orderTotal = (orderQuantity * pizzaPrice);

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`);

// ITERATION 5 

// const orderName = prompt('Enter the name of the pizza you want to order today.');
// if (orderName === orderName) {
//     const orderQuantity = prompt(`How many of ${orderName} do you want?`);
//     }
// else alert("Sorry order something from our menu");


