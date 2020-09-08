const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);
console.log(pizzaPrice);

/*
## **Iteration 2 - Greet the customer**

In code/pizzabot.js, you can start coding the bot interaction. The first step is to greet a new customer.

Use `alert()` to print the message `"Hey! Happy to serve your pizza. On our menu we have X, Y and Z"`.

Use the variables `vegetarian`, `hawaiian` and `pepperoni` to replace `X`, `Y` and `Z` in the message so that it reads `"Hey! Happy to serve your pizza. On our menu we have Vegetarian Pizza, Hawaiian Pizza and Pepperoni Pizza"`
*/
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`
);

/*
## **Iteration 3 - Ask the customer**

Use `prompt()` to ask the user which pizza they want. The message in the prompt should read `Enter the name of the pizza you want to order today.`. Their response should be stored in a new variable called `orderName`.

Next, ask the user (with another `prompt()`) how many they'd like: `How many of X do you want?`. X should be replaced with the `orderName` variable so that if I ordered "Hawaiian Pizza" it would read "How many Hawaiian Pizzas do you want?". As before, the response from this prompt should be stored in a variable, this time called `orderQuantity`
*/
let orderName = prompt("Enter the name of the pizza you want to order today.");

let orderQty = prompt(`How many of ${orderName} do you want?`);

/*
## **Iteration 4 - Finalize the order**

Calculate the total price of the order using the `orderQuantity` and `pizzaPrice` variables and store it in a variable called `orderTotal`. Use an alert to tell the user: `Great, I'll get started on your X right away, it will cost Y kr` (where X should be replaced by the `orderName` variable and Y should be replaced by the `orderTotal` variable).

For example, if I ordered 3 Hawaiian pizzas, the message should read: "Great, I'll get started on your Hawaiian Pizza(s) right away, it will cost 240 kr"
*/
let orderTotal = orderQty * pizzaPrice;
const finalize = () => {
  alert(
    `Great! I will get started on your ${orderName} right away, it will cost ${orderTotal}kr.`
  );
};
finalize(orderTotal);


/*
## **Iteration 5 - Add conditionals**
We want you to add conditionals statements (if-statements) to your program to improve it.

### **Checking that the Pizza is on the menu**

When the user enters the `orderName` prompt, add an if-statement to check if the input text matches any of the pizza name variables (`vegetarian`, `hawaiian`, `pepperoni`). If yes - show the next prompt, if no - show an alert that says `Select a pizza from the menu` or something similar.

### **Show cooking times**

Before you print the final `Great, I'll get started on your X right away, it will cost Y kr` message to the user, calculate the cooking time based on these rules and add it to the message:

- 1-2 pizzas: `The pizzas will take 10 minutes.`
- 3-5 pizzas: `The pizzas will take 15 minutes.`
- 6+ pizzas: `The pizzas will take 20 minutes.`

For example, if I ordered 3 Hawaiian pizzas, the message should now read: "Great, I'll get started on your Hawaiian Pizza(s) right away, it will cost 240 kr. The pizza(s) will take 15 minutes."
*/

/*
## **Iteration 6 - Add functions**

Clean up your code by moving some code into functions and then calling that function when needed.

The functions should all reflect the tasks we've completed so far. So, the functions should be:

1. `validateOrderName()` which should take the `orderName` variable as an argument and return `true` or `false` if the pizza is on the menu or not.
2. `calculateTotalCost()` which takes `orderQuantity` and `pizzaPrice` as arguments and returns the total cost for the order.
3. `calculateCookingTime()` which takes `orderQuantity` and returns the number of minutes it will take to finish the order.
*/

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
