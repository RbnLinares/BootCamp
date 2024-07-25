const express = require('express');
const app = express();
const port = 3000;

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

