const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

document.getElementById("botBubble").innerHTML = 
`Hey! Happy to get your order started. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`;

document.getElementById("userBubble").innerHTML =
  "Ok! (Click to start your order.)";

function buttonClicked() {
  const buttonInvisible = document.getElementById("button");
  buttonInvisible.style.display = "none";

  const chatBegin = document.getElementById("chatContainer");
  chatContainer.style.display = "flex";

  const startConvo = document.getElementById("botBubble");
  botBubble.style.display = "block";

  const userStart = document.getElementById("userBubble");
  userStart.style.display = "block";
}

function startOrder() {
  const orderForm = document.getElementById("startOrder");
  orderForm.style.display = "block";
  document.getElementById(
    "startOrder"
  ).innerHTML = 
      `<form class="form" onsubmit="validateOrder(event)">
          <div class="pizza_selection">What kind would you like?
            <p>
              <input 
                type="radio" 
                id="vegetarian" 
                name="pizza_selection" 
                value="vegetarian" 
                required 
                />
              <label for="vegetarian">${vegetarian}</label>
            </p>
            <p>
              <input 
                type="radio" 
                id="hawaiian" 
                name="pizza_selection" 
                value="hawaiian" 
                required 
                />
                <label for="hawaiian">${hawaiian}</label>
            </p>     
            <p>
            <input 
              type="radio" 
              id="pepperoni" 
              name="pizza_selection" 
              value="pepperoni" 
              required 
              />
              <label for="pepperoni">${pepperoni}</label>
            </p>
          </div>
          <div class="quantity">
            <p>
              <label for="orderQty">How many pizzas?</label>
            </p>
            <p>
            <input 
              id="orderQty" 
              type="number" 
              name="orderQty" 
              placeholder="enter a number" 
              required 
              />
            </p>
          </div>
          <p>
            <button 
              class=".orderButton" 
              type="submit" 
              id="submit" 
              name="submit" 
              value="submit">Order
            </button>
          </p>
        </form>`;
}

// need a validation for orderQty

const calculateTotalCost = (finalOrderQty, pizzaPrice) => {
  return finalOrderQty * pizzaPrice;
};

const calculateCookingTime = finalOrderQty => {
  if (finalOrderQty <= 2) {
    return 10;
  } else if (finalOrderQty <= 5) {
    return 15;
  } 
    return 20;
};

const processOrder = pizzaChoice => {
  const finalOrderQty = document.getElementById("orderQty").value;
    let orderTotal = calculateTotalCost(finalOrderQty, pizzaPrice);
    let pizzaCookingTime = calculateCookingTime(finalOrderQty);
    const orderSummary = document.getElementById("confirmation");
    orderSummary.style.display = "block";
    document.getElementById("confirmation").innerHTML = `Great! I will get started on your ${pizzaChoice} right away, it will cost ${orderTotal}kr. The pizza(s) will be ready in ${pizzaCookingTime} minutes.`;
};

const validateOrder = event => {
  event.preventDefault(); 
  if (document.getElementById("vegetarian").checked === true) {
    processOrder(vegetarian);
  } else if (document.getElementById("hawaiian").checked === true) {
    processOrder(hawaiian);
  } else {
    processOrder(pepperoni);
  }
};