import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Directory</h1>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              {student.name} (Age: {student.age})
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
