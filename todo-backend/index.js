const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = req.body.todo;
  if (!todo || todo.length > 140) {
    return res.status(400).json({ error: 'Invalid todo' });
  }
  todos.push(todo);
  res.status(201).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Todo backend listening on port ${PORT}`);
});
