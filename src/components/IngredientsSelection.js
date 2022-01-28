import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";

import { extractIngredients } from "../utilis/ingredients";
import { ingredientFilter } from "../utilis/filters";

import "../scss/_ingredients-selection.scss";

export const IngredientsSelection = ({ nextPage, ingredientsTypes }) => {
    const dispatch = useDispatch();
    const { setRecipes, restartState } = bindActionCreators(actionCreators, dispatch);
    const { recipes } = useSelector((state) => state.app);
    const [ingredients, setIngredients] = useState(extractIngredients(recipes, ingredientsTypes, 20));
    const [ingredientsExcluded, setIngredientsExcluded] = useState([]);

    useEffect(() => {
        setIngredients(extractIngredients(recipes, ingredientsTypes, 20));
        setIngredientsExcluded([]);
    }, [ingredientsTypes, recipes]);
    useEffect(() => {
        if (ingredients.length + ingredientsExcluded.length < 5) {
            nextPage();
        }
    }, [ingredients, ingredientsExcluded, nextPage]);

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
        ingredientsExcluded.forEach(ingredient => {
            filteredRecipes = ingredientFilter(filteredRecipes, ingredient);
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
            <button className="nav-button" onClick={() => restartState()}>Restart</button>
            <button className="nav-button" onClick={() => handleNextPage()}>Next</button>
        </div>
    </>
}
