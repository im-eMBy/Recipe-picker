import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";

import { RecipePreview } from "./RecipePreview";

export const SingleRecipeSelect = ({ nextPage }) => {
    const dispatch = useDispatch();
    const { setRecipes, addSelectedRecipe, removeSelectedRecipe } = bindActionCreators(actionCreators, dispatch);
    const { recipes, selectedRecipes } = useSelector((state) => state.app);
    const [currentRecipe, setCurrentRecipe] = useState(0);

    const handleRecipeRejection = () => {
        setCurrentRecipe(currentRecipe + 1);
        if(currentRecipe === recipes.length - 1) nextPage();
    }
    const handleRecipeSelection = () => {
        addSelectedRecipe(recipes[currentRecipe]);
        setCurrentRecipe(currentRecipe + 1);
        if(currentRecipe === recipes.length - 1) nextPage();
    }

    return <div className="single-recipe-select">
        <RecipePreview recipeData={recipes[currentRecipe]} />
        <div className="single-recipe-select__buttons-container">
            <button onClick={() => handleRecipeRejection()}>Reject</button>
            <button onClick={() => handleRecipeSelection()}>Accept</button>
        </div>

    </div>
}