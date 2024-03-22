import { useState } from "react";
import "./generalForm.css";

export default function GeneralForm() {
    const initialFormData = {
        firstName: "",
        lastName: "",
        street: "",
        state: "Colorado",
        country: "",
        colors: [],
    }
    const states = [
        "Alaska",
        "Alabama",
        "Arkansas",
        "American Samoa",
        "Arizona",
        "California",
        "Colorado",
        "Connecticut",
        "District of Columbia",
        "Delaware",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Iowa",
        "Idaho",
        "Illinois",
        "Indiana",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Massachusetts",
        "Maryland",
        "Maine",
        "Michigan",
        "Minnesota",
        "Missouri",
        "Mississippi",
        "Montana",
        "North Carolina",
        "North Dakota",
        "Nebraska",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "Nevada",
        "New York",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Virginia",
        "Virgin Islands",
        "Vermont",
        "Washington",
        "Wisconsin",
        "West Virginia",
        "Wyoming"
    ]

    const[formObject, setFormObject] = useState(initialFormData);
    function changeHandler(event) {
        console.log(event.target.value);
        if(event.target.name === "colors") {
        const colorName = event.target.id;
        if(formObject.colors.includes(colorName)) {
            setFormObject({
            ...formObject,
            colors: formObject.colors.filter ((color) => color !== colorName)
            })
        } else {
            setFormObject({
            ...formObject,
            colors: [...formObject.colors, colorName]
            })
        }
        } else {
        setFormObject((previousForm) => {
        console.log(event.target.name)

            return {
            ...previousForm,
            [event.target.name]: event.target.value
            }
        })
        }
    }
    function handleSubmit (event) {
        event.preventDefault();
        console.log("the whole form object", formObject)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Personal Information</legend>
                <div className="formgroup">
                <label htmlFor="firstName">
                    First Name
                </label>
                <input
                    type="text"
                    name="firstName" 
                    id="firstName" 
                    value={formObject.firstName} 
                    onChange={changeHandler}
                />
                </div>
                <div className="formgroup">
                <label htmlFor="lastName">
                    Last Name
                </label>
                <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                value={formObject.lastName} 
                onChange={changeHandler}
                />
                </div>
                <div className="formgroup">
                <label htmlFor="lastName">
                    Street Address
                </label>
                <input 
                type="text" 
                name="street" 
                id="street" 
                value={formObject.street} 
                onChange={changeHandler}
                />
                </div>
                <div className="formgroup">
                <label htmlFor="state">State</label>
                <select 
                name="state" 
                id="state"
                value={formObject.state} 
                onChange={changeHandler}
                >
                    {states.map((singleState, index) => {
                        return (
                            <option key={index} value={singleState}>{singleState}</option>
                        )
                    })}
                </select>
                </div>
                <div className="formgroup">
                <label htmlFor="country">Country</label>
                <input 
                type="text" 
                name="country" 
                id="country" 
                value={formObject.country} 
                onChange={changeHandler}
                />
                </div>
            </fieldset>
            <fieldset>
                <legend>Tell us about your Alpaca Interests</legend>
                <p>Favorite Alpaca Colors!</p>
                <div className="formgroup">
                <label htmlFor="almond">
                    Almond
                    <input type="checkbox" 
                    name="colors" 
                    id="almond" 
                    checked={formObject.colors.includes("almond")}
                    onChange={changeHandler}
                    />
                </label>
                <label htmlFor="mahogany">
                    Mahogany
                    <input 
                    type="checkbox" 
                    name="colors" 
                    id="mahogany" 
                    checked={formObject.colors.includes("mahogany")}
                    onChange={changeHandler}
                    />
                </label>
                <label htmlFor="goldenrod">
                    Goldenrod
                    <input 
                    type="checkbox" 
                    name="colors" 
                    id="goldenrod"
                    checked={formObject.colors.includes("goldenrod")}
                    onChange={changeHandler} 
                    />
                </label>
                <label htmlFor="sienna">
                    Sienna
                    <input 
                    type="checkbox" 
                    name="colors" 
                    id="sienna" 
                    checked={formObject.colors.includes("sienna")}
                    onChange={changeHandler}
                    />
                </label>
                </div>
            </fieldset>
            <button type="submit">
                Sign me up
            </button>
            </form>
        </>
    )
}
    