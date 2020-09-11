const receiveData = (event) => {
    event.preventDefault();

    const typeOfPizza = validateOrderName();
    const orderQuantity = document.getElementById("quantity").value;
    const totalCost = calculateTotalCost(orderQuantity);
    const cookingTime = calculateCookingTime(orderQuantity);
    document.getElementById("message").innerHTML = (`You've ordered ${orderQuantity} ${typeOfPizza}. It will cost ${totalCost} kr and take ${cookingTime} minutes. Enjoy your meal!`);
    showImage(typeOfPizza);
}

let orderName;
const validateOrderName = () => {

    let pizzaChoices = document.getElementsByName('pizza');

    for (let i = 0; i < pizzaChoices.length; i++) {
        if (pizzaChoices[i].checked) {
            return pizzaChoices[i].value;
        }
    }
}

///Calculate total cost of the order.
const calculateTotalCost = (orderQuantity) => {
    const pizzaPrice = 80;
    return orderQuantity * pizzaPrice;
}


//Calculate cooking time
const calculateCookingTime = (orderQuantity) => {
    let timeCooking;
    if (orderQuantity < 3) {
        timeCooking = 10;
    } else if (orderQuantity > 5) {
        timeCooking = 20;
    } else {
        timeCooking = 15;
    }
    return timeCooking;
}

const showImage = (typeOfPizza) => {

    document.getElementById("vegetarianImg").style.display = "none";
    document.getElementById("hawaiianImg").style.display = "none";
    document.getElementById("pepperoniImg").style.display = "none";
    document.getElementById("chickenImg").style.display = "none";

    if (typeOfPizza === "Vegetarian Pizza") {
        document.getElementById("vegetarianImg").style.display = "block";
    } else if (typeOfPizza === "Hawaiian Pizza") {
        document.getElementById("hawaiianImg").style.display = "block";
    } else if (typeOfPizza === "Pepperoni Pizza") {
        document.getElementById("pepperoniImg").style.display = "block";
    } else {
        document.getElementById("chickenImg").style.display = "block";
    }
}