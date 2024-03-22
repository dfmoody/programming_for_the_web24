import { useState } from 'react'
import './App.css'

function generalForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    stateProvince: '',
    country: '',
    favoriteColors: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          favoriteColors: [...prevData.favoriteColors, value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          favoriteColors: prevData.favoriteColors.filter((color) => color !== value),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className='formInput'>
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Street Address:
          <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} />
        </label>
        <br />
        <label>
          State/Province:
          <input type="text" name="stateProvince" value={formData.stateProvince} onChange={handleChange} />
        </label>
        <br />
        <label>
          Country:
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </label>
        <br />
        <label>
          Favorite Alpaca Colors:
          <br />
          <input type="checkbox" name="favoriteColors" value="Almond" onChange={handleChange} /> Almond
          <br />
          <input type="checkbox" name="favoriteColors" value="Mahogany" onChange={handleChange} /> Mahogany
          <br />
          <input type="checkbox" name="favoriteColors" value="Goldenrod" onChange={handleChange} /> Goldenrod
          <br />
          <input type="checkbox" name="favoriteColors" value="Sienna" onChange={handleChange} /> Sienna
          <br />
        </label>
      </form>

      <div className='formOutput'>
        <h2>FORM OUTPUT</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Street Address: {formData.streetAddress}</p>
        <p>State/Province: {formData.stateProvince}</p>
        <p>Country: {formData.country}</p>
        <p>Favorite Alpaca Colors: {formData.favoriteColors.join(', ')}</p>
      </div>
    </div>
  );
}

export default generalForm;