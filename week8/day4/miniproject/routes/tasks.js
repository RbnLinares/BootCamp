const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { db } = require("../config/data.js");



const tasksFilePath = path.join(__dirname, '..', 'tasks.json');

// GET /tasks
router.get('/', (req, res) => {
  fs.readFile(tasksFilePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err);;
    } else {
      res.send(JSON.parse(data));
    }
  });
});

// GET /tasks/:id
router.get('/:id', (req, res) => {
  fs.readFile(tasksFilePath, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
      const tasks = JSON.parse(data);
      const task = tasks.find(t => t.id === req.params.id);
      if (task) {
        res.send(task);
      } else {
        res.status(404).send('Task not found');
      }
    }
  });
});

// POST /tasks
router.post('/', express.json(), (req, res) => {
  const newTask = req.body;
  fs.readFile(tasksFilePath, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
      const tasks = JSON.parse(data);
      tasks.push(newTask);
      fs.writeFile(tasksFilePath, JSON.stringify(tasks), 'utf8', err => {
        if (err) {
            console.log(err);
        } else {
          res.send(newTask);
        }
      });
    }
  });
});

// PUT /tasks/:id
router.put('/:id', express.json(), (req, res) => {
  const updatedTask = req.body;
  fs.readFile(tasksFilePath, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
      const tasks = JSON.parse(data);
      const index = tasks.findIndex(t => t.id === req.params.id);
      if (index !== -1) {
        tasks[index] = updatedTask;
        fs.writeFile(tasksFilePath, JSON.stringify(tasks), 'utf8', err => {
          if (err) {
            console.log(err);
          } else {
            res.send(updatedTask);
          }
        });
      } else {
        res.status(404).send('Task not found');
      }
    }
  });
});

// DELETE /tasks/:id
router.delete('/:id', (req, res) => {
  fs.readFile(tasksFilePath, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
      const tasks = JSON.parse(data);
      const index = tasks.findIndex(t => t.id === req.params.id);
      if (index !== -1) {
        tasks.splice(index, 1);
        fs.writeFile(tasksFilePath, JSON.stringify(tasks), 'utf8', err => {
          if (err) {
            console.log(err);
          } else {
            res.send({ message: 'Task deleted' });
          }
        });
      } else {
        res.status(404).send('Task not found');
      }
    }
  });
});

module.exports = router;
