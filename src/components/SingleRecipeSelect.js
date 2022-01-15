import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";

import { RecipePreview } from "./RecipePreview";

export const SingleRecipeSelect = () => {
    const dispatch = useDispatch();
    const { setRecipes } = bindActionCreators(actionCreators, dispatch);
    const { recipes } = useSelector((state) => state.app);
    const [currentRecipe, setCurrentRecipe] = useState(0);

    return <div className="single-recipe-select">
        <RecipePreview recipeData={recipes[currentRecipe]} />
        <button onClick={() => setCurrentRecipe(currentRecipe + 1)}>Next</button>
    </div>
}