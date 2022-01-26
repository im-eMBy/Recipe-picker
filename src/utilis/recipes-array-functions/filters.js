//function that filters recipes, that includes specified ingredient, when 3rd parameter is:
//false - returns new array with all recipes without specified ingredient
//true - returns array of all recipes, that includes specified ingredient
export const ingredientFilter = (recipesArray, ingredient, includesExcludes = false) => {
    return recipesArray.filter(recipe => {
        let toFilter = includesExcludes;
        recipe.ingredients.forEach(ingr => {
            if (ingr.food === null) return;
            if (ingr.food.toLowerCase() === ingredient.ingredient) toFilter = !toFilter;
        });
        return !toFilter;
    })
}
//more conservative version
export const ingredientFilterAlternative = (recipesArray, ingredient, includesExcludes = false) => {
    return recipesArray.filter(recipe => {
        let toFilter = includesExcludes;
        recipe.ingredients.forEach(ingr => {
            if (ingr.food === null) return;
            if (ingr.food.toLowerCase().includes(ingredient.ingredient) && ingr.foodCategory.toLowerCase() === ingredient.category) {
                toFilter = !toFilter;
            }
        });
        return !toFilter;
    })
}

//functions below are in some cases used to eliminate unwanted recipies, which API may return (e.g with not working link)
export const labelFilter = (recipesArray, keyWord) => {
    return recipesArray.filter(recipe => {
        return (recipe.label.toLowerCase().includes(keyWord.toLowerCase()))
    })
}
export const spicesFilter = (recipesArray) => {
    return recipesArray.filter(recipe => {
        let toFilter = true;
        recipe.ingredients.forEach(ingr => {
            if (ingr.foodCategory === null) return;
            if (!ingr.foodCategory.includes("Condiments")
                && !ingr.foodCategory.includes("Oils")
                && !ingr.food.includes("juice")
                && !ingr.food.includes("garlic")) toFilter = false;
        });
        if (toFilter) console.log("Filtered(spicesFilter):", recipe);
        return !toFilter;
    })
}
export const sourcesFilter = (recipesArray) => {
    const excludedSources = ["Food Network", "winnerdinners.com", "pulsepledge.com"];
    return recipesArray.filter(recipe => {
        if (excludedSources.includes(recipe.source)) console.log("Filtered(sourcesFilter):", recipe);
        return !excludedSources.includes(recipe.source);
    })
}
export const dessertFilter = (recipesArray) => {
    return recipesArray.filter(recipe => {
        let secVegetable = false;
        let toFilter = false;
        recipe.ingredients.forEach(ingr => {
            if (ingr.foodCategory === null) return;
            if (["meats", "poultry", "seafood", "cured meats"].includes(ingr.foodCategory)) toFilter = true;
            if (ingr.foodCategory === "vegetables" && secVegetable === true) toFilter = true;
            if (ingr.foodCategory === "vegetables" && secVegetable === false) secVegetable = true;
        })
        if (toFilter) console.log("Filtered(dessertFilter):", recipe)
        return !toFilter;
    })
}