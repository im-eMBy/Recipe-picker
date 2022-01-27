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
export const extractIngredientsAlternative = (recipesArray, ingredientsTypes, nrOfIngredients) => {
    let ingredientsArray = [];
    recipesArray.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            if (ingredient.foodCategory !== null) {
                if (ingredientsTypes.includes(ingredient.foodCategory.toLowerCase())) {
                    const iToAddAmount = ingredientsArray.findIndex(el => ingredient.food.toLowerCase().includes(el.ingredient.toLowerCase()));
                    const iToReplace = ingredientsArray.findIndex(el => el.ingredient.toLowerCase().includes(ingredient.food.toLowerCase()));
                    if (iToReplace !== -1 && ingredientsArray[iToReplace].category === ingredient.foodCategory.toLowerCase()) {
                        ingredientsArray[iToReplace].ingredient = ingredient.food.toLowerCase();
                        ingredientsArray[iToReplace].amount++;
                        return;
                    }
                    if (iToAddAmount !== -1 && ingredientsArray[iToAddAmount].category === ingredient.foodCategory.toLowerCase()) {
                        ingredientsArray[iToAddAmount].amount++;
                        return;
                    }
                    ingredientsArray.push({
                        ingredient: ingredient.food.toLowerCase(),
                        amount: 1,
                        category: ingredient.foodCategory.toLowerCase()
                    });
                }
            }
        })
    });
    ingredientsArray = ingredientsArray.filter((ingr, i, array) => {
        const iToAdd = array.findIndex(el => ingr.ingredient.includes(el.ingredient));
        if (iToAdd !== -1 && iToAdd !== i && array[iToAdd].category === ingr.category) {
            array[iToAdd].amount += ingr.amount;
            return false;
        }
        return true;
    })
    ingredientsArray.sort((a, b) => b.amount - a.amount);
    return ingredientsArray.filter((_ingredient, index) => index < nrOfIngredients)
}