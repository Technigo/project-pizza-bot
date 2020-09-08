const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

console.log("Vegetarian Pizza", "Hawaiian Pizza","Pepperoni Pizza");

//Put your Javscript code here:

/*iteration 2*/ 



alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

/*iteration 3 and 5*/ 
/* const orderName = prompt("Enter the name of the pizza you want to order today.");
if ((orderName === vegetarian) || (orderName === hawaiian) || (orderName === pepperoni)) {
  const orderQuantity = prompt(`How many ${orderName}(s) do you want?`);
  const orderTotal = orderQuantity * pizzaPrice;
    if (orderQuantity <= 2) {
      alert(`Great, I'll get started on your ${orderName} pizza(s) right away, it will cost ${orderTotal} kr. The pizza(s) will take 10 minutes.`);
    } else if (orderQuantity > 2 && orderQuantity <= 5) {
      alert(`Great, I'll get started on your ${orderName} pizza(s) right away, it will cost ${orderTotal} kr. The pizza(s) will take 15 minutes.`);
    } else {
      alert(`Great, I'll get started on your ${orderName} pizza(s) right away, it will cost ${orderTotal} kr. The pizza(s) will take 20 minutes.`);
    }
} else {
  alert('Select a pizza from the menu');
}
 */

/*Iteration 6*/

/* Function for validateOrderName */
const orderName = prompt("Enter the name of the pizza you want to order today.");
const validateOrderName = (orderName) => {
    if ((orderName === vegetarian) || (orderName === hawaiian) || (orderName === pepperoni)) {
    const orderQuantity = prompt(`How many ${orderName}(s) do you want?`);
    } else {
    alert('Select a pizza from the menu');
    }
    };

    /*invoke function*/
    validateOrderName(orderName);

/* Function for calculateTotalCost */

const orderTotal = ("orderQuantity" * "pizzaPrice");
const calculateTotalCost = (orderTotal) => {
    if (orderQuantity <= 2) {
        alert(`Great, I'll get started on your ${orderName} pizza(s) right away, it will cost ${orderTotal} kr.`);
      } else if (orderQuantity > 2 && orderQuantity <= 5) {
        alert(`Great, I'll get started on your ${orderName} pizza(s) right away, it will cost ${orderTotal} kr.`);
      } else {
        alert(`Great, I'll get started on your ${orderName} pizza(s) right away, it will cost ${orderTotal} kr.`);
      } 
  };

   /*invoke function*/
   calculateTotalCost(orderTotal);
  
/* Function for calculateCookingTime */
const calculateCookingTime = (orderQuantity) => {
    if (orderQuantity <= 2) {
     alert(`The pizza(s) will take 10 minutes.`);
      } else if (orderQuantity > 2 && orderQuantity <= 5) {
     alert(`The pizza(s) will take 15 minutes.`);
      } else {
     alert(`The pizza(s) will take 20 minutes.`);
      } 
  };

/*invoke function*/
calculateCookingTime(orderQuantity);



