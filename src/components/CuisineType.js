import { useSelector } from "react-redux";
import { actionCreators } from "../state/action-creators";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

import "../scss/_cuisine-type.scss";

export const CuisineType = () => {
    const { cuisineType } = useSelector((state) => state.query);
    const dispatch = useDispatch();
    const { setCuisineType } = bindActionCreators(actionCreators, dispatch);

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

    return <div className="cuisine-type__outer-container">
        <h1>What kind of cuisine do you prefer?</h1>
        <div className="cuisine-type__inner-container">
            <button className={cuisineType.length === 0 ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="any" onClick={(ev) => handleClick(ev)}>
                <span>Any</span>
            </button>
            <button className={cuisineType.includes("American") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="American" onClick={(ev) => handleClick(ev)}>
                <span>American</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={mainCourseIcon} alt="" /> */}
                </div>
            </button>
            <button className={cuisineType.includes("Central Europe") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="Central Europe" onClick={(ev) => handleClick(ev)}>
                <span>Central Europe</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={starterIcon} alt="" /> */}
                </div>
            </button>
            <button className={cuisineType.includes("Eastern Europe") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="Eastern Europe" onClick={(ev) => handleClick(ev)}>
                <span>Eastern Europe</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={saladIcon} alt="" /> */}
                </div>
            </button>
            <button className={cuisineType.includes("Middle Eastern") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="Middle Eastern" onClick={(ev) => handleClick(ev)}>
                <span>Middle Eastern</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={dessertIcon} alt="" /> */}
                </div>
            </button>
            <button className={cuisineType.includes("South East Asian") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="South East Asian" onClick={(ev) => handleClick(ev)}>
                <span>South East Asian</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={drinksIcon} alt="" /> */}
                </div>
            </button>
            <button className={cuisineType.includes("South American") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="South American" onClick={(ev) => handleClick(ev)}>
                <span>South American</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={condimentsIcon} alt="" /> */}
                </div>
            </button>
            <button className={cuisineType.includes("Nordic") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="Nordic" onClick={(ev) => handleClick(ev)}>
                <span>Nordic</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={condimentsIcon} alt="" /> */}
                </div>
            </button>
            <button className={cuisineType.includes("Mediterranean") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="Mediterranean" onClick={(ev) => handleClick(ev)}>
                <span>Mediterranean</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={condimentsIcon} alt="" /> */}
                </div>
            </button>
            <button className={cuisineType.includes("British") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="British" onClick={(ev) => handleClick(ev)}>
                <span>British</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={condimentsIcon} alt="" /> */}
                </div>
            </button>
            <button className={cuisineType.includes("Chinese") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="Chinese" onClick={(ev) => handleClick(ev)}>
                <span>Chinese</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={condimentsIcon} alt="" /> */}
                </div>
            </button>
            <button className={cuisineType.includes("Indian") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="Indian" onClick={(ev) => handleClick(ev)}>
                <span>Indian</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={condimentsIcon} alt="" /> */}
                </div>
            </button>
            <button className={cuisineType.includes("French") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="French" onClick={(ev) => handleClick(ev)}>
                <span>French</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={condimentsIcon} alt="" /> */}
                </div>
            </button>
            <button className={cuisineType.includes("Italian") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="Italian" onClick={(ev) => handleClick(ev)}>
                <span>Italian</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={condimentsIcon} alt="" /> */}
                </div>
            </button>
            <button className={cuisineType.includes("Japanese") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="Japanese" onClick={(ev) => handleClick(ev)}>
                <span>Japanese</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={condimentsIcon} alt="" /> */}
                </div>
            </button>
            <button className={cuisineType.includes("Mexican") ? "cuisine-type__option cuisine-type__option--active" : "cuisine-type__option"} value="Mexican" onClick={(ev) => handleClick(ev)}>
                <span>Mexican</span>
                <div className="icon-container cuisine-type__icon-container">
                    {/* <img src={condimentsIcon} alt="" /> */}
                </div>
            </button>
        </div>
    </div>
}