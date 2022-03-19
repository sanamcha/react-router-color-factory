import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import ColorList from "./ColorList";
import ColorForm from "./ColorForm";
import ColorText from "./ColorText";


function Routes() {

  const initColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  };
  const [colors, updateColors] = useState(initColors);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  function handleAddColor(newColorObject) {
    updateColors(previousColors => ({ ...previousColors, ...newColorObject }));
  }

  function renderCurrColor(props) {
    const { color } = props.match.params;
  
    const hex = colors[color];

    return (
    <ColorText {...props} hex={hex} color={color} />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <ColorForm addColor={handleAddColor} />
        </Route>
        <Route path="/colors/:color" render={renderCurrColor} />
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
