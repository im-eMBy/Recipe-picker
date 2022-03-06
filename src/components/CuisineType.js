import { useSelector } from "react-redux";
import { actionCreators } from "../state/action-creators";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { NavButtons } from "./NavButtons";
import { apiGetRecipes } from "../api/api-request";
import { generateURL } from "../api/generate-url";

import "../scss/_cuisine-type.scss";

export const CuisineType = () => {
    const queryState = useSelector((state) => state.query);
    const { cuisineType } = queryState;
    const dispatch = useDispatch();
    const { setCuisineType, setRecipes } = bindActionCreators(actionCreators, dispatch);
    const cuisines = ["American", "Central Europe", "Eastern Europe", "Middle Eastern", "South East Asian", "South American", "Nordic", "Mediterranean", "British", "Chinese", "Indian", "French", "Italian", "Japanese", "Mexican"]

    const handleClick = (ev) => {
        if (ev.currentTarget.value === "any") {
            setCuisineType([]);
            ev.currentTarget.className = "cuisine-type__option cuisine-type__option--active";
            return;
        }
        if (cuisineType.includes(ev.currentTarget.value)) {
            setCuisineType(cuisineType.filter(cuisine => cuisine !== ev.currentTarget.value));
            return;
        }
        setCuisineType([...cuisineType, ev.currentTarget.value])
    }

    const handleNextPage = () => {
        apiGetRecipes(generateURL(queryState), setRecipes);
    }

    const getCuisinesButtons = () => {
        return cuisines.map(cuisine => <button key={cuisine} value={cuisine} onClick={handleClick} className={cuisineType.includes(cuisine) ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"}>{cuisine}</button>)
    }

    return <>
        <div className="cuisine-type__outer-container">
            <h1>What kind of cuisine do you prefer?</h1>
            <div className="cuisine-type__inner-container">
                <button value="any" onClick={handleClick} className={cuisineType.length === 0 ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"}>Any</button>
                {getCuisinesButtons()}
            </div>
        </div>
        <NavButtons onNext={handleNextPage} />
    </>
}