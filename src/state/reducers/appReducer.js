const initialState = {
    currentPage: "preQuery",
    currentSubpage: "is vegan",
    recipes: null,
    selectedRecipes: []
}

export const appReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "setRecipes":
            return { ...state, recipes: action.data }
        case "setCurrentPage":
            return { ...state, currentPage: action.page }
        case "setCurrentSubpage":
            return { ...state, currentSubpage: action.page }
        case "addSelectedRecipe":
            return { ...state, selectedRecipes: [...state.selectedRecipes, action.recipe] }
        case "removeSelectedRecipe":
            return { ...state, selectedRecipes: state.selectedRecipes.filter(recipe => recipe !== action.recipe) }
        default:
            return state
    }
}