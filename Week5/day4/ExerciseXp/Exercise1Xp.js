document.addEventListener('DOMContentLoaded', function() {
    // 1. Retrieve the h1 and console.log it.
    const h1 = document.querySelector('article h1');
    console.log(h1.textContent);

    // 2. Remove the last paragraph in the <article> tag.
    const article = document.querySelector('article');
    const paragraphs = article.querySelectorAll('p');
    const lastParagraph = paragraphs[paragraphs.length - 1];
    article.removeChild(lastParagraph);

    // 3. Add an event listener to change the background color of the h2 to red when clicked.
    const h2 = document.querySelector('article h2');
    h2.addEventListener('click', function() {
        h2.style.backgroundColor = 'red';
    });

    // 4. Add an event listener to hide the h3 when clicked.
    const h3 = document.querySelector('article h3');
    h3.addEventListener('click', function() {
        h3.style.display = 'none';
    });

    // 5. Add a button to make the text of all the paragraphs, bold.
    const makeBoldButton = document.getElementById('makeBold');
    makeBoldButton.addEventListener('click', function() {
        const paragraphs = document.querySelectorAll('article p');
        paragraphs.forEach(p => p.style.fontWeight = 'bold');
    });

    // BONUS: Change the font size of the h1 on hover to a random size between 0 and 100.
    h1.addEventListener('mouseover', function() {
        const randomSize = Math.floor(Math.random() * 101); // Random size between 0 and 100
        h1.style.fontSize = `${randomSize}px`;
    });

    // BONUS: Reset font size on mouseout
    h1.addEventListener('mouseout', function() {
        h1.style.fontSize = ''; // Reset to default size
    });
});
