import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { NavButtons } from "./NavButtons";
import { extractIngredients } from "../utilis/ingredients";
import { ingredientFilter } from "../utilis/filters";

import "../scss/_ingredients-selection.scss";

export const IngredientsSelection = ({ ingredientsTypes }) => {
    const dispatch = useDispatch();
    const { setRecipes, nextPage } = actionCreators;
    const { recipes } = useSelector((state) => state.app);

    const [ingredients, setIngredients] = useState(extractIngredients(recipes, ingredientsTypes, 20));
    const [ingredientsExcluded, setIngredientsExcluded] = useState([]);

    useEffect(() => {
        const ingr = extractIngredients(recipes, ingredientsTypes, 20);
        if(ingr.length < 6) {dispatch(nextPage()); return};
        setIngredients(ingr);
        setIngredientsExcluded([]);
    }, [ingredientsTypes, recipes, nextPage, dispatch]);

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
        dispatch(setRecipes(filteredRecipes));
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
        <NavButtons onNext={handleNextPage} />
    </>
}
