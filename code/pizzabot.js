const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//console.log(`${vegetarian} + ${hawaiian} + ${pepperoni} + ${pizzaPrice}`);

//Put your Javscript code here:

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);
let placeOrder = () => {
    let orderName = prompt('Enter the name of the pizza you want to order today');
    let orderQuantity = prompt(`How many of ${orderName} would you like?`); 

    let orderTotal = (orderQuantity * pizzaPrice);
    alert(`Great I'll get started on your ${orderName} right away. It will cost ${orderTotal}kr`);

}
placeOrder();
/*
let checkOrder = () => {
    if (orderName === vegetarian || hawaiian || pepperoni) {
        prompt("Next prompt") 
        } else { 
            alert(`Select a pizza from the menu`);
        }
}
checkOrder();

if (orderName !== ${vegetarian} || ${hawaiian} || ${pepperoni}) {

    } else { alert(`Select a pizza from the menu`);

 */

