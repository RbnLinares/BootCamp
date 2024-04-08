////////////* Exdrcise 1 *//////////////
// The URL for the Giphy API request
// const giphyApiUrl = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// function fetchGiphyData() {
//  fetch(giphyApiUrl)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json(); 
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error('There was a problem:', error);
//     });
// }
// fetchGiphyData();

//////////////////////* Exercise 2*////////////////

// const giphyApiUrl = 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2';

// function fetchGiphyData1() {
//  fetch(giphyApiUrl)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json(); 
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error('There was a problem', error);
//     });
// }
// fetchGiphyData1();

/////////////* Exercise 3*/////////////////
async function fetchStarWarsData() {
    try {
       const response = await fetch("https://www.swapi.tech/api/starships/9/");
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
       const objectStarWars = await response.json();
       console.log(objectStarWars.result);
    } catch (error) {
       console.error('There was a problem:', error);
    }
   }
   fetchStarWarsData();

   //////////////* Exercise 4 *//////////////
    
// Output: calling
//         resolved
//    The first line, 'calling', is logged immediately when asyncCall is called. 
//    The second line, 'resolved', is logged after a 2-second delay, which is when the Promise 
//    returned by resolveAfter2Seconds is resolved.
   



