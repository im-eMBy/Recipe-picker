const initialState = {
    keyWords: '',
    isVegan: 'no',
    dishType: 'not specified',
    cuisineType: [],
    allergies: {
        treenuts: false,
        peanuts: false,
        wheat: false,
        soy: false,
        dairy: false,
        eggs: false,
        fish: false,
        crustaceans: false
    }
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
        case "setAllergyPeanuts":
            return { ...state, allergies: { ...state.allergies, peanuts: action.isAllergy } }
        case "setAllergyTreenuts":
            return { ...state, allergies: { ...state.allergies, treenuts: action.isAllergy } }
        case "setAllergyWheat":
            return { ...state, allergies: { ...state.allergies, wheat: action.isAllergy } }
        case "setAllergySoy":
            return { ...state, allergies: { ...state.allergies, soy: action.isAllergy } }
        case "setAllergyDairy":
            return { ...state, allergies: { ...state.allergies, dairy: action.isAllergy } }
        case "setAllergyEggs":
            return { ...state, allergies: { ...state.allergies, eggs: action.isAllergy } }
        case "setAllergyFish":
            return { ...state, allergies: { ...state.allergies, fish: action.isAllergy } }
        case "setAllergyCrustaceans":
            return { ...state, allergies: { ...state.allergies, crustaceans: action.isAllergy } }
        default:
            return state
    }
}