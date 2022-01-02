const initialState = {
    keyWords: '',
    isVegan: 'no',
    superpowers: {
        isHighProtein: false,
        isNoSugar: false,
        isHighFiber: false,
    },
    allergies: {
        treenuts: false,
        peanuts: false,
        wheat: false,
        soy: false,
        dairy: false,
        eggs: false,
        fish: false,
        crustceans: false
    }
}

export const queryReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "setIsVegan":
            return { ...state, isVegan: action.isVegan }
        case "setIsHighProtein":
            return { ...state, superpowers: { ...state.superpowers, isHighProtein: action.isHighProtein } }
        case "setIsNoSugar":
            return { ...state, superpowers: { ...state.superpowers, isNoSugar: action.isNoSugar } }
        case "setIsHighFiber":
            return { ...state, superpowers: { ...state.superpowers, isHighFiber: action.isHighFiber } }
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
        case "setAllergyCrustceans":
            return { ...state, allergies: { ...state.allergies, crustceans: action.isAllergy } }
        default:
            return state
    }
}