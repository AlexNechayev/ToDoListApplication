const Todo = require('../models/todo');

// todo_index, todo_post, todo_details, todo_delete, todo_update

const todo_index = (req, res) => {
  Todo.find().sort({ createdAt: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}

const todo_post = (req, res) => {
  const todo = new Todo(req.body);

  todo.save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
}

const todo_details = (req, res) => {
  const id = req.params.id;

  Todo.findById(id)
    .then((result) => {
      if(result === null) {
        return res.status(404).json({ message: 'Cannot find todo' });
      } else {
        res.json(result);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}

const todo_delete = (req, res) => {
  const id = req.params.id;

  Todo.findByIdAndDelete(id)
    .then((result) => {
      if(result === null) {
        return res.status(404).json({ message: 'Cannot find todo' });
      } else {
      res.json({ message: 'Deleted Todo' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}

const todo_update = (req, res) => {
  const id = req.params.id;
  const updatedTodo = req.body;
  
  if(updatedTodo != null) {
    Todo.findByIdAndUpdate(id, updatedTodo)
      .then((result) => {
        res.status(200).json({ message: 'Todo Updated' });
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  }
  
}

module.exports = {
  todo_index,
  todo_post,
  todo_details,
  todo_delete,
  todo_update
}