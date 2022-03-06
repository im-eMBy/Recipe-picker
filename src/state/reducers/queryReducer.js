const initialState = {
    keyWords: '',
    isVegan: 'no',
    dishType: 'not specified',
    cuisineType: [],
    allergies: []
}

export const queryReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "restartState":
            return initialState
        case "setKeyWords":
            return { ...state, keyWords: action.text }
        case "setIsVegan":
            return { ...state, isVegan: action.isVegan }
        case "setDishType":
            return { ...state, dishType: action.dishType }
        case "setCuisineType":
            return { ...state, cuisineType: [...action.cuisinesArray] }
        case "addAllergy":
            return { ...state, allergies: [...state.allergies, action.allergy] }
        case "removeAllergy":
            return { ...state, allergies: state.allergies.filter(allergy => allergy !== action.allergy) }
        default:
            return state
    }
}