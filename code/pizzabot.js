const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

let botSays = document.getElementById('botSays');
botSays.innerHTML = 'What would you like to order?';

// make inputbox actice (the mouse/cursor is there in beginning)
document.getElementById("answer").focus();

// used to check if valid pizza is ordered
let orderedPizza = "";

const isValidPizza = (pizza) => {
    if (vegetarian.toLowerCase() === pizza.toLowerCase() ||
        hawaiian.toLowerCase() === pizza.toLowerCase() ||
        pepperoni.toLowerCase() === pizza.toLowerCase()) {
        return true
    } else {
        return false
    }
}

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
    let totalCost = orderQuantity * pizzaPrice
    return totalCost
}

const calculateCookingTime = (orderedQuantity) => {
    if (orderedQuantity < 3) {
        return 10
    } else if (orderedQuantity < 6) {
        return 15
    } else {
        return 20
    }
}

const submitAnswer = () => {

    // always keep the inputbox active
    document.getElementById("answer").focus();
    let answer = document.getElementById("answer").value;

    // If no pizza, or no valid pizza, has been ordered..
    if (orderedPizza === "") {

        // .. check if the pizza they want is valid
        let validPizza = isValidPizza(answer)

        if (validPizza) {
            orderedPizza = answer;
            document.getElementById("answer").placeholder = `cool, tell me how many.`
            botSays.innerHTML = `How many ${orderedPizza} would you like?`;
        } else {
            botSays.innerHTML = `Sorry, we don't serve ${answer}. Please order something from the menu`;
        }

        document.getElementById("answer").value = "";
    } else {
        // GET ORDER QUANTITY
        let orderQuantity = answer

        // CALCULATE COST
        let totalCost = calculateTotalCost(orderQuantity, pizzaPrice);

        // CALCULATE COOKING TIME
        let cookingTime = calculateCookingTime(orderQuantity);

        botSays.innerHTML = `Nice! ${orderQuantity} ${orderedPizza}'s will cost you ${totalCost}kr
                             and take ${cookingTime} minutes. `;

        // Reset order mode for next customer
        document.getElementById("answer").value = "";
        orderedPizza = "";
        document.getElementById("answer").placeholder = `enter pizza name`
    }
}

let input = document.getElementById("answer");
input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitButton").click();
    }
});

