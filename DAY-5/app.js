const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: false }));
// Middleware to parse JSON data (for API)
app.use(express.json());

// Serve form page on root
const path = require('path');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Store students data in array
let students = [];

// POST route to handle form submission
app.post('/students', (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    age: parseInt(req.body.age),
  };
  students.push(newStudent);

  // JSON response showing the submitted student data
  res.json(newStudent);
});

// GET route to see all students (optional)
app.get('/students', (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
