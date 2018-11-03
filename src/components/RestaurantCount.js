import React from 'react'
import '../stylesheets/ui.scss'

export const RestaurantCount = React.createClass ({
	render() {
		return (
			<div className="restaurant-day-count">
				<div className="total-days">
					<span>5 days</span>
				</div>
				<div className="fancy-days">
					<span>2 days</span>
				</div>
				<div className="regular-days">
					<span>1 day</span>
				</div>
			</div>
		)
	}
})