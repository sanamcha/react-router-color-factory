import React from "react";
import { Link } from "react-router-dom";


function ColorText({hex, color, history}) {
  if (!hex) {
    history.push("/colors");

  }

  return (
    <div className="ColorText" style={{ backgroundColor: hex }}>
      <p>This is <em>{color}</em> color.</p>
      <p>Isn't it beautiful? </p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
}

export default ColorText;
