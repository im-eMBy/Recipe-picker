import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useState } from "react";

import { extractIngredients } from "../utilis/recipes-array-functions/ingredients";
import { ingredientFilter } from "../utilis/recipes-array-functions/filters";

import "../scss/_ingredients-selection.scss";

export const IngredientsSelection = ({ ingredientType1, ingredientType2 }) => {
    const dispatch = useDispatch();
    const { setRecipes } = bindActionCreators(actionCreators, dispatch);
    const { recipes } = useSelector((state) => state.app);
    const [ingredientsExcluded, setIngredientsExcluded] = useState([]);
    const [recipesExcluded, setRecipesExcluded] = useState([]);

    const handleIngredientExclusion = (ev) => {
        setRecipes(ingredientFilter(recipes, ev.target.value));
    }
    const getIngredientsList = () => {
        return extractIngredients(recipes, ingredientType1, ingredientType2).map((el, i) => {
            if (i < 10) {
                const percentOfRecipes = (el.amount * 100 / recipes.length).toFixed(1);
                return <li>{el.ingredient} - {el.amount > 1 ? `${percentOfRecipes}% of recipes` : "1 recipe"}</li>
            }
        })
    }

    return <div className="ingredients-selection__outer-container">
        <h1>Select ingredients to exclude</h1>
        <div className="ingredients-selection__inner-container">
            <div>
                <ul className="ingredients-selection__list ingredients-selection__list--included">
                    {getIngredientsList()}
                </ul>
            </div>
            <div>
                <ul className="ingredients-selection__list ingredients-selection__list--excluded">

                </ul>
            </div>
        </div>
        <div className="ingredients-selection__nav-button">

        </div>
    </div>
}
//"bread, rolls and tortillas", "grains", "fruits", "vegetables", "meats", "poultry", "dairy", "cheese"