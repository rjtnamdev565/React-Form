import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    contactNo: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, contactNo } = formData;

    if (!firstName || !lastName || !contactNo) {
      const errors = {};
      if (!firstName) errors.firstName = 'First name is required';
      if (!lastName) errors.lastName = 'Last name is required';
      if (!contactNo) errors.contactNo = 'Contact number is required';
      setFormErrors(errors);
      return;
    }

    // Here, you can perform actions like sending the form data to a backend

    setSubmitted(true);
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      contactNo: '',
      message: ''
    });

    // You can display a success message in a popup or notification
    alert('Successfully submitted!');
  };

  return (
    <div>
      {submitted ? (
        <div className="success-message">
          Successfully submitted!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
          </div>
          <div>
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Contact No *</label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
            />
            {formErrors.contactNo && <span className="error">{formErrors.contactNo}</span>}
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
