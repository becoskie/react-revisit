import "../stylesheets/ui.scss";
import Terrain from 'react-icons/lib/md/terrain'

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
		<span>days</span>
	</div>
	<div className="fancy-days">
		<span>{fancy}</span>
		<span>days</span>
	</div>
	<div className="regular-days">
		<span>{regular}</span>
		<Terrain />
		<span>days</span>
	</div>
	<div>
		<span>
		{calcGoalProgress(total, goal)}
		</span>
	</div>
	</div>
)