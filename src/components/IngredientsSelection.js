import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";

import { extractIngredients } from "../utilis/recipes-array-functions/ingredients";
import { ingredientFilter } from "../utilis/recipes-array-functions/filters";

import "../scss/_ingredients-selection.scss";

export const IngredientsSelection = ({ nextPage, ingredientsTypes }) => {
    const dispatch = useDispatch();
    const { setRecipes } = bindActionCreators(actionCreators, dispatch);
    const { recipes } = useSelector((state) => state.app);
    const [ingredients, setIngredients] = useState(extractIngredients(recipes, ingredientsTypes, 10));
    const [ingredientsExcluded, setIngredientsExcluded] = useState([]);

    useEffect(() => {
        setIngredients(extractIngredients(recipes, ingredientsTypes, 10));
        setIngredientsExcluded([]);
    }, [ingredientsTypes, recipes]);

    const handleIngredientExclusion = (ingredient) => {
        setIngredientsExcluded([...ingredientsExcluded, ingredient]);
        setIngredients(ingredients.filter(el => { return el.ingredient !== ingredient.ingredient }));
    }
    const handleIngredientInclusion = (ingredient) => {
        setIngredientsExcluded(ingredientsExcluded.filter(el => { return el.ingredient !== ingredient.ingredient }));
        setIngredients([...ingredients, ingredient]);
    }
    const handleNextPage = () => {
        let filteredRecipes = recipes;
        ingredientsExcluded.forEach(el => {
            filteredRecipes = ingredientFilter(filteredRecipes, el.ingredient);
        })
        setRecipes(filteredRecipes);
        nextPage();
    }
    const getIngredientsList = () => {
        return ingredients.map((el, i) => {
            const percentOfRecipes = (el.amount * 100 / recipes.length).toFixed(1);
            return <li key={el.ingredient}>
                <button onClick={() => handleIngredientExclusion(el)}>
                    {el.ingredient} - {el.amount > 1 ? `${percentOfRecipes}% of recipes` : "1 recipe"}
                </button>
            </li>
        })
    }
    const getExcludedIngredientsList = () => {
        return ingredientsExcluded.map((el, i) => {
            const percentOfRecipes = (el.amount * 100 / recipes.length).toFixed(1);
            return <li key={el.ingredient}>
                <button onClick={() => handleIngredientInclusion(el)}>
                    {el.ingredient} - {el.amount > 1 ? `${percentOfRecipes}% of recipes` : "1 recipe"}
                </button>
            </li>
        })
    }

    return <>
        <div className="ingredients-selection__outer-container">
            <h1>Select ingredients to exclude</h1>
            <div className="ingredients-selection__inner-container">
                <div className="ingredients-selection__list ingredients-selection__list--included">
                    <h2>Possible ingredients:</h2>
                    <ul>
                        {getIngredientsList()}
                    </ul>
                </div>
                <div className="ingredients-selection__list ingredients-selection__list--excluded">
                    <h2>Excluded ingredients:</h2>
                    <ul>
                        {getExcludedIngredientsList()}
                    </ul>
                </div>
            </div>
        </div>
        <div className="ingredients-selection__nav-buttons">
            <button>Restart</button>
            <button onClick={() => handleNextPage()}>Next</button>
        </div>
    </>
}
