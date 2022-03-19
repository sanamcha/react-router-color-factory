import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const ColorForm = ({addColor}) => {

  const [form, changeForm] = useState({name: "", hex:"#0000ff"});
  const history = useHistory();

  const handleChange = (e) => {
    e.persist();
    changeForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ [form.name]: form.hex });
    history.push("/colors");
  }

  const {hex, name} = form;

  return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color name : </label>
          <input
            name="name"
            id="name"
            placeholder="Enter color name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="hex">Color value : </label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={hex}
          />
        </div>
        <input type="Submit" value="Add this color" readOnly />
      </form>
    </div>
  );
}

export default ColorForm;
