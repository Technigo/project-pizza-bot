const vegetarian = "vegetarian pizza";
const hawaiian = "hawaiian pizza";
const pepperoni = "pepperoni pizza";
const margaritha = "margaritha pizza";
const kebab = "kebab pizza";
const fusion = "fusion pizza";

const welcomeMessage = event => {
  event.preventDefault();
  const username = document.getElementById("name").value;
  showMessageBox(username);
};

const showMessageBox = username => {
  document.getElementById("message").innerHTML = 
  `Hey ${username}! Let's start our order! Select a pizza from our menu:`;
  showPizzaMenu();
};

const showPizzaMenu = () => {
  document.getElementById("pizza-menu").classList.remove("hidden");
};

const validateOrderName = selectedPizza => {
  const selectedPizzaLower = selectedPizza.toLowerCase();
  return (
    selectedPizzaLower === vegetarian ||
    selectedPizzaLower === hawaiian ||
    selectedPizzaLower === pepperoni ||
    selectedPizzaLower === fusion ||
    selectedPizzaLower === margaritha ||
    selectedPizzaLower === kebab
  );
};

const getPizzaPrice = selectedPizza => {
  if (selectedPizza === margaritha) {
    return 65;
  } else if ((selectedPizza === kebab)) {
    return 85;
  } else if ((selectedPizza === fusion)) {
    return 120;
  } else {
    return 80;
  }
};

const showQuantity = () => {
  const selectedPizza = document.getElementById("selected-pizza").value; //add .toLowerCase?
  const validation = validateOrderName(selectedPizza);
  if (validation) {
    document.getElementById("quantity").classList.remove("hidden");
  } else {
    document.getElementById("error-message").classList.remove("hidden");
  }
};

const validateQuantity = () => {
  const pizzaQuantity = document.getElementById("pizza-quantity").value;
  pizzaQuantity <= 0 
    ? document.getElementById("error-quantity").classList.remove("hidden")
    : showTotalOrder(pizzaQuantity)
}

const calculateCookingTime = (orderQuantity) => {
  if (orderQuantity > 0 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
};

const showPizzaImage = (selectedPizza) => {
  if (selectedPizza === vegetarian) {
    document.getElementById("pizza-img").classList.toggle("img-vegetarian");
  } else if (selectedPizza === hawaiian) {
    document.getElementById("pizza-img").classList.toggle("img-hawaiian");
  } else if (selectedPizza === pepperoni) {
    document.getElementById("pizza-img").classList.toggle("img-pepperoni");
  } else if (selectedPizza === fusion) {
    document.getElementById("pizza-img").classList.toggle("img-fusion");
  } else if (selectedPizza === margaritha) {
    document.getElementById("pizza-img").classList.toggle("img-margaritha");
  } else {
    document.getElementById("pizza-img").classList.toggle("img-kebab");
  }
};

const showTotalOrder = (pizzaQuantity) => {
  document.getElementById("total-order").classList.remove("hidden");
  document.getElementById("error-quantity").classList.add("hidden");
  const cookingTime = calculateCookingTime(pizzaQuantity);
  const selectedPizza = document.getElementById("selected-pizza").value.toLowerCase();
  const pizzaPrice = getPizzaPrice(selectedPizza);
  const totalCost = pizzaPrice * pizzaQuantity;
  showPizzaImage(selectedPizza);
  document.getElementById(
    "final-order-message"
  ).innerHTML = `I'll get started on your ${selectedPizza}(s), It will cost you ${totalCost} kr. The pizza(s) will take ${cookingTime} minutes.`;
};

const refresh = () => {
  document.getElementById("total-order").classList.add("hidden");
  document.getElementById("message").innerHTML = "";
  document.getElementById("pizza-menu").classList.add("hidden");
  document.getElementById("quantity").classList.add("hidden");
}


