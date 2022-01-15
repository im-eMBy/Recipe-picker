import { useState, useEffect } from "react";

export const RecipePreview = ({recipeData}) => {

    return <div className="recipe-preview">
        <div className="recipe-preview__image-container">
            <img src={recipeData.images.REGULAR !== undefined ? recipeData.images.REGULAR.url : recipeData.image}></img>
            <h2>{recipeData.label}</h2>
        </div>
    </div>
}