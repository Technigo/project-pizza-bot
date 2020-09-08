/*const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80*/

//Put your Javscript code here:
/*console.log(vegetarian)
console.log(hawaiian)
console.log(pepperoni) */


/*const validateOrderName = (orderName) => {
   
    console.log(orderName)
    if ((orderName == `${vegetarian}`) || (orderName == `${hawaiian}`) || (orderName == `${pepperoni}`)) {
        return true;

    } else {
        alert("Select a pizza from the menu")
        return false;
    }
}*/


const calculateTotalCost = (event) => {
    event.preventDefault();
    //get nr of pizzas
    let orderQuantity = document.getElementById("nrOfPizzas").value;
    //get pizza sort
    let pizzaName = document.getElementById("pizzaSort").value;
    const pizzaPrice = 80
    // calculate totalcost for pizza
    const orderTotal = orderQuantity * pizzaPrice
    //Print out message to customer
    let info = `Great, I'll get started on your ${pizzaName} right away, it will cost ${orderTotal} kr.`;
    console.log(info)
    document.getElementById("submitInfo").innerHTML = info;
   
};
const form = document.getElementById("form");
form.onsubmit = calculateTotalCost;



//Add conditonals (Iteration 5)
/*const calculateCookingTime = (orderQuantity) => {
    let orderTime = 0;
    if (orderQuantity <= 2) {
        orderTime = 10
        console.log("1-2")
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        console.log("3-5")
        orderTime = 15

    } else if (orderQuantity >= 6) {
        console.log("6 och fler")
        orderTime = 20
    }
    return orderTime;
}
//Greet the customer (Iteration 2)
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)

//Ask the customer (Iteration 3)
let orderTotal
let orderTime
let orderName = prompt("Enter the name of the pizza you want to order today: ")
let validation = validateOrderName(orderName);
if (validation === true) {
    const orderQuantity = prompt(`How many of ${orderName} do you want?`)
    console.log(orderQuantity)
    orderTotal= calculateTotalCost(orderQuantity, pizzaPrice)
    orderTime=calculateCookingTime(orderQuantity)
} else {
    orderName = prompt("Enter the name of the pizza you want to order today: ")
    console.log(orderName)
    validateOrderName(orderName)
}

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take ${orderTime} minutes.`)

*/


//Add functions (Iteration 6)

//Make it visual (Iteration 7)