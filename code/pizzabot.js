const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

const greetingPhrase = document.getElementById('greeting')
const enterNameContainer = document.getElementById('enterName-container')
const enterNameField = document.getElementById('enterName')
const nameFormContainer = document.getElementById('nameForm-container')
const nameForm = document.getElementById('nameForm')
const pizzaNameContainer = document.getElementById('pizzaName-container')
const pizzaName = document.getElementById('pizzaName')
const pizzaFormContainer = document.getElementById('pizzaForm-container')
const pizzaForm = document.getElementById('pizzaForm')
const pizzaQuantityContainer = document.getElementById('pizzaQuantity-container')
const pizzaQuantityField = document.getElementById('pizzaQuantity')
const quantityFormContainer = document.getElementById('quantityForm-container')
const quantityForm = document.getElementById('quantityForm')
const confirmationContainer = document.getElementById('confirmation-container')
const confirmationField = document.getElementById('confirmation')

// calculateTotalCost() which takes orderQuantity and pizzaPrice as arguments and returns the total cost for the order.
const calculationTotalCost = (orderQuantity, pizzaPrice) => orderQuantity * pizzaPrice;

// calculateCookingTime() which takes orderQuantity and returns the number of minutes it will take to finish the order.
const calculateCookingTime = (orderQuantity) => {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity > 2 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

const greeting = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`;
greetingPhrase.innerHTML = greeting;

const greet = (event) => {
  event.preventDefault();
  const enterName = 'What is your name?';
  enterNameContainer.style.display = "flex";
  enterNameField.innerHTML = enterName;
  nameFormContainer.style.display = "flex";
  nameForm.style.display = "flex";
}

const submitName = (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const orderName = `${name}, enter the name of the pizza you want to order today.`;
  pizzaNameContainer.style.display = "flex";
  pizzaName.innerHTML = orderName;
  pizzaFormContainer.style.display = "flex";
  pizzaForm.style.display = "flex";
  pizzaForm.scrollIntoView(true);
}

const submitPizza = (event) => {
  event.preventDefault();
  const orderName = document.getElementById('orderName').value;
  const pizzaQuantity = `How many ${orderName}(s) do you want?`;
  pizzaQuantityContainer.style.display = "flex";
  pizzaQuantityField.innerHTML = pizzaQuantity;
  quantityFormContainer.style.display = "flex";
  quantityForm.style.display = "flex";
  quantityForm.scrollIntoView(true);
}

const submitQuantity = (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const orderName = document.getElementById('orderName').value;
  const orderQuantity = document.getElementById('orderQuantity').value;
  const confirmation = `Great ${name}! I'll get started on your ${orderName}(s) right away, it will cost ${calculationTotalCost(orderQuantity, pizzaPrice)} kr. The pizza(s) will take ${calculateCookingTime(orderQuantity)} minutes.`;
  confirmationContainer.style.display = "flex";
  confirmationField.innerHTML = confirmation;
  confirmationField.scrollIntoView(true);
}