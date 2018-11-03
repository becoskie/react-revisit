import React from "react";
import "../stylesheets/ui.scss";

export const RestaurantCount = React.createClass({
  render() {
    return (
      <div className="restaurant-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
          <span>days</span>
        </div>
        <div className="fancy-days">
          <span>{this.props.fancy}</span>
          <span>days</span>
        </div>
        <div className="regular-days">
          <span>{this.props.regular}</span>
          <span>days</span>
        </div>
        <div>
          <span>{this.props.goal}</span>
        </div>
      </div>
    );
  }
});
