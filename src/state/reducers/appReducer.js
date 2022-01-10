const initialState = {
    currentPage: "query-1",
    recipes: null
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
        default:
            return state
    }
}