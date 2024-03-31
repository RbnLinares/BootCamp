(function(userName) {
    const userWelcomeDiv = document.createElement('div');
    
    userWelcomeDiv.innerHTML = `Welcome, ${userName}! <img src="" alt="Profile Picture" />`;
    
    document.getElementById('navbar').appendChild(userWelcomeDiv);
})('King');
