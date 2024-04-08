const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllButton = document.getElementById('deleteAllButton');

const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = searchInput.value;
    if (query) {
        const gif = await fetchGif(query);
        displayGif(gif);
    }
});

deleteAllButton.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});

async function fetchGif(query) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=1`);
    const data = await response.json();
    if (data.data.length > 0) {
        return data.data[0];
    } else {
        throw new Error('No GIF found');
    }
}

function displayGif(gif) {
    const gifElement = document.createElement('div');
    const img = document.createElement('img');
    img.src = gif.images.original.url;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        gifElement.remove();
    });
    gifElement.appendChild(img);
    gifElement.appendChild(deleteButton);
    gifContainer.appendChild(gifElement);
}
