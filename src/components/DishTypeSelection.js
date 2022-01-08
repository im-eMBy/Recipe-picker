import reactDom from "react-dom";
import { useSelector } from "react-redux";
import { actionCreators } from "../state/action-creators";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
//dish type, cuisine, suggested keyword
//main course, starter, soup, drinks, salad, dessert, not spec
import "../scss/_dish-type-selection.scss";

import mainCourseIcon from "../images/icons/main-course.png";
import soupIcon from "../images/icons/soup.png";
import starterIcon from "../images/icons/starter.png";
import saladIcon from "../images/icons/salad.png";
import dessertIcon from "../images/icons/dessert.png";
import drinksIcon from "../images/icons/drinks.png";
import condimentsIcon from "../images/icons/condiments.png";

export const DishTypeSelection = () => {
    const { dishType } = useSelector((state) => state.query);
    const dispatch = useDispatch();
    const { setDishType } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        const overlayElement = reactDom.findDOMNode(document.querySelector(".dish-type__overlay"));
        switch (dishType) {
            case "not specified": overlayElement.style.left = `0%`; overlayElement.style.top = `0%`; break;
            case "main course": overlayElement.style.left = `25%`; overlayElement.style.top = `0%`; break;
            case "soup": overlayElement.style.left = `50%`; overlayElement.style.top = `0%`; break;
            case "starter": overlayElement.style.left = `75%`; overlayElement.style.top = `0%`; break;
            case "salad": overlayElement.style.left = `0%`; overlayElement.style.top = `50%`; break;
            case "dessert": overlayElement.style.left = `25%`; overlayElement.style.top = `50%`; break;
            case "drinks": overlayElement.style.left = `50%`; overlayElement.style.top = `50%`; break;
            case "condiments": overlayElement.style.left = `75%`; overlayElement.style.top = `50%`; break;
            default: overlayElement.style.left = `0%`; break;
        }
    }, [dishType]);

    const handleClick = (ev) => {
        setDishType(ev.currentTarget.value);
    }

    return <div className="dish-type__outer-container">
        <h1>Choose dish type</h1>
        <div className="dish-type__inner-container">
            <button className="dish-type__option" value="not specified" onClick={(ev) => handleClick(ev)}>Not specified</button>
            <button className="dish-type__option" value="main course" onClick={(ev) => handleClick(ev)}>
                <span>Main course</span>
                <div className="icon-container dish-type__icon-container">
                    <img src={mainCourseIcon} alt="" />
                </div>
            </button>
            <button className="dish-type__option" value="soup" onClick={(ev) => handleClick(ev)}>
                <span>Soup</span>
                <div className="icon-container dish-type__icon-container">
                    <img src={soupIcon} alt="" />
                </div>
            </button>
            <button className="dish-type__option" value="starter" onClick={(ev) => handleClick(ev)}>
                <span>Starter</span>
                <div className="icon-container dish-type__icon-container">
                    <img src={starterIcon} alt="" />
                </div>
            </button>
            <button className="dish-type__option" value="salad" onClick={(ev) => handleClick(ev)}>
                <span>Salad</span>
                <div className="icon-container dish-type__icon-container">
                    <img src={saladIcon} alt="" />
                </div>
            </button>
            <button className="dish-type__option" value="dessert" onClick={(ev) => handleClick(ev)}>
                <span>Dessert</span>
                <div className="icon-container dish-type__icon-container">
                    <img src={dessertIcon} alt="" />
                </div>
            </button>
            <button className="dish-type__option" value="drinks" onClick={(ev) => handleClick(ev)}>
                <span>Drinks</span>
                <div className="icon-container dish-type__icon-container">
                    <img src={drinksIcon} alt="" />
                </div>
            </button>
            <button className="dish-type__option" value="condiments" onClick={(ev) => handleClick(ev)}>
            <span>Condiments and Sauces</span>
                <div className="icon-container dish-type__icon-container">
                    <img src={condimentsIcon} alt="" />
                </div>
            </button>
            <div className="dish-type__overlay"></div>
        </div>
    </div>
}