const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const margarita = "Margarita Pizza";
const kebab = "Kebab Pizza";
const norrland = "Norrland Pizza";
let orderName = "Pizza";
const pizzaPrice = 80;
const pizzaBotText = document.getElementById('pizzaBotText');
const barProgress = document.querySelector(".bar-progress");

const startOrdering = () => {

  pizzaBotText.innerHTML = `On our menu we have:`;

  document.getElementById("startBtn").style.display = "none";

  document.getElementById("pizzaContainer").style.display = "flex";

  document.querySelector(".bar-container").style.display = "block";

  barProgress.style.width = "33%";
};


const choosePizza = (pizzaName) => {
    document.getElementById("pizzaContainer").style.display = "none";

    pizzaBotText.innerHTML = `How many ${pizzaName}s do you want?`;

    document.getElementById("quantityContainer").style.display = "block";
    orderName = pizzaName;

    barProgress.style.width = "66%";
};


const calculateCookingTime = () => {
    const quantity = document.getElementById("quantity").value;

    if (quantity <= 2 ) {
        return 10;
    } else if (quantity < 6) {
        return 15;
    } else {
         return 20;
    };
};

const calculateTotalCost = () => {
    const quantity = document.getElementById("quantity").value;
    return pizzaPrice * quantity;
};


const orderSummary = () => {
event.preventDefault();

    pizzaBotText.innerHTML = `Great, I'll get started on your ${orderName} right away. <h2>It will cost ${calculateTotalCost()}kr. The pizza(s) will take ${calculateCookingTime()} minutes.</h2>`;
   
    document.getElementById("quantityContainer").style.display = "none";
   
    barProgress.style.width = "100%";
};


