const initialState = {
    recipes: null
}

export const appReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "setRecipes":
            return {...state, recipes: action.data}
        default:
            return state
    }
}