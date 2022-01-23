import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";

import { RecipePreview } from "./RecipePreview";

import websiteIcon from "../images/icons/website.png";
import deleteIcon from "../images/icons/delete.png";
import previousIcon from "../images/icons/previous.png";
import nextIcon from "../images/icons/next.png";


import "../scss/_recipe-select.scss";

export const RecipeSelect = ({ nextPage }) => {
    const dispatch = useDispatch();
    const { setRecipes } = bindActionCreators(actionCreators, dispatch);
    const { recipes } = useSelector((state) => state.app);
    const [currentRecipe, setCurrentRecipe] = useState(0);

    const handleNextRecipe = () => {
        if (currentRecipe + 1 > recipes.length - 1) {
            setCurrentRecipe(0);
            return
        }
        setCurrentRecipe(currentRecipe + 1);
    }
    const handlePreviousRecipe = () => {
        if (currentRecipe - 1 < 0) {
            setCurrentRecipe(recipes.length - 1);
            return
        }
        setCurrentRecipe(currentRecipe - 1);
    }
    const handleRecipeRejection = () => {
        setRecipes(recipes.filter(recipe => recipe !== recipes[currentRecipe]));
    }
    const handleShowRecipe = () => {
        window.open(recipes[currentRecipe].url, "_blank")
    }
    // const handleRecipeSelection = () => {
    //     addSelectedRecipe(recipes[currentRecipe]);
    //     setCurrentRecipe(currentRecipe + 1);
    //     if (currentRecipe === recipes.length - 1) nextPage();
    // }

    return <>
        <div className="recipes-select__outer-container">
            <h1>Choose your recipe</h1>
            <RecipePreview recipeData={recipes[currentRecipe]} />
            <div className="recipes-select__buttons-container">
                <button className="recipes-select__button" onClick={() => handlePreviousRecipe()}>
                    <div className="icon-container">
                        <img src={previousIcon} />
                    </div>
                    <span>Previous</span>
                </button>
                <div className="recipes-select__buttons-center">
                    <button className="recipes-select__button" onClick={() => handleRecipeRejection()}>
                        <span>Reject</span>
                        <div className="icon-container">
                            <img src={deleteIcon} />
                        </div>
                    </button>
                    <button className="recipes-select__button" onClick={() => handleShowRecipe()}>
                        <span>Check recipe</span>
                        <div className="icon-container">
                            <img src={websiteIcon} />
                        </div>
                    </button>
                </div>
                <button className="recipes-select__button" onClick={() => handleNextRecipe()}>
                    <span>Next</span>
                    <div className="icon-container">
                        <img src={nextIcon} />
                    </div>
                </button>
            </div>
        </div>
        <button className="recipes-select__restart-button">Restart</button>
    </>
}