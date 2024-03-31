function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        console.log(`The client wants a ${size} drink juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`);
    }

    // Invoking the inner function once
    addIngredients('apple', 'banana', 'orange');
}

// Invoking the outer function in the global scope
makeJuice('large');


function makeJuice(size) {
    let ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        console.log(`The client wants a ${size} drink juice, containing ${ingredients.join(', ')}`);
    }

    // Invoking the addIngredients function twice
    addIngredients('apple', 'banana', 'orange');
    addIngredients('grape', 'kiwi', 'mango');

    // Invoking the displayJuice function once
    displayJuice();
}

// Invoking the makeJuice function in the global scope
makeJuice('large');
