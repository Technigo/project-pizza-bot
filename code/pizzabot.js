const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

let orderQuantity;
let orderTotal;
let orderName;
let cookingTime;
let imageName;

  const askForPizza = (event) => {
    event.preventDefault();
    alert(`Welcome to Pizza Corner! On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`); 

  const validateOrderName = (order) => {
    if (
      order === "vegetarian pizza" ||
      order === "pepperoni pizza" ||
      order === "hawaiian pizza" 
    ) {
      orderQuantity = prompt(`How many ${orderName}'s would you like?`);
      orderQuantity = parseInt(orderQuantity, 10);
    } else {
      alert("Please choose a pizza from our menu");
      askForPizza();
    }
  };

  const askForPizza = () => {
    //alert(`Welcome to Pizza Corner! On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`); 
    orderName = prompt("Enter the name of the pizza you want to order today"); 
    validateOrderName(orderName);
  };

  askForPizza();
  const calculateTotalCost = (quantity, price) => {
    orderTotal = quantity * price;
  };

  const pizzaImgFunction = (order) => {
    if(order === "vegetarian pizza") {
        return "./images/vegetarian-pizza.jpg";
    } else if (order === "pepperoni pizza") {
        return "./images/pepperoni-pizza.jpg";
    } else {
        return "./images/hawaiian-pizza.jpg";
    }
  };

  const calculateCookingTime = (order) => {
    if (order <= 2) {
      cookingTime = 10;
    } else if (order > 2 && order < 6) {
      cookingTime = 15;
    } else {
      cookingTime = 20;
    }
    alert(`Great I'll get started on your ${orderName} order right away. It will cost ${orderTotal}kr. The pizza(s) will take ${cookingTime} minutes`);

    document.getElementById("printOrder").innerHTML = `You have ordered: ${orderName} x${orderQuantity} and the total price is: ${orderTotal}kr`;
    document.getElementById("pizzaImage").innerHTML = pizzaImage.src = pizzaImgFunction(orderName);

  };

  calculateTotalCost(orderQuantity, pizzaPrice);
  calculateCookingTime(orderQuantity);
};