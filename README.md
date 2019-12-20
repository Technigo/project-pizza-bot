`PROJECT 4`

# Build a Pizza Bot

This week’s project is to practices some parts of JavaScript you've learnt so far to create a little text-based bot which you can use to order pizza on your computer.

🚨 _It won't actually order a real pizza for you_

You'll do this project as a pair programming project. That means one of you will fork, clone and do the pull request. but for the coding and the git commits, you take turns working in the same VS Code window. When you're finished make sure to put both of your names in the pull request.

![](https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)

The code folder contains a starter html file and a js file.

---

## Iteration 1 - Setting everything up.

_Decide who's the driver and who's the navigator. swap seats after each iteration._

Before you start writing your "bot", there's a few things you should know about your pizzeria:

- Your pizzeria only serves 3 different pizzas right now; _Vegetarian_, _Hawaiian_ and _Pepperoni_.
- All the pizzas have the same price - 80 SEK.
- Because of the popularity of your pizzeria, and long queues, you can only order multiple pizzas of the same sort.

To start you off, we've defined 4 variables in code/pizzabot.js which you'll use throughout the rest of this assignment:

```
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80
```

In your JavaScript file, add console.log() and log all your variables so you see everything is working and the javascript file is connected to your HTML file.

Open up the HTML fiel in Chrome, open up the inspector and click the Console tab.
There you should see your variabled logged.

```
  git add .
  git commit -m "your commit message"
  git push origin master
```

Swap places, so the Driver becomes the Navigator and vice versa.

## Iteration 2 - Greet the customer

In code/pizzabot.js, you can start coding the bot interaction. The first step is to greet a new customer.

Use `alert()` to print the message `"Hey! Happy to serve your pizza. On our menu we have X, Y and Z"`.

Use the variables `vegetarian`, `hawaiian` and `pepperoni` to replace `X`, `Y` and `Z` in the message so that it reads `"Hey! Happy to serve your pizza. On our menu we have Vegetarian Pizza, Hawaiian Pizza and Pepperoni Pizza"`

## Iteration 3 - Ask the customer

Use `prompt()` to ask the user which pizza they want. The message in the prompt should read `Enter the name of the pizza you want to order today.`. Their response should be stored in a new variable called `orderName`.

Next, ask the user (with another `prompt()`) how many they'd like: `How many of X do you want?`. X should be replaced with the `orderName` variable so that it if I ordered "Hawaiian Pizza" it would read "How many of Hawaiian Pizza do you want?". As before, the response from this prompt should be stored in a variable, this time called `orderQuantity`

## Iteration 4 - Finalize the order

Calculate the total price of the order using the `orderQuantity` and `pizzaPrice` variables and store it in a variable called `orderTotal`. Use an alert to tell the user: `Great, I'll get started on your X right away, it will cost Y kr` (where X should be replaced by the `orderName` variable and Y should be replaced by the `orderTotal` variable).

For example, if I ordered 3 Hawaiian pizzas, the message should read: "Great, I'll get started on your Hawaiian Pizza right away, it will cost 240 kr"

## Iteration 5 - Add conditionals

We want you to add conditionals statements (if-statements) to your program to improve it.

### Checking that the Pizza is on the menu

When the user enters the `orderName` prompt, add an if-statement to check if the input text matches any of the pizza name variables (`vegetarian`, `hawaiian`, `pepperoni`). If yes - show the next promt, if no - show an alert that says `Select a pizza from the menu` or something similar.

### Show cooking times

Before you print the final `Great, I'll get started on your X right away, it will cost Y kr` message to the user, calculate the cooking time based on these rules and add it to the message:

- 1-2 pizzas: `The pizzas will take 10 minutes.`
- 3-5 pizzas: `The pizzas will take 15 minutes.`
- 6+ pizzas: `The pizzas will take 20 minutes.`

For example, if I ordered 3 Hawaiian pizzas, the message should now read: "Great, I'll get started on your Hawaiian Pizza right away, it will cost 240 kr. The pizzas will take 15 minutes."

## Iteration 6 - Add functions

Clean up your code by moving some code into functions and then calling that function when needed.

The functions should all reflect the tasks we've completed so far. So, the functions should be:

1. `checkOrderName()` which should take the `orderName` variable as an argument and return `true` or `false` if the pizza is on the menu or not.
1. `totalCost()` which takes `orderQuantity` as an argument and returns the total cost for the order.
1. `cookingTime()` which takes `orderQuantity` and returns the number of minutes it will take to finish the order.

## Iteration 7 - Make it visual

Try to make the feedback to the customer be printed out on the website instead of just in the console or an alert()

For example, add this message to website by setting the `innerHTML` of an element to be:
"Great, I'll get started on your Hawaiian Pizza right away, it will cost 240 kr. The pizzas will take 15 minutes."

Don't forget to create some HTML elements and give them id's to use as selectors in the JavaScript.

---

## What you will learn 🧠

- Be comfortable using variables
- Know some string methods to modify strings
- Understand control flow and the use of conditionals statements
- Be able to write basic functions which take arguments and return values
- Connect the JavaScript to show visual feedback in the HTML

## How to get started 💪🏼

1. Fork this repo
2. Clone this repo into your projects folder on your computer
3. Open up VS Code and start coding!

## Requirements 🧪

- Work together in a pair, make sure both of you understand what's happening.
- Go through the 7 iterations. Focus on the JavaScript.
- Code follows Technigo’s code guidelines.
- Contribute by helping others with this project on Stack Overflow.
- If selected; demo your solution for your team.

## How to hand in the code 🎯

- When you’re finished with the project, push your code to GitHub with these commands:

  ```
  git add .
  git commit -m "your commit message"
  git push origin master
  ```

- Navigate to your repo and create a Pull Request into the Technigo repo (Add a link to your deployed project.)
- Wait for the code review from your teachers

## How to get help 🆘

Ask for help and share your knowledge about this project with the 'pizza-bot-project' tag on [Stack Overflow](https://stackoverflow.com/c/technigo/questions). Talk to your team on Slack and help each other out. Do some research about your problem, you are surely not the first one with this problem, Google is your friend 🙂. And you can of course also reach out to your teachers.

## Stretch Goals 🏃‍♂

Make sure you've commited and pushed a version of your project before starting with the stretch goals.

**_Design_**

- Instead of having your pizzabot live in the console make a form in HTML for the input from the user, pizza type and number of pizzas.
- Make the pizza ordering with the help of clicking different images of pizzas.
- Show images of the pizza you ordered when you see the final order details.
- Add a CSS file and style the page.

**_Deep-dive_**

- Make a little countdown timer that shows up when your order is finished. Starting on 10, 15 or 20 minutes accordingly to the amount of pizzas you ordered.
- Go to the Wikipedia Article about [Hawaiian Pizza](https://en.wikipedia.org/wiki/Hawaiian_pizza) and:

  - Copy the first three paragraphs. Store the text in a String
  - Make your program count the number of words in the string
  - Make your program count the number of times the word pineapple appears.

#### 🚨 Don't forget to add, commit and push the changes to GitHub when you're done. 🏁
