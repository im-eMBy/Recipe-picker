import { useState } from "react";

import "../scss/_recipe-preview.scss";

export const RecipePreview = ({ recipeData }) => {
    const [thirdColumnContent, setThirdColumnContent] = useState("facts");

    const portions = recipeData.yield;

    const protein = (recipeData.totalNutrients.PROCNT.quantity / portions).toFixed(1);
    const fat = (recipeData.totalNutrients.FAT.quantity / portions).toFixed(1);
    const fiber = (recipeData.totalNutrients.FIBTG.quantity / portions).toFixed(1);
    const carbs = ((recipeData.totalNutrients.CHOCDF.quantity / portions).toFixed(1) - fiber).toFixed(1);
    const energy = (protein * 4 + carbs * 4 + fat * 9 + fiber * 2).toFixed(0);
    const satFat = (recipeData.totalNutrients.FASAT.quantity / portions).toFixed(1);
    const sugar = (recipeData.totalNutrients.SUGAR.quantity / portions).toFixed(1);
    const microNutrients = {
        calcium: (recipeData.totalNutrients.CA.quantity / portions).toFixed(0),
        iron: (recipeData.totalNutrients.FE.quantity / portions).toFixed(1),
        potassium: (recipeData.totalNutrients.K.quantity / portions).toFixed(0),
        magnesium: (recipeData.totalNutrients.MG.quantity / portions).toFixed(0),
        sodium: (recipeData.totalNutrients.NA.quantity / portions).toFixed(0),
        phosphorus: (recipeData.totalNutrients.P.quantity / portions).toFixed(1),
        zinc: (recipeData.totalNutrients.ZN.quantity / portions).toFixed(1),
        folicAcid: (recipeData.totalNutrients.FOLDFE.quantity / portions).toFixed(1),
        vitB1: (recipeData.totalNutrients.THIA.quantity / portions).toFixed(1),
        vitB2: (recipeData.totalNutrients.RIBF.quantity / portions).toFixed(1),
        vitB3: (recipeData.totalNutrients.NIA.quantity / portions).toFixed(1),
        vitB6: (recipeData.totalNutrients.VITB6A.quantity / portions).toFixed(1),
        vitB12: (recipeData.totalNutrients.VITB12.quantity / portions).toFixed(1),
        vitC: (recipeData.totalNutrients.VITC.quantity / portions).toFixed(1),
        vitA: (recipeData.totalNutrients.VITA_RAE.quantity / portions).toFixed(1),
        vitE: (recipeData.totalNutrients.TOCPHA.quantity / portions).toFixed(1),
        vitD: (recipeData.totalNutrients.VITD.quantity / portions).toFixed(1),
        vitK: (recipeData.totalNutrients.VITK1.quantity / portions).toFixed(1),
    }
    

    const getNutritionalFacts = () => {
        const facts = [];
        
    }
    const getIngredientsLines = () => {
        return recipeData.ingredientLines.map((ingredient, i) => <li key={i}>- {ingredient.toLowerCase()}</li>)
    }
    const getThirdColumnContent = () => {
        switch (thirdColumnContent) {
            case "facts":
                return <>
                {/* <p>Energy: {energy}kcal</p>
                <p>Protein: {protein}g</p>
                <p>Carbs: {carbs}g</p>
                <p>Fat: {fat}g</p>
                <p>Fiber: {fiber}g</p> */}
                <ul>
                    <li>Energy: {energy}kcal</li>
                    <li>Protein: {protein}g</li>
                    <li>Carbs: {carbs}g</li>
                    <li>Fat: {fat}g</li>
                    <li>Satureted fat: {satFat}g</li>
                    <li>Sugar: {sugar}g</li>
                    <li>Fiber: {fiber}g</li>
                    <li style={{marginTop: "5px"}}>Calcium: {microNutrients.calcium}mg</li>
                    <li>Iron: {microNutrients.iron}mg</li>
                    <li>Sodium: {microNutrients.sodium}mg</li>
                    <li>Potassium: {microNutrients.potassium}mg</li>
                    <li>Magnesium: {microNutrients.magnesium}mg</li>
                    <li></li>

                    <li></li>
                </ul>
                </>
        }
    }
    return <div className="recipe-preview">
        <div className="recipe-preview__column recipe-preview__column--first">
            <div className="recipe-preview__image-container">
                <img src={recipeData.images.REGULAR !== undefined ? recipeData.images.REGULAR.url : recipeData.image}></img>
            </div>
            <p >{recipeData.label}</p>
            <p className="recipe-preview__label">Portions: {portions}</p>
        </div>
        <div className="recipe-preview__column recipe-preview__column--second">
            <h2>Ingredients:</h2>
            <ul>
                {getIngredientsLines()}
            </ul>
        </div>
        <div className="recipe-preview__column recipe-preview__column--third">
            <h2>Nutritional data (per portion):</h2>

            {getThirdColumnContent()}
        </div>

    </div>
}