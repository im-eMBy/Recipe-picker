export const extractIngredients = (recipesArray, ingredientsTypes, nrOfIngredients) => {
    const ingredientsArray = [];
    recipesArray.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            if (ingredient.foodCategory !== null) {
                if (ingredientsTypes.includes(ingredient.foodCategory.toLowerCase())) {
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
    return ingredientsArray.filter((ingredient, index) => index < nrOfIngredients)
}