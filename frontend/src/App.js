import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Log from './log'; // Correct import statement for log.js
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
  });

  useEffect(() => {
    // Fetch data from your API
    axios.get('https://localhost:7231/api/Student')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to the server
    axios.post('https://localhost:7231/api/Student/Creatingstudent', formData)
      .then(response => {
        console.log('Data submitted successfully:', response.data);
        // You might want to update the local state with the new data
        setStudents([...students, response.data]);
        setFormData({ name: '', age: '' });
      })
      .catch(error => console.error('Error submitting data:', error));
  };

  return (
    <div>
      <h1><center>Student List</center></h1>
      <table className='table'>
        <thead>
          <tr>
            <th>SNo</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" name="age" value={formData.age} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>


    </div>
  );
}
//nova change
export default App;
