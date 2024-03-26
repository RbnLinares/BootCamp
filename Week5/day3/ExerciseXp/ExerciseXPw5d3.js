//////////////// Exercise 1

function displayNumbersDivisible(divisor = 23) {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
}

// Call the function with the default divisor (23)
displayNumbersDivisible();

// // Call the function with a custom divisor
displayNumbersDivisible(3);
displayNumbersDivisible(45);

////////////////////// Exercise 2

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
};

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;
    for (let item of shoppingList) {
        if (stock[item] > 0) {
            total += prices[item];
            stock[item]--; // Decrease the stock by 1 for the bonus
        }
    }
    return total;
}

console.log(myBill());

///////////////////////// Exercise 3

function changeEnough(itemPrice, amountOfChange) {
    const totalChange = amountOfChange[0] * 0.25 + 
                        amountOfChange[1] * 0.10 + 
                        amountOfChange[2] * 0.05 + 
                        amountOfChange[3] * 0.01; 

    return totalChange >= itemPrice;
}

console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // true

//////////////////////////// Exercise 4

function hotelCost() {
    let nights = prompt("How many nights would you like to stay in the hotel?");
    while (isNaN(nights) || nights < 1) {
        nights = prompt("Please enter a valid number of nights.");
    }
    return nights * 140;
}

function planeRideCost() {
    let destination = prompt("What is your destination?");
    while (destination === '' || destination === null) {
        destination = prompt("Please enter a valid destination.");
    }
    switch (destination.toLowerCase()) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

function rentalCarCost() {
    let days = prompt("How many days would you like to rent the car?");
    while (isNaN(days) || days < 1) {
        days = prompt("Please enter a valid number of days.");
    }
    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95; // Apply 5% discount
    }
    return cost;
}

function totalVacationCost() {
    const hotelCostValue = hotelCost();
    const planeRideCostValue = planeRideCost();
    const rentalCarCostValue = rentalCarCost();
    const totalCost = hotelCostValue + planeRideCostValue + rentalCarCostValue;
    return `The car cost: $${rentalCarCostValue}, the hotel cost: $${hotelCostValue}, the plane tickets cost: $${planeRideCostValue}. Total cost: $${totalCost}`;
}

console.log(totalVacationCost());

/////////////////////////// Exercise 5 6 and 7
//In the carpet




