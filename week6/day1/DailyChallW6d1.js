let client = "King";

// const groceries = {
//     fruits: ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice: "20$",
//     other: {
//         paid: true,
//         meansOfPayment: ["cash", "creditCard"]
//     }
// };

// const displayGroceries = () => {
//     groceries.fruits.forEach(fruit => console.log(fruit));
// };

// // Invoke the function to display the fruits
// displayGroceries();

const cloneGroceries = () => {
    // Create a copy of the client variable
    let user = client;

    // Change the client variable to "Betty"
    client = "Betty";

    // Create a copy of the groceries object
    let shopping = { ...groceries };

    // Change the value of the totalPrice key to 35$
    shopping.totalPrice = "35$";
    // Changing properties of shopping does affect the original groceries object because objects 
    // are passed by reference.
    // Change the value of the paid key to false
    shopping.other.paid = false;
    // shopping will reflect the changes made to its properties because groceries was 
    // passed by reference.
    // Log the user and shopping variables to see their values
    console.log("User:", user);
    console.log("Shopping:", shopping);
};

// Invoke the cloneGroceries function
cloneGroceries();

