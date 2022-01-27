import { useState, useEffect } from "react";

import { MacronutrientsInfo } from "./MacronutrientsInfo";
import { Loading } from "./Loading";

import "../scss/_recipe-preview.scss";

import portionIcon from "../images/icons/portion.png";
import timeIcon from "../images/icons/time.png";

export const RecipePreview = ({ recipeData }) => {
    const [showAllRecipes, setShowAllRecipes] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        setShowAllRecipes(false);
        setIsImageLoaded(false);
    }, [recipeData]);

    const portions = recipeData.yield;
    const prepTime = recipeData.totalTime;

    // const protein = (recipeData.totalNutrients.PROCNT.quantity / portions).toFixed(1);
    // const fat = (recipeData.totalNutrients.FAT.quantity / portions).toFixed(1);
    // const fiber = (recipeData.totalNutrients.FIBTG.quantity / portions).toFixed(1);
    // const carbs = ((recipeData.totalNutrients.CHOCDF.quantity / portions).toFixed(1) - fiber).toFixed(1);
    // const energy = (protein * 4 + carbs * 4 + fat * 9 + fiber * 2).toFixed(0);
    // const satFat = (recipeData.totalNutrients.FASAT.quantity / portions).toFixed(1);
    // const sugar = (recipeData.totalNutrients.SUGAR.quantity / portions).toFixed(1);
    // const microNutrients = {
    //     calcium: (recipeData.totalNutrients.CA.quantity / portions).toFixed(0),
    //     iron: (recipeData.totalNutrients.FE.quantity / portions).toFixed(1),
    //     potassium: (recipeData.totalNutrients.K.quantity / portions).toFixed(0),
    //     magnesium: (recipeData.totalNutrients.MG.quantity / portions).toFixed(0),
    //     sodium: (recipeData.totalNutrients.NA.quantity / portions).toFixed(0),
    //     phosphorus: (recipeData.totalNutrients.P.quantity / portions).toFixed(1),
    //     zinc: (recipeData.totalNutrients.ZN.quantity / portions).toFixed(1),
    //     folicAcid: (recipeData.totalNutrients.FOLDFE.quantity / portions).toFixed(1),
    //     vitB1: (recipeData.totalNutrients.THIA.quantity / portions).toFixed(1),
    //     vitB2: (recipeData.totalNutrients.RIBF.quantity / portions).toFixed(1),
    //     vitB3: (recipeData.totalNutrients.NIA.quantity / portions).toFixed(1),
    //     vitB6: (recipeData.totalNutrients.VITB6A.quantity / portions).toFixed(1),
    //     vitB12: (recipeData.totalNutrients.VITB12.quantity / portions).toFixed(1),
    //     vitC: (recipeData.totalNutrients.VITC.quantity / portions).toFixed(1),
    //     vitA: (recipeData.totalNutrients.VITA_RAE.quantity / portions).toFixed(1),
    //     vitE: (recipeData.totalNutrients.TOCPHA.quantity / portions).toFixed(1),
    //     vitD: (recipeData.totalNutrients.VITD.quantity / portions).toFixed(1),
    //     vitK: (recipeData.totalNutrients.VITK1.quantity / portions).toFixed(1),
    // }

    const getIngredientsLines = () => {
        return recipeData.ingredientLines.map((ingredient, i) => {
            if (showAllRecipes === false && i > 11) return null;
            return <li key={i}>- {ingredient.toLowerCase()}</li>
        })
    }

    return <div className="recipe-preview">
        <div className="recipe-preview__column recipe-preview__column--first">
            <div className="recipe-preview__image-container">
                {isImageLoaded ? null : <Loading/>}
                <img src={recipeData.images.REGULAR !== undefined ? recipeData.images.REGULAR.url : recipeData.image} 
                style={isImageLoaded ? null : {visibility: "hidden"}}
                onLoad={() => setIsImageLoaded(true)} 
                alt="Recipe preview" />
            </div>
            <p className="recipe-preview__title">{recipeData.label}</p>
            <p>Source: {recipeData.source}</p>
            <div className="recipe-preview__time-and-portions">
                {prepTime > 0 ? <div className="recipe-preview__time">
                    <div className="icon-container">
                        <img src={timeIcon} alt="Preparation time icon" />
                    </div>
                    <p>{prepTime} minutes</p>
                </div> : null}
                <div className="recipe-preview__portions">
                    <div className="icon-container">
                        <img src={portionIcon} alt="Portion icon" />
                    </div>
                    <p>{portions} {portions > 1 ? "portions" : "portion"}</p>
                </div>
            </div>
        </div>
        <div className="recipe-preview__column recipe-preview__column--second">
            <h2>Nutritional data (per portion):</h2>
            <MacronutrientsInfo recipeData={recipeData} />
        </div>
        <div className="recipe-preview__column recipe-preview__column--third">
            <h2>Ingredients:</h2>
            <ul>
                {getIngredientsLines()}
            </ul>
            {recipeData.ingredientLines.length < 13 ? null :
                <button className="recipes-preview__show-more-button" onClick={() => setShowAllRecipes(!showAllRecipes)}>
                    Show {showAllRecipes ? "Less" : "More"}
                </button>
            }
        </div>
    </div>
}