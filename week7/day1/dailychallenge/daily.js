///////////////*Exercise 1*/////////////////

// function makeAllCaps(words) {
//     return new Promise((resolve, reject) => {
//        if (words.every(word => typeof word === 'string')) {
//          resolve(words.map(word => word.toUpperCase()));
//        } else {
//          reject('All elements in the array must be strings.');
//        }
//     });
//    }
//    function sortWords(words) {
//     return new Promise((resolve, reject) => {
//        if (words.length > 4) {
//          resolve(words.sort());
//        } else {
//          reject('The array must contain more than 4 words.');
//        }
//     });
//    }
//    // This example will execute the catch method because the array contains a number.
// makeAllCaps([1, "pear", "banana"])
// .then((arr) => sortWords(arr))
// .then((result) => console.log(result))
// .catch(error => console.log(error));

// // This example will also execute the catch method because the array contains less than 5 words.
// makeAllCaps(["apple", "pear", "banana"])
// .then((arr) => sortWords(arr))
// .then((result) => console.log(result))
// .catch(error => console.log(error));

// // This example will log the array of words uppercased and sorted.
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
// .then((arr) => sortWords(arr))
// .then((result) => console.log(result)) // ["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
// .catch(error => console.log(error));

///////////////////* Exercise 2*////////////////////

function toJs() {
    const morseJson = `{
       "0": "-----",
       "1": ".----",
       "2": "..---",
       "3": "...--",
       "4": "....-",
       "5": ".....",
       "6": "-....",
       "7": "--...",
       "8": "---..",
       "9": "----.",
       "a": ".-",
       "b": "-...",
       "c": "-.-.",
       "d": "-..",
       "e": ".",
       "f": "..-.",
       "g": "--.",
       "h": "....",
       "i": "..",
       "j": ".---",
       "k": "-.-",
       "l": ".-..",
       "m": "--",
       "n": "-.",
       "o": "---",
       "p": ".--.",
       "q": "--.-",
       "r": ".-.",
       "s": "...",
       "t": "-",
       "u": "..-",
       "v": "...-",
       "w": ".--",
       "x": "-..-",
       "y": "-.--",
       "z": "--..",
       ".": ".-.-.-",
       ",": "--..--",
       "?": "..--..",
       "!": "-.-.--",
       "-": "-....-",
       "/": "-..-.",
       "@": ".--.-.",
       "(": "-.--.",
       ")": "-.--.-"
    }`;
   
    return new Promise((resolve, reject) => {
       const morseObj = JSON.parse(morseJson);
       if (Object.keys(morseObj).length === 0) {
         reject('The Morse object is empty.');
       } else {
         resolve(morseObj);
       }
    });
   }
   function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
       const input = prompt('Enter a word or sentence:');
       const morseTranslation = input.split('').map(char => {
         const morseChar = morseJS[char.toLowerCase()];
         if (!morseChar) {
           reject(`Character '${char}' not found in Morse code.`);
         }
         return morseChar;
       });
       resolve(morseTranslation);
    });
   }
   function joinWords(morseTranslation) {
    return new Promise((resolve, reject) => {
       const morseString = morseTranslation.join('<br>');
       document.body.innerHTML = morseString;
       resolve('Morse code displayed on the page.');
    });
   }
   toJs()
 .then(morseJS => toMorse(morseJS))
 .then(morseTranslation => joinWords(morseTranslation))
 .then(result => console.log(result))
 .catch(error => console.error(error));
