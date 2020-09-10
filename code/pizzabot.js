const recieveData = (event) => {
    event.preventDefault();

    const typeOfPizza = validateOrderName();
    const orderQuantity = document.getElementById("quantity").value;
    const totalCost = calculateTotalCost(orderQuantity);
    const cookingTime = calculateCookingTime(orderQuantity);
    document.getElementById("message").innerHTML = (`Great, I'll get started on your ${typeOfPizza} right away, it will cost ${totalCost} kr. The pizzas will take ${cookingTime} minutes.`);
    showImage(typeOfPizza);

}

// let orderName;
const validateOrderName = () => {
    //     const vegetarian = document.getElementById("vegetarianPizza");
    //     const hawaiian = document.getElementById("hawaiianPizza");
    //     const pepperoni = document.getElementById("pepperoniPizza");

    //     if (vegetarian.checked) {
    //         return vegetarian.value;
    //     } else if (hawaiian.checked) {
    //         return hawaiian.value;
    //     } else {
    //         return pepperoni.value;
    //     }
    // }

    let pizzaChoice = document.getElementsByName('pizza');
    for (let i = 0; i < pizzaChoice.length; i++) {
        if (pizzaChoice[i].checked) {

            return pizzaChoice[i].value;

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