const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

console.log(vegetarian)
console.log(hawaiian)
console.log(pepperoni)
console.log(pizzaPrice)


function orderButton() {
  alert(`Hey! I'm happy to serve you pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

  let orderName = checkOrderName();
  let quantity = orderQuantity(orderName);
  let total = (pizzaPrice * quantity)

  let textGoesHere = document.getElementById('printMessage')
  textGoesHere.innerHTML = `<p>Great, we will get started on your ${orderName} right away, it will cost ${total} kr.</p>`;
  textGoesHere.innerHTML += `<p>${cookingTime(quantity)}</p>`;
}


const checkOrderName = () => {
  let input = prompt(`Enter the name of the pizza you want to order today?`)
  if (input === vegetarian || input === hawaiian || input === pepperoni) {
    return input;
  } else {
    alert('Please select someting from our menu');
    return checkOrderName();
  }
};

const orderQuantity = (userInput) => {
  if (userInput === vegetarian) {
    return Number(prompt(`How many of ${userInput} do you want?`));
  } else if (userInput === hawaiian) {
    return Number(prompt(`How many of ${userInput} do you want?`));
  } else if (userInput === pepperoni) {
    return Number(prompt(`How many of ${userInput} do you want?`));
  }
}

const cookingTime = (numberOfPizzas) => {
  if (numberOfPizzas >= 1 && numberOfPizzas <= 2) {
    return `The pizzas will take 10 minutes`
  } else if (numberOfPizzas >= 3 && numberOfPizzas <= 5) {
    return `The pizzas will take 15 minutes`
  } else if (numberOfPizzas >= 6) {
    return `The pizzas will take 20 minutes`
  }
}


