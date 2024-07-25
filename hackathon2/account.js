function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

let username = getCookie("username");
if (username) {
    // Selecciona el elemento <span> por su ID y actualiza su contenido de texto
    document.getElementById('userNameDisplay').textContent = username;
}


// Function to save the annual income
function saveAnnualIncome() {
    const annualIncome = document.getElementById('annualIncome').value;
    if (annualIncome) {
        localStorage.setItem('annualIncome', annualIncome);
        alert('Annual income saved successfully.');
    } else {
        alert('Please enter your annual income.');
    }
}

// Function to dynamically add input fields for each month
function addMonthlyExpenseInputs() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const expensesSection = document.getElementById('monthlyExpensesInputs');

    months.forEach(month => {
        const label = document.createElement('label');
        label.textContent = `${month}: `;
        expensesSection.appendChild(label);

        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = 'Enter expenses';
        input.id = `expense-${month}`; // Assign a unique ID for each input
        expensesSection.appendChild(input);

        expensesSection.appendChild(document.createElement('br'));
    });
}

// Function to save monthly expenses
function saveMonthlyExpenses() {
    const expenses = {};
    const inputs = document.querySelectorAll('#monthlyExpensesInputs input');
    inputs.forEach(input => {
        const month = input.previousSibling.textContent.trim().split(':')[0]; // Extract the month from the label
        expenses[month] = input.value;
    });
    localStorage.setItem('monthlyExpenses', JSON.stringify(expenses));
    alert('Monthly expenses saved successfully.');
}

// Function to display saved monthly expenses
function showSavedMonthlyExpenses() {
    const expenses = JSON.parse(localStorage.getItem('monthlyExpenses'));
    if (expenses) {
        let expensesList = '';
        for (const month in expenses) {
            expensesList += `${month}: ${expenses[month]}`;
        }
        alert(`Saved monthly expenses:\n${expensesList}`);
    } else {
        alert('No monthly expenses saved.');
    }
}

// Call the function to add monthly expense inputs when the page loads
document.addEventListener('DOMContentLoaded', addMonthlyExpenseInputs);

document.addEventListener('DOMContentLoaded', function() {
    let myChart; // Declarar la variable myChart fuera del alcance del evento

    // Aquí va tu código para inicializar o actualizar el gráfico
    // Por ejemplo, inicializar el gráfico si no existe
    if (!myChart) {
        const ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                datasets: [{
                    label: 'Expenses',
                    data: [], 
                    borderColor: 'red',
                    fill: false
                }, {
                    label: 'Savings',
                    data: [],
                    borderColor: 'blue',
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});


