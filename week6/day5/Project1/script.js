const robots = [
    {   id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://i.gifer.com/Y3at.gif'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://i.gifer.com/Fgid.gif'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://i.gifer.com/ho.gif'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://i.gifer.com/VdN6.gif'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://i.gifer.com/6nff.gif'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://i.gifer.com/8Hhp.gif'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://i.gifer.com/OswI.gif'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://i.gifer.com/7V3E.gif'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image:'https://i.gifer.com/VVjT.gif'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image:'https://i.gifer.com/S81y.gif'
    }
    
];

const searchBox = document.getElementById('search-box');
const robotsContainer = document.querySelector('.robots-container');

function displayRobots(robots) {
    robotsContainer.innerHTML = '';
    robots.forEach(robot => {
        const robotCard = document.createElement('div');
        robotCard.classList.add('robot-card');
        robotCard.innerHTML = `
            <img src="${robot.image}" alt="${robot.name}">
            <h2>${robot.name}</h2>
            <p>${robot.username}</p>
            <p>${robot.email}</p>
        `;
        robotsContainer.appendChild(robotCard);
    });
}

function filterRobots(searchQuery) {
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchQuery.toLowerCase()));
    displayRobots(filteredRobots);
}

searchBox.addEventListener('input', (event) => {
    const searchQuery = event.target.value;
    filterRobots(searchQuery);
});

displayRobots(robots);
