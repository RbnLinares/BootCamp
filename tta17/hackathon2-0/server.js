const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'contacts',
    password: '1234',
    port: 5432,
});

app.post('/submit-contact', async (req, res) => {
    const { name, email } = req.body;
    try {
        await pool.query('INSERT INTO contacts(name, email) VALUES($1, $2)', [name, email]);
        res.send('Contact information submitted successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred.');
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
