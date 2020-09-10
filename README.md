# Pizza Bot

Replace this readme with your own information about your project. 

Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

THE PROBLEM(S)
Describe how you approached to problem, and what tools and techniques you used to solve it. 
How did you plan? What technologies did you use? If you had more time, what would be next?

2020-09-06: 
We started straight away with the week's task from Iteration 1 and so on. 
Googled some and everything went very well and worked until... iteration 6,
that was when the first real problems took place, we discussed, googled some, 
checked the JS-code a lot, tested some things and things worked out accept when:

- writing something false (for exampel hamburger) and we got to "Select a pizza from the menu" + ok:
- "Enter the name of the pizza you want to order today:" + hamburger + ok:
- "Select a pizza from menu" + ok:
- "Great, I'll get started on your hamburger right away, it will cost undefined kr. The pizza(s) will take undefined minutes."

also:
- writing something false (for exampel hamburger) and we got to "Select a pizza from the menu" + ok:
- "Enter the name of the pizza you want to order today:" + Pepperoni Pizza + ok:
- "Great, I'll get started on your Pepperoni Pizza right away, it will cost undefined kr. The pizza(s) will take undefined minutes."

(When writing a true orderName straight away it works out calculating the price and the time)

2020-09-07:
When going further on, also the red levels, we choosed to change the input to a input with selections insteed, 
so that was solving the problem in easy way. 
Then we entered a new problem, that when clicking on the submit-button, the greeting/confirm message just pop up for a second and then
disappear immidately. We asked about about it in Stack Overflow and got answer from a teacher that told about the event attribute
in JS and event.preventDefault();
and this worked out.

2020-09-08:
Some errors and so on, that we solved by checking in the code and also googled. One problem we have not solved, 
even thoug have googled and tried figure it out, we have'nt solved it. We have now asked the question on Stack Overlflow:
No img should be shown when customer have'nt clicked on submit-button. In our html we have wrote: 
<img id="pizzaImg"src="" alt="Pizza"> and in the JS we have one of the pizza images shown when submitted the order. 
So we wonder how to have no picture when not submitted. 
As you can se we have not linked any jpg in the img scr in the html, 
so the alt "Pizza" is shown, but do not want that either to show when not submitted.

## View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
