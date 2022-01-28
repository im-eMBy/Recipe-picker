import { useSelector } from "react-redux";
import { actionCreators } from "../state/action-creators";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

import "../scss/_cuisine-type.scss";

export const CuisineType = () => {
    const { cuisineType } = useSelector((state) => state.query);
    const dispatch = useDispatch();
    const { setCuisineType } = bindActionCreators(actionCreators, dispatch);
    const cuisines = ["American", "Central Europe", "Eastern Europe", "Middle Eastern", "South East Asian", "South American", "Nordic", "Mediterranean", "British", "Chinese", "Indian", "French", "Italian", "Japanese", "Mexican"]

    const handleClick = (ev) => {
        if (ev.currentTarget.value === "any") {
            setCuisineType([]);
            ev.currentTarget.className = "cuisine-type__option cuisine-type__option--active";
            return;
        }
        if(cuisineType.includes(ev.currentTarget.value)) {
            setCuisineType(cuisineType.filter(cuisine => cuisine !== ev.currentTarget.value));
            return;
        }
        setCuisineType([...cuisineType, ev.currentTarget.value])
    }

    const getCuisinesButtons = () => {
        return cuisines.map(cuisine => {
            return <button key={cuisine} className={cuisineType.includes(cuisine) ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value={cuisine} onClick={(ev) => handleClick(ev)}>
                <span>{cuisine}</span>
            </button>
        })
    }

    return <div className="cuisine-type__outer-container">
        <h1>What kind of cuisine do you prefer?</h1>
        <div className="cuisine-type__inner-container">
            <button className={cuisineType.length === 0 ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="any" onClick={(ev) => handleClick(ev)}>
                <span>Any</span>
            </button>
            {getCuisinesButtons()}
        </div>
    </div>
}