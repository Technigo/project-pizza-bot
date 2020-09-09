// const vegetarian = "Vegetarian Pizza";
// const hawaiian = "Hawaiian Pizza";
// const pepperoni = "Pepperoni Pizza";
// const pizzaPrice = 80;


function nameFunction() {
  document.getElementById("").innerHTML = "";
}

const startOrder = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`;





// alert(
//   `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`
// );

// let orderName = prompt("Enter the name of the pizza you want to order today.");

// const validateOrderName = (orderName) => {
//   if (
//     orderName === "vegetarian" ||
//     orderName === "pepperoni" ||
//     orderName === "hawaiian"
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const calculateTotalCost = (orderQty, pizzaPrice) => {
//   return orderQty * pizzaPrice;
// };

// const calculateCookingTime = (orderQty) => {
//   if (orderQty <= 2) {
//     return 10;
//   } else if (orderQty <= 5) {
//     return 15;
//   } else {
//     return 20;
//   }
// };

// if (validateOrderName(orderName)) {
//   let orderQty = prompt(`How many of ${orderName} do you want?`);
//   let orderTotal = calculateTotalCost(orderQty, pizzaPrice);
//   let pizzaCookingTime = calculateCookingTime(orderQty);
//   alert(
//     `Great! I will get started on your ${orderName} right away, it will cost ${orderTotal}kr. The pizza(s) will be ready in ${pizzaCookingTime} minutes.`
//   );
// } else {
//   alert(
//     `Please select a pizza from our menu. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`
//   );
// }

/*
## **Iteration 7 - Make it visual**
Make the feedback to the customer be printed out on the website instead of just in the console or an alert()

For example, add this message to the website by setting the `innerHTML` of an element to be: "Great, I'll get started on your Hawaiian Pizza right away, it will cost 240 kr. The pizzas will take 15 minutes."

Don't forget to create some HTML elements and give them id's to use as selectors in the JavaScript.
*/

/*
---




## What you will learn 🧠
- Be comfortable using variables
- Know some string methods to modify strings
- Understand control flow and the use of conditionals statements
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
