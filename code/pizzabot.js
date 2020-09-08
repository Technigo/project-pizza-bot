const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

console.log(vegetarian, hawaiian, pepperoni);

//2

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

//3

const orderName = prompt ("Enter the name of the pizza you want to order today.");

//5

if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
    const orderQuantity = +prompt (`How many of ${orderName} do you want?`);
///
const orderTotal = (pizzaPrice * orderQuantity);
if (orderQuantity <= 2) {
    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take 10 minutes.`);
} else if (orderQuantity  >= 3 && orderQuantity <=5) {
    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take 15 minutes.`);
} else {
    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take 20 minutes.`);
}

///


} else {
    alert('Select a pizza from the menu');
}

//console.log(orderName);

//console.log(orderQuantity);

//4

//const orderTotal = (pizzaPrice * orderQuantity);

//console.log(orderTotal)

//alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`)


