import React from "react";
import { render } from "react-dom";
import { RestaurantList } from "./components/RestaurantList";

window.React = React;

render(
  <RestaurantList
    days={[
      {
        place: "Subway",
        date: new Date("10/30/2018"),
        fancy: false,
        regular: true
      },
      {
        place: "Caffe Latte",
        date: new Date("11/4/2018"),
        fancy: true,
        regular: false
      },
      {
        place: "Applebees",
        date: new Date("11/18/2018"),
        fancy: false,
        regular: false
      }
    ]}
  />,
  document.getElementById("react-container")
);
