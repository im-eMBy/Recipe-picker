const pages = ["welcome", "is vegan", "allergies", "dish type", "cuisine", "ingredients - meats", "ingredients - vegetables", "ingredients - grains", "ingredients - dairy", "recipe select"];

const initialState = {
    currentPage: "welcome",
    recipes: null,
}

export const appReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "restartState":
            return { ...initialState, currentPage: "is vegan" }
        case "setRecipes":
            return { ...state, recipes: action.data }
        case "prevPage":
            return { ...state, currentPage: pages[pages.indexOf(state.currentPage) - 1]}
        case "nextPage":
            return { ...state, currentPage: pages[pages.indexOf(state.currentPage) + 1]}
        default:
            return state
    }
}