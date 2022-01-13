export const spicesFilter = (recipesArray) => {
    return recipesArray.filter(recipe => {
        let toFilter = true;
        recipe.ingredients.forEach(ingr => {
            if (ingr.foodCategory === null) { toFilter = false; return }
            if (!ingr.foodCategory.includes("Condiments")
                && !ingr.foodCategory.includes("Oils")
                && !ingr.food.includes("juice")
                && !ingr.food.includes("garlic")) toFilter = false;
        });
        if (toFilter) console.log("Filtered(spicesFilter):", recipe);
        return !toFilter;
    })
}

//function that filters recipes with, that includes specified ingredient, when 3rd parameter is:
//false - returns new array with all recipes without specified ingredient
//true - returns array of all recipes, that includes specified ingredient
export const ingredientFilter = (recipesArray, ingredient, includesExcludes = false) => {
    return recipesArray.filter(recipe => {
        let toFilter = includesExcludes;
        recipe.ingredients.forEach(ingr => {
            if (ingr.food === null) return;
            if (ingr.food.toLowerCase() === ingredient) toFilter = !toFilter;
        });
        return !toFilter;
    })
}

export const labelFilter = (recipesArray, keyWord) => {
    return recipesArray.filter(recipe => {
        // if(!recipe.label.toLowerCase().includes(keyWord.toLowerCase())) console.log("Filtered(labelFilter):", recipe)
        return (recipe.label.toLowerCase().includes(keyWord.toLowerCase()))
    })
}