import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    contactNo: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.contactNo) {
      return toast.error('First Name, Last Name, and Contact No are required.');
    }

    // Simulate form submission (you can send the data to a server here)
    // For now, just show a success message
    toast.success('Form submitted successfully!');
  };

  return (
    <div className="App">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </label>
        <label>
          Middle Name:
          <input type="text" name="middleName" value={formData.middleName} onChange={handleInputChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          Contact No:
          <input type="tel" name="contactNo" value={formData.contactNo} onChange={handleInputChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;
