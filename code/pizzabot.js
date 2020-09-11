const vegetarian = "Vegetarian"
const hawaiian = "Hawaiian"
const pepperoni = "Pepperoni"
const pizzaPrice = 80;

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)
let orderName = prompt('Enter the name of the pizza you want to order today.');

const validateOrderName = () => { 
    if (orderName.toLowerCase() === vegetarian.toLowerCase() || orderName.toLowerCase() === hawaiian.toLowerCase() || orderName.toLowerCase() === pepperoni.toLowerCase()) { 
        orderQuantity = prompt(`How many ${orderName} pizzas do you want?`);
        return true; 
    } else {
        alert("Select a pizza from the menu")
        prompt('Enter the name of the pizza you want to order today.');
        validateOrderName();
    }
}
validateOrderName();

const calculateTotalCost = () => {
    orderTotal = orderQuantity * pizzaPrice;
    };
calculateTotalCost();
   
const cookingTime = () => {
    if(orderQuantity<2) {
      pizzaTime = "10 minutes.";
    } else if (orderQuantity>=2 && orderQuantity<=5) {
      pizzaTime = "15 minutes.";
      } else {
      pizzaTime = "20 minutes."
    }
};
cookingTime();

document.getElementById("pizza-order").innerHTML = (`Greeeaat, I'll get started on your ${orderName} pizza(s) right away, it will cost ${orderTotal} kr. The pizzas will take ${pizzaTime}`)