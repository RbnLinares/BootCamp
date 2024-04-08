////////////* Exercise 1*///////////
function compareToTen(num) {
    return new Promise((resolve, reject) => {
       if (num <= 10) {
         resolve('Number is less than or equal to 10');
       } else {
         reject('Number is greater than 10');
       }
    });
   }
compareToTen(15)
.then(result => console.log(result))
.catch(error => console.log(error));

compareToTen(8)
.then(result => console.log(result))
.catch(error => console.log(error));

/////////////* Exercise 2 *////////////////
const after4Seconds = () => {
    return new Promise(resolve => {
       setTimeout(() => resolve('success'), 4000);
    });
   };
   after4Seconds()
   .then(result => console.log(result)) 
   .catch(error => console.error(error)); 

////////////* Exercise 3*///////////////

const resolvePromise = Promise.resolve(3);
const rejectPromise = Promise.reject("Boo!");
resolvePromise
 .then(value => console.log(value)) // This will log 3
 .catch(error => console.error(error)); // This will not be executed

rejectPromise
 .then(value => console.log(value)) // This will not be executed
 .catch(error => console.error(error)); // This will log "Boo!"

   
   