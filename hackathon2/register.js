document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var today = new Date();
    var expiry = new Date(today.getTime() + 1 * 24 * 3600 * 1000); 
    document.cookie = "username=" + encodeURIComponent(username) + "; path=/; expires=" + expiry.toGMTString();

    window.location.href = 'account.html';
});

