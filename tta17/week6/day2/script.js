/** array method */
// let users = ['John', 'Marry', 'Dan', 'Anne'];

// for(let item of users){
//     console.log(item);
// }

// for(let i = 1; users.length-2; i = i +2) {
//     console.log(users[i]);
// }

// let i = 0;
// while (i < users.length) {
//     console.log(users[i]);
//     i++;
// }

// for (let indx in users) {
//     console.log(users[indx]);
// }
// //* forEach loop*/
// users.forEach((user, indx) =>{
//     console.log(user, indx);
// });

// /**create an array of users email's */
// let users = ['John', 'Marry', 'Dan', 'Anne'];
// // let results = ['John@gmail.com', 'Marry@gmail.com', 'Dan@gmail.com', 'Anne@gmail.com'];

// let arr = []
// users.forEach((users, indx, arr) =>{
//     arr.push(user + "@gmail.com")
//     arr[indx] = users + "@gmail.com";
// });
// console.log(users);

// function map(arr) {
//     let retArr = [];
//     arr.forEach((Element) => {
//         retArr.push(Element * 2);
//     });
//     return retArr;
// }
// console.log(map ([2, 4, 6, 8]));

// //*map method/
// let arr = [1,2,3,4,5]
// let retArr = arr.map((item) => {
//     return item * 2;
// });
// console.log(retArr);

//   use the map method to render on the html page
// let users = [
//     { userid: 1, name: "John", email: "jjj@gmail.com" },
//     { userid: 2, name: "Marry", email: "mmm@gmail.com" },
//     { userid: 3, name: "Anne", email: "aaa@gmail.com" },
//     { userid: 3, name: "Or", email: "aaa@gmail.com" },
//   ];

// const usersContainer = document.getElementById('users-container');
// let tableHeader = '<thead><tr><th>UserID</th><th>Name</th><th>Email</th></tr></thead>';
// let tableBody = '<tbody>';
// users.forEach(user => {
//     tableBody += `
//         <tr>
//             <td>${user.userid}</td>
//             <td>${user.name}</td>
//             <td>${user.email}</td>
//         </tr>
//     `;
// });
// tableBody += '</tbody>';
// let tableContent = tableHeader + tableBody;
// usersContainer.innerHTML = tableContent;

// function render(arr) {
//     let html = arr.map(item => {
//         return `<div> ${item.userid} ${item.name} ${item.email}</div>)`
//     })
//     console.log(html);
//     document.getElementById('users-container').innerHTML = html.join("");
// }
// render (users)

// const filter = (arr) => {
//     let retArr = [];
//     for(let item of arr) {
//         if (item > 3) retArr.push(item);
//     }
//     return retArr;
// }
// console.log(filter([0,1,1,2,3,5,8]));

/**filter method */

// let arr = [0,1,1,2,3,5,8]
// let retArr = arr.filter((item) => {
//     return item > 3;
// })
// console.log(retArr);

// let oUsers = users.filter((item) => {
//     return item.name.toLocaleLowerCase().includes('o');
// })
// console.log(oUsers);

let users = [
    { userid: 1, name: "John", email: "jjj@gmail.com" },
    { userid: 2, name: "Marry", email: "mmm@gmail.com" },
    { userid: 3, name: "Anne", email: "aaa@gmail.com" },
    { userid: 3, name: "Or", email: "aaa@gmail.com" },
  ];
// create an function that get an array of numbers as imput
// return the first item with userid === 3

/**find */
let targetUser = users.find(user => user.userid === 3);
// console.log(targetUser);

/**findindex */
let User = users.findIndex(user => user.userid === 3);
// console.log(User);

/**some / every */

let names = ['john', 'Annie', 'Doe']
let result = names.some(item => {
    return item === 'john'
})
// console.log(result);

let result2 = names.every(item => {
    return item === 'john'
})
// console.log(result2);

/** 
Birthday Cake Candles
This array are Birthday Cake Candles
You can blow only the tallest candles
let arr = [2,8,4,4,8,1,8]
birthdayCakeCandles function will return
how many candles you can blow

hint: how to find the max number in a givven array?
*/

function birthdayCakeCandles(arr) {
  let maxNum = Math.max(...arr);
  return arr.filter((item) => item === maxNum).length;
}
// console.log(birthdayCakeCandles([2, 8, 4, 4, 8, 1, 8]));

const maxHeight = (arr) => {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
// console.log(maxHeight);

let nums = [1, 2, 3, 4, 5, 6];
// let a = nums[0]
// let b = nums[1]
// let c = nums[2]

//* rest parameters*/ siempre se tiene que poner al final
// let [a, b, ...d] = nums;
// console.log(a,b,d);

let a = 1;
let b = 2
let c = [3,4,5]

let d = [a,b,...c]
console.log(d);
