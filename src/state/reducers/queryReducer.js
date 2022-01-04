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
        crustaceans: false
    },
    clinical: {
        cardiovascular: false,
        metabolic: false,
        kidney: false,
        digestive: false
    }
}

export const queryReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "setKeyWords":
            return { ...state, keyWords: action.text }
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
        case "setAllergyCrustaceans":
            return { ...state, allergies: { ...state.allergies, crustaceans: action.isAllergy } }
        case "setClinicalCardiovascular":
            return { ...state, clinical: { ...state.clinical, cardiovascular: action.isClinical } }
        case "setClinicalMetabolic":
            return { ...state, clinical: { ...state.clinical, metabolic: action.isClinical } }
        case "setClinicalDigestive":
            return { ...state, clinical: { ...state.clinical, digestive: action.isClinical } }
        case "setClinicalKidney":
            return { ...state, clinical: { ...state.clinical, kidney: action.isClinical } }
        default:
            return state
    }
}