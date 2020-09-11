const vegetarian = "vegetarian pizza";
const hawaiian = "hawaiian pizza";
const pepperoni = "pepperoni pizza";
const margaritha = "margaritha pizza";
const kebab = "kebab pizza";
const fusion = "fusion pizza";

const welcomeMessage = (event) => {
  event.preventDefault();
  const username = document.getElementById("name").value;
  showMessageBox(username);
};

const showMessageBox = (username) => {
  document.getElementById(
    "message"
  ).innerHTML = `Hey ${username}! Let's start our order! Select a pizza from our menu:`;
  showPizzaMenu();
};

const showPizzaMenu = () => {
  document.getElementById("pizzaMenu").classList.remove("hidden");
};

const validateOrderName = (selectedPizza) => {
  let selectedPizzaLower = selectedPizza.toLowerCase();
  return (
    selectedPizzaLower === vegetarian ||
    selectedPizzaLower === hawaiian ||
    selectedPizzaLower === pepperoni ||
    selectedPizzaLower === fusion ||
    selectedPizzaLower === margaritha ||
    selectedPizzaLower === kebab
  );
};

const getPizzaPrice = (selectedPizza) => {
  if ((selectedPizza = "margaritha")) {
    return 65;
  } else if ((selectedPizza = "kebab")) {
    return 85;
  } else if ((selectedPizza = "fusion")) {
    return 120;
  } else {
    return 80;
  }
};

const showQuantity = () => {
  const selectedPizza = document.getElementById("selectedPizza").value; //add .toLowerCase?
  let validation = validateOrderName(selectedPizza);
  if (validation) {
    document.getElementById("quantity").classList.remove("hidden");
  } else {
    document.getElementById("errorMessage").classList.remove("hidden");
  }
};

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
    document.getElementById("pizzaImg").classList.toggle("img-vegetarian");
  } else if (selectedPizza === hawaiian) {
    document.getElementById("pizzaImg").classList.toggle("img-hawaiian");
  } else if (selectedPizza === pepperoni) {
    document.getElementById("pizzaImg").classList.toggle("img-pepperoni");
  } else if (selectedPizza === fusion) {
    document.getElementById("pizzaImg").classList.toggle("img-fusion");
  } else if (selectedPizza === margaritha) {
    document.getElementById("pizzaImg").classList.toggle("img-margaritha");
  } else {
    document.getElementById("pizzaImg").classList.toggle("img-kebab");
  }
};

const showTotalOrder = () => {
  document.getElementById("totalOrder").classList.remove("hidden");
  const pizzaQuantity = document.getElementById("pizzaQuantity").value;
  const cookingTime = calculateCookingTime(pizzaQuantity);
  const selectedPizza = document
    .getElementById("selectedPizza")
    .value.toLowerCase();
  const totalCost = getPizzaPrice(selectedPizza) * pizzaQuantity;
  showPizzaImage(selectedPizza);
  document.getElementById(
    "finalOrderMessage"
  ).innerHTML = `I'll get started on your ${selectedPizza}(s), It will cost you ${totalCost} kr. The pizza(s) will take ${cookingTime} minutes.`;
};

const hide = () => {
  document.getElementById("totalOrder").classList.add("hidden");
  document.getElementById("quantity").classList.add("hidden");
  document.getElementById("pizzaMenu").classList.add("hidden");
};
