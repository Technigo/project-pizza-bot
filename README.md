# The project: Pizza Bot 🍕

The goal for this project was to create a pizzabot using javascript. We needed to gather data from the user in order to process the users order. This included username, pizza type and amount of pizzas. All of this information needed to be made visible in the DOM.

## How we built it:
1. We started by reading through the project and then doing the iteration 1, 2 3 and 4 which we found the easiest. 

2. Then we started to add the conditional statements. The first one where you are meant to create an if else statement; if the user inputs a pizza that is on the menu then that will be true and if not then it'll be false. The second if, else if and else statements felt understandable. 

3. Then we got really stuck on the functions. I think this was because we didn't really understand how they work and what arguments to write in the brackets. As well as how to call these and then use/store the information that was created when the function was run. After a bit of help and some googaling we understood better how we were meant to use these. We also created two big functions where all the other small functions were called based on user input and if it was true or false. 

4. Once we got the functions to work together we started to edit the prompts and alerts so we could view the information in the DOM. We used the document.getElementById().innerhtml to connect both the javascript sections to the html. 

5. For the end result we managed to get the form functions and onsubmit attribute of the form to trigger the next function and the same for the next function. This meant that when the user inputted information and submitted with the submit button it made the next form section appear. 

## What we learnt:
1. learnt about the event.preventDefault(); which stops the page from re-loading/submitting the information when you submit the form. 

2. How to put an image from the html in to variable using document.getElementById("vegPizza").

3. How to use the template literals.

4. How to use the toLowerCase() to convert whatever the user (uppercase, lowecase or a combination) inputs into lowercase so the pizza name the user inputs isn't so case sensitive.

5. Understanding how the return method works when using an if else statement. 

6. How to use a function to call other functions. By placing them inside of one function and using an if else condition to call certain functions if true or false. 

7. How to access a value of what a user has inputted in a html element and access this in javascript to then put into a variable to then use within javascript. 

8. How to make a html element visible in javascript when the function is true when it has been made display: none in css. 

9. How to use the onsubmit form attribute to call a function when the user clicks on the submit button. 

## If we had more time: 
1. It  would be nice to make the first greeting sentance from the pizzabot to load with the page, but then you would need to interact with that statement in order to show the first form section where it asks for you to input your username and input the username you want to order.

2. Also it would be nice to add some animations so you could simulate the pizza bot acting more like a robot that is asking questions with the user can interact with.

3. Understand how the onsubmit and submit attribute in form can work together as I think at the moment it's a bit of a mess in the html document. We have two forms, where the first from is acting like a trigger for the next one to open when the user submits the information from the first form. I think in form one we should use type="button" rather than type="submit" as it's only all the information from form two that we would want to submit to the backend.

4. Use more troubleshooting via console.log() to find issues.

Pair programming & planning:
We felt that the pair programming worked well. In the beginning we tried to do the driver/navigate concept and this worked well. When we hit roadblocks we googled and asked for help on stack overflow. It was hard when working together to explain to one another what we meant as we didn't fully understand some of the javascript concepts. But we got there in the end and made it work.

Even though we found it hard it feels like now that we understand more about variables, if else conditionals, function and javascript in general when working with html and css.

## View it live

https://mystifying-lovelace-84f38f.netlify.app/


