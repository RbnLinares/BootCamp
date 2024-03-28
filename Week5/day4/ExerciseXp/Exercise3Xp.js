// Declare a global variable named allBoldItems
var allBoldItems;

// Function to collect all the bold items inside the paragraph
function getBoldItems() {
    allBoldItems = document.querySelectorAll('p strong');
}

// Function to change the color of all the bold text to blue
function highlight() {
    allBoldItems.forEach(function(item) {
        item.style.color = 'blue';
    });
}

// Function to change the color of all the bold text back to black
function returnItemsToDefault() {
    allBoldItems.forEach(function(item) {
        item.style.color = 'black';
    });
}

// Call getBoldItems to initialize allBoldItems
getBoldItems();

// Attach the highlight function to the mouseover event of the paragraph
document.querySelector('p').addEventListener('mouseover', highlight);

// Attach the returnItemsToDefault function to the mouseout event of the paragraph
document.querySelector('p').addEventListener('mouseout', returnItemsToDefault);
