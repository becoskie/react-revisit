import { Component } from "react";
import "../stylesheets/ui.scss";

export class RestaurantCount extends Component {
  percentToDecimal(decimal) {
    return decimal * 100 + "%";
  }
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total / goal);
  }

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
          <span>
            {this.calcGoalProgress(this.props.total, this.props.goal)}
          </span>
        </div>
      </div>
    );
  }
}
