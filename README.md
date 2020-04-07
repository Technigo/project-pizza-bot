# Pizza Bot

A Pizza bot that will calculate the price and time for each order and give you an error if you've typed your order wrong.

## Code
I've used:
  * **Pair-programming**
  * **JavaScript**
  * **CSS**
  * **HTML**
  * **Team work**
  * **Flexbox**



## The problem

We made a pizza bot, where the user can choose between three different types of pizzas. All of the pizzas had the same price and the user was only allowed to order one type of pizza each time. When the user had decided which pizza they wanted to order, they also wrote how many of that pizza they would like. Then the user presses order, a calculation of how long time the pizza/pizza’s will take and how much it will cost pops up on the screen. All the functions showing on the screen are made in Javascript. 

We struggled with combining different JavaScript functions, and to make them collaborate with each other. At the beginning of the project, we didn't integrate the functions, and that's why the functions didn't collborate as we wanted. When we seperated the funtions, we weren't able to reach the variables that we wanted from different functions, so we decided to make our variables global. We also struggled with our if-statement, and the solution was to place our if-statement inside of a function, and then place an if-statement inside of the fist if. When we realised that we could place an if-statement inside our if, we could cut down the amount of functions from 6 to 3 functions. When the user ordered the pizza, we wanted to show a message if the user tried to ordered a pizza that we don't serve. We chose to place this message in an alert inside of the else statement. This let the user try to order again, and since the if-statement is not met, the final message will not execute. 

If we had more time on this project, the next step would be to include pictures of the pizzas that the user can choose from, instead of text input. Also, it would be to make a timer with count down. 

To sum this up, we are very proud of our pizza bot. We managed to make the functions work, and also did some of the stretch goals. We are also proud that we figured out how to send the users that met the if requirement to the final message, and how to inform a user who didn't, to try ordering again. 

## View it live

Deployed site: https://hardcore-swirles-3a3762.netlify.com
