import React, { useState } from 'react';
import '../components/AddMovie.css';

const AddMovieForm = ({ onAddMovie }) => {
  // Define state to hold form data
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    genre: '',
    description: ''
  });

  // Function to handle changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required form fields are filled
    if (formData.name && formData.year && formData.genre && formData.description) {
      onAddMovie(formData);
      // Reset form data after adding movie
      setFormData({ name: '', year: '', genre: '', description: '' });
    } else {
      // If any required field is empty, show alert
      alert('Please fill in at least two required fields.');
    }
  };


  // Form component with onSubmit event handler
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="number" name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
      <input type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
