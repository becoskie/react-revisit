import React from "react";
import { render } from "react-dom";
import { RestaurantCount } from "./components/RestaurantCount";

window.React = React;

render(
  <RestaurantCount total={50} fancy={20} regular={10} goal={100} />,
  document.getElementById("react-container")
);
