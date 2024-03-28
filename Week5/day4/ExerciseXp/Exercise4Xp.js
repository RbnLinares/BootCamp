document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var radius = document.getElementById('radius').value;
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(2); // Round to 2 decimal places

    document.getElementById('volume').value = volume; // Display the result
});