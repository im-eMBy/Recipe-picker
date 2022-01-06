export const spicesFilter = (recipesArray) => {
    return recipesArray.filter(recipe => {
        let isSpicesOnly = true;
        // console.log(`%c${recipe.label}`, "color:red")
        recipe.ingredients.forEach(ingr => {
            if (ingr.foodCategory === null) { isSpicesOnly = false; return }
            if (!ingr.foodCategory.includes("Condiments")
                && !ingr.foodCategory.includes("Oils")
                && !ingr.food.includes("juice")
                && !ingr.food.includes("garlic")) isSpicesOnly = false;
        });
        // if (isSpicesOnly) console.log("Filtered(spicesFilter):", recipe);
        return !isSpicesOnly;
    })
}
export const labelFilter = (recipesArray, keyWord) => {
    return recipesArray.filter(recipe => {
        // if(!recipe.label.toLowerCase().includes(keyWord.toLowerCase())) console.log("Filtered(labelFilter):", recipe)
        return (recipe.label.toLowerCase().includes(keyWord.toLowerCase()))
    })
}