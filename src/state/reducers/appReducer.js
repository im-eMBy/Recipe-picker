const initialState = {
    currentPage: "preQuery",
    currentSubpage: "is vegan",
    recipes: null,
}

export const appReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "restartState":
            return { ...initialState, currentPage:"preQuery"}
        case "setRecipes":
            return { ...state, recipes: action.data }
        case "setCurrentPage":
            return { ...state, currentPage: action.page }
        case "setCurrentSubpage":
            return { ...state, currentSubpage: action.page }
        default:
            return state
    }
}