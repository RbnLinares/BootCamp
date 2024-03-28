document.getElementById('libform').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get input values
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;

    // Check if any input is empty
    if (!noun || !adjective || !person || !verb || !place) {
        alert('Please fill in all fields.');
        return;
    }

    // Generate the story
    const story = `Once upon a time, there was a ${adjective} ${noun} in the ${place}. One day, ${person} decided to ${verb} the ${noun}.`;

    // Display the story
    document.getElementById('story').textContent = story;
});

// Array of stories
const stories = [
    `Once upon a time, there was a ${adjective} ${noun} in the ${place}. One day, ${person} decided to ${verb} the ${noun}.`,
    `In a ${place} far, far away, there lived a ${adjective} ${noun} named ${person}. One day, ${person} ${verb}ed and found a treasure.`,
    `In the ${place} of ${person}, there was a ${adjective} ${noun} that ${verb}ed every day. One day, ${person} ${verb}ed and changed the world.`
];

document.getElementById('shuffle-button').addEventListener('click', function() {
    // Select a random story
    const randomIndex = Math.floor(Math.random() * stories.length);
    const story = stories[randomIndex];

    // Display the story
    document.getElementById('story').textContent = story;
});
