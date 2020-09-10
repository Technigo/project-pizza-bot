const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
let orderName = "Pizza";
const pizzaPrice = 80;
const pizzaBotText = document.getElementById('pizzaBotText');

const startOrdering = () => {
  pizzaBotText.innerHTML = `On our menu we have:`;

  document.getElementById("startBtn").style.display = "none";

  document.getElementById("pizzaContainer").style.display = "flex";
    
};


const choosePizza = (pizzaName) => {
    document.getElementById("pizzaContainer").style.display = "none";

    pizzaBotText.innerHTML = `How many ${pizzaName}s do you want?`;
    document.getElementById("quantityContainer").style.display = "block";
    orderName = pizzaName;

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

    pizzaBotText.innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${calculateTotalCost()}kr. The pizza(s) will take ${calculateCookingTime()} minutes.`;
    document.getElementById("quantityContainer").style.display = "none";
};


