const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

document.getElementById(
  "botBubble"
).innerHTML = `Hey! Happy to get your order started. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`;

document.getElementById("userBubble").innerHTML =
  "Ok! (Click to start your order.)";

document.getElementById("userBubble").style.cursor = "pointer";

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
  ).innerHTML = `<form class="form" onsubmit="validateOrder(event)">
 
 <div class="pizza_selection">What kind would you like?
 
 <p><input type="radio" id="vegetarian" name="pizza_selection" value="vegetarian" required />
 <label for="vegetarian">${vegetarian}</label></p>
 
 <p><input type="radio" id="hawaiian" name="pizza_selection" value="hawaiian" required /><label for="hawaiian">${hawaiian}</label></p>
      
 <p><input type="radio" id="pepperoni" name="pizza_selection" value="pepperoni" required /><label for="pepperoni">${pepperoni}</label></p></div>
 
 <div class="quantity"><p><label for="orderQty">How many pizzas?</label></p><p><input id="orderQty" type="number" name="orderQty" placeholder="enter a number" required /></p></div>
 
 <p><button class=".orderButton" type="submit" id="submit" name="submit" value="submit">Order</button></p>
 </form>`;
}

const calculateTotalCost = (finalOrderQty, pizzaPrice) => {
  return finalOrderQty * pizzaPrice;
};

const calculateCookingTime = (finalOrderQty) => {
  if (finalOrderQty <= 2) {
    return 10;
  } else if (finalOrderQty <= 5) {
    return 15;
  } else {
    return 20;
  }
};

const validateOrder = (event) => {
  event.preventDefault(); 
  if (document.getElementById("vegetarian").checked === true) {
    const finalOrderQty = document.getElementById("orderQty").value;
    let orderTotal = calculateTotalCost(finalOrderQty, pizzaPrice);
    let pizzaCookingTime = calculateCookingTime(finalOrderQty);
    const orderSummary = document.getElementById("confirmation");
    orderSummary.style.display = "block";
    document.getElementById(
  "confirmation"
).innerHTML = `Great! I will get started on your ${validateOrder} right away, it will cost ${orderTotal}kr. The pizza(s) will be ready in ${pizzaCookingTime} minutes.`;
    console.log(`Order is: ${finalOrderQty} ${hawaiian}`);
  } else if (document.getElementById("hawaiian").checked === true) {
    const finalOrderQty = document.getElementById("orderQty").value;
    let orderTotal = calculateTotalCost(finalOrderQty, pizzaPrice);
    let pizzaCookingTime = calculateCookingTime(finalOrderQty);
    const orderSummary = document.getElementById("confirmation");
    orderSummary.style.display = "block";
    document.getElementById(
  "confirmation"
).innerHTML = `Great! I will get started on your ${validateOrder} right away, it will cost ${orderTotal}kr. The pizza(s) will be ready in ${pizzaCookingTime} minutes.`;
    console.log(`Order is: ${finalOrderQty} ${hawaiian}`);
  } else {
    const finalOrderQty = document.getElementById("orderQty").value;
    let orderTotal = calculateTotalCost(finalOrderQty, pizzaPrice);
    let pizzaCookingTime = calculateCookingTime(finalOrderQty);
    const orderSummary = document.getElementById("confirmation");
    orderSummary.style.display = "block";
    document.getElementById(
  "confirmation"
).innerHTML = `Great! I will get started on your ${validateOrder} right away, it will cost ${orderTotal}kr. The pizza(s) will be ready in ${pizzaCookingTime} minutes.`;
    document.getElementById(
  "confirmation")
console.log(`Order is: ${finalOrderQty} ${pepperoni}`);
  }
};


// let orderTotal = calculateTotalCost(finalOrderQty, pizzaPrice);
// let pizzaCookingTime = calculateCookingTime(finalOrderQty);
// document.getElementById(
//   "confirmation"
// ).innerHTML = `Great! I will get started on your ${orderName} right away, it will cost ${orderTotal}kr. The pizza(s) will be ready in ${pizzaCookingTime} minutes.`;

// if (validateOrderName(orderName)) {
//   let orderQty = prompt(`How many of ${orderName} do you want?`);
  // let orderTotal = calculateTotalCost(orderQty, pizzaPrice);
  // let pizzaCookingTime = calculateCookingTime(orderQty);
  // alert(
  //   `Great! I will get started on your ${orderName} right away, it will cost ${orderTotal}kr. The pizza(s) will be ready in ${pizzaCookingTime} minutes.`
  // );



/*- Understand control flow and the use of conditionals statements
- Be able to write basic functions which take arguments and return values
- Connect the JavaScript to show visual feedback in the HTML


## How to hand in the code 🎯
- When you’re finished with the project, push your code to GitHub 
- Navigate to your repo and create a Pull Request into the Technigo repo (Add a link to your deployed project and both of your names.)
- Wait for the code review from your teachers


## Requirements 🧪
**General Requirements**
- Contribute by helping others with this project on Stack Overflow.
- If selected; demo your solution for your team.
- Code follows Technigo’s code guidelines.
- Publish your site on Netlify.

**🔵  Blue Level (Minimum Requirements)**
- Work together in a pair, make sure both of you understand what's happening.
- Complete all project iterations.
- Show the final order summary visually by updating the DOM using Javascript.

Make sure you've committed and pushed a version of your project before starting with the intermediary and advanced goals.


**🔴  Red Level (Intermediary Goals)**
- Make an HTML form for the input of the user's name, pizza type, number of pizzas. Choose the form elements that you think fit the purpose best.
- Show images of the pizza you ordered when you see the final order details.
- Add a few more pizza types and/or different prices for each pizza type


**⚫  Black Level (Advanced Goals)**
- Create a progress bar indicating how many steps there are to finish the order.
- Make a little countdown timer that shows up when your order is finished. Starting on 10, 15 or 20 minutes accordingly to the amount of pizzas you ordered.
- Use an array of objects to store the information about the pizzas
- Style and structure your HTML/CSS so the user is guided through the ordering process.
*/
