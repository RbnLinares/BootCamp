// Async in JS
// Promises, Async Await
// Callback

// function getX(){
//     setTimeout(()=>{
//         return 5
//     }, 2000);
// }

// function getY(){
//     return 6
// }

// function getXY(){
//     let x = getX();
//     console.log('x=>', x);
//     let y = getY();
//     console.log('y=>', y);
//     console.log('x+y=>', x+y);
// }

// getXY();

// setTimeout, setInterval 

// Callback //
// function mycallback(){
// console.log('collback executed!');
// }

// function exeCallback(func){
//     func()
// }

// exeCallback(mycallback)

// function getX(Callback){
//     setTimeout(()=>{
//         Callback (5)
//     }, 2000);
// }

// function getY(Callback){
//     Callback (6)
// }

// function getXY(){
//     getX((x)=>{
//         getY((y)=>{
//             console.log(x+y);
//         })
//     })
// }
// getXY();

// const getX = () =>{
//     return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(5);
//     },3000);        
//     });
// }

// const getY = () =>{
//     return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(6);
//     },2000);        
//     });
// }
// getX().then((x)=>{
//     getY().then((y)=>{
//         console.log(x+y);
//     }
//     )
// })


// Step 1: Define the getDataFromServer function
function getDataFromServer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { username: "aaa", email: "aaa@gmail.com" },
                { username: "bbb", email: "bbb@gmail.com" },
                { username: "ccc", email: "ccc@gmail.com" },
            ]);
        }, 2000);
    });
}

// Step 2: Call the getDataFromServer function and log the data
getDataFromServer().then(data => {
    console.log(data); // This will log the data array
    render(data); // Call the render function to display the users
}).catch(error => {
    console.error("Error fetching data:", error);
});

// Step 3: Simulate an error
// Uncomment the following line to simulate an error
getDataFromServer().then(data => console.log(data)).catch(error => console.error("Simulated error:", error));

// Step 4: Define the render function
function render(users) {
    // Assuming we have a div with id 'users' in our HTML to display the users
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = ''; // Clear any previous content

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.textContent = `${user.username} - ${user.email}`;
        usersDiv.appendChild(userDiv);
    });
}


