export const extractIngredients = (recipesArray, ingredientType1, ingredientType2) => {
    const ingredientsArray = [];
    const ingType1 = typeof(ingredientType1) === "string" ? ingredientType1 : "";
    const ingType2 = typeof(ingredientType2) === "string" ? ingredientType2 : "";
    recipesArray.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            if (ingredient.foodCategory !== null) {
                if (ingredient.foodCategory.toLowerCase() === ingType1.toLowerCase() || ingredient.foodCategory.toLowerCase() === ingType2.toLowerCase()) {
                    const iToAddAmount = ingredientsArray.findIndex(el => (ingredient.food.toLowerCase() === el.ingredient.toLowerCase()));
                    if (iToAddAmount !== -1) {
                        ingredientsArray[iToAddAmount].amount++;
                        return;
                    }
                    ingredientsArray.push({
                        ingredient: ingredient.food.toLowerCase(),
                        amount: 1
                    });
                }
            }
        })
    });
    ingredientsArray.sort((a, b) => b.amount - a.amount);
    return ingredientsArray;
}