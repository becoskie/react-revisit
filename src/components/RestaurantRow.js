import { FaCoffee } from 'react-icons/fa'
import { FaCocktail } from 'react-icons/fa'
import { GoCalendar } from 'react-icons/go'

export const RestaurantRow = ({place, date, fancy, regular}) => (
    <tr>
        <td>
            {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
        </td>
        <td>
            {place}
        </td>
        <td>
            {(fancy) ? <FaCocktail/> : null}
        </td>
        <td>
        {(regular) ? <FaCoffee/> : null}
        </td>
    </tr>
)