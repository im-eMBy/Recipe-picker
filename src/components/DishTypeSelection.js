import reactDom from "react-dom";
import { useSelector } from "react-redux";
import { actionCreators } from "../state/action-creators";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavButtons } from "./NavButtons";

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
    const [sWindow, setSWindow] = useState(window.matchMedia("(max-width: 650px)").matches);
    const [mWindow, setMWindow] = useState(window.matchMedia("(max-width: 1000px)").matches);

    useEffect(() => {
        const sWindowWatcher = window.matchMedia("(max-width: 650px)");
        const mWindowWatcher = window.matchMedia("(max-width: 1000px)");
        const changeS = (ev) => setSWindow(ev.matches);
        const changeM = (ev) => setMWindow(ev.matches);
        sWindowWatcher.addEventListener("change", changeS);
        mWindowWatcher.addEventListener("change", changeM);
        return () => {
            sWindowWatcher.removeEventListener("change", changeS);
            mWindowWatcher.removeEventListener("change", changeM);
        }
    }, [])
    useEffect(() => {
        const overlayElement = reactDom.findDOMNode(document.querySelector(".dish-type__overlay"));
        if (sWindow) {
            overlayElement.style.left = "0%";
            switch (dishType) {
                case "not specified": overlayElement.style.top = `0%`; break;
                case "main course": overlayElement.style.top = `12.5%`; break;
                case "soup": ; overlayElement.style.top = `25%`; break;
                case "starter": overlayElement.style.top = `37.5%`; break;
                case "salad": overlayElement.style.top = `50%`; break;
                case "dessert": overlayElement.style.top = `62.5%`; break;
                case "drinks": overlayElement.style.top = `75%`; break;
                case "condiments": overlayElement.style.top = `87.5%`; break;
                default: overlayElement.style.top = `0%`; break;
            }
            return
        }
        if (mWindow) {
            switch (dishType) {
                case "not specified": overlayElement.style.left = `0%`; overlayElement.style.top = `0%`; break;
                case "main course": overlayElement.style.left = `50%`; overlayElement.style.top = `0%`; break;
                case "soup": overlayElement.style.left = `0%`; overlayElement.style.top = `25%`; break;
                case "starter": overlayElement.style.left = `50%`; overlayElement.style.top = `25%`; break;
                case "salad": overlayElement.style.left = `0%`; overlayElement.style.top = `50%`; break;
                case "dessert": overlayElement.style.left = `50%`; overlayElement.style.top = `50%`; break;
                case "drinks": overlayElement.style.left = `0%`; overlayElement.style.top = `75%`; break;
                case "condiments": overlayElement.style.left = `50%`; overlayElement.style.top = `75%`; break;
                default: overlayElement.style.left = `0%`; overlayElement.style.top = `0%`; break;
            }
            return
        }
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
    }, [dishType, sWindow, mWindow]);

    const handleClick = (ev) => {
        setDishType(ev.currentTarget.value);
    }

    return <>
        <div className="dish-type__outer-container">
            <h1>Choose dish type</h1>
            <div className="dish-type__inner-container">
                <button className="dish-type__option" value="not specified" onClick={(ev) => handleClick(ev)}>
                    <span>Not specified</span>
                </button>
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
        <NavButtons />
    </>
}