import "../stylesheets/ui.scss";
import { FaCoffee } from 'react-icons/fa'
import { FaCocktail } from 'react-icons/fa'
import { GoCalendar } from 'react-icons/go'

const percentToDecimal = (decimal) => {
	return decimal * 100 + "%";
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total / goal);
}
 

export const RestaurantCount = ({total, fancy, regular, goal}) => (
	<div className="restaurant-day-count">
	<div className="total-days">
		<span>{total}</span>
		<GoCalendar />
		<span>days</span>
	</div>
	<div className="fancy-days">
		<span>{fancy}</span>
		<FaCocktail />
		<span>days</span>
	</div>
	<div className="regular-days">
		<span>{regular}</span>
		<FaCoffee />
		<span>days</span>
	</div>
	<div>
		<span>
		{calcGoalProgress(total, goal)}
		</span>
	</div>
	</div>
)