import { FaCoffee } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import { RestaurantRow } from "./RestaurantRow";

export const RestaurantList = ({ days }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Place</th>
        <th>Fancy</th>
        <th>Regular</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) => (
        <RestaurantRow key={i} {...day} />
      ))}
    </tbody>
  </table>
);
