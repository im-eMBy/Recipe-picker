import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";

import { RecipePreview } from "./RecipePreview";

import rejectIcon from "../images/icons/reject.png";
import acceptIcon from "../images/icons/accept.png";

import "../scss/_single-recipes-select.scss";

export const SingleRecipeSelect = ({ nextPage }) => {
    const dispatch = useDispatch();
    const { setRecipes, addSelectedRecipe, removeSelectedRecipe } = bindActionCreators(actionCreators, dispatch);
    const { recipes, selectedRecipes } = useSelector((state) => state.app);
    const [currentRecipe, setCurrentRecipe] = useState(0);

    const handleRecipeRejection = () => {
        setCurrentRecipe(currentRecipe + 1);
        if (currentRecipe === recipes.length - 1) nextPage();
    }
    const handleRecipeSelection = () => {
        addSelectedRecipe(recipes[currentRecipe]);
        setCurrentRecipe(currentRecipe + 1);
        if (currentRecipe === recipes.length - 1) nextPage();
    }

    return <div className="single-recipes-select__outer-container">
        <h1>Choose recipes that seems intresting for you</h1>
        <RecipePreview recipeData={recipes[currentRecipe]} />
        <div className="single-recipes-select__buttons-container">
            <button className="single-recipes-select__button" onClick={() => handleRecipeRejection()}>
                <span>Reject</span>
                <div className="icon-container">
                    <img src={rejectIcon} />
                </div>
            </button>
            <button className="single-recipes-select__button" onClick={() => handleRecipeSelection()}>
                <span>Accept</span>
                <div className="icon-container">
                    <img src={acceptIcon} />
                </div>
            </button>
        </div>
    </div>
}