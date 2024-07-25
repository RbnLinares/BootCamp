document.addEventListener('DOMContentLoaded', () => {
    const loadCharacterButton = document.getElementById('loadCharacter');
    const loadingElement = document.getElementById('loading');
    const characterInfoElement = document.getElementById('characterInfo');
    const errorElement = document.getElementById('error');

    loadCharacterButton.addEventListener('click', async () => {
        try {
            loadingElement.classList.remove('hidden');
            errorElement.classList.add('hidden');
            characterInfoElement.classList.add('hidden');

            const response = await fetch('https://swapi.dev/api/people/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (!data.results || data.results.length === 0) {
                throw new Error('No character data received');
            }
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const randomCharacter = data.results[randomIndex];
            const homeworldResponse = await fetch(randomCharacter.homeworld);
            if (!homeworldResponse.ok) {
                throw new Error('Failed to fetch homeworld data');
            }
            const homeworldData = await homeworldResponse.json();
            randomCharacter.homeworld = homeworldData.name; 
            displayCharacterInfo(randomCharacter);
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            errorElement.textContent = 'Error: ' + error.message;
            errorElement.classList.remove('hidden');
        } finally {
            loadingElement.classList.add('hidden');
        }
    });

    function displayCharacterInfo(character) {
        if (!character || !character.name || !character.height || !character.gender || !character.birth_year || !character.homeworld) {
            throw new Error('Character data is incomplete');
        }
        document.getElementById('characterName').textContent = character.name;
        document.getElementById('characterHeight').textContent = character.height;
        document.getElementById('characterGender').textContent = character.gender;
        document.getElementById('characterBirthYear').textContent = character.birth_year;
        document.getElementById('characterHomeWorld').textContent = character.homeworld; // Display the homeworld's name
        characterInfoElement.classList.remove('hidden');
    }
});


