const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

let orderName = prompt('Enter the name of the pizza you want to order today.');

//Function to check if the entered name is a valid pizza on the menu - toLowerCase in case the user has entered with caps
if (orderName.toLowerCase() === "hawaiian" || orderName.toLowerCase() ==="pepperoni" || orderName.toLowerCase() === "vegetarian") {
    let orderQuantity = prompt(`How many ${orderName} do you want?`);

    let orderTotal = pizzaPrice * orderQuantity;

    const prepTime = (amount) => {
        if(amount <= 2) {
            return 10
        } else if (amount >= 3 && amount <= 5) {
            return 15
        } else {
            return 20
        }
    };

    let orderTime = prepTime(orderQuantity);

    alert(`Great, I'll get started on your ${orderName} Pizza(s) right away, it will cost ${orderTotal} kr. The pizza(s) will take ${orderTime} minutes.`);

} else {
    alert('Please select a Pizza from the menu.');
};