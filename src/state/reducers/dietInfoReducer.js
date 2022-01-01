const initialState = {
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

export const dietInfoReducer = (
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
        case "setIsLowCarb":
            return { ...state, superpowers: { ...state.superpowers, isLowCarb: action.isLowCarb } }
        case "setIsLowFat":
            return { ...state, superpowers: { ...state.superpowers, isLowFat: action.isLowFat } }
        case "setIsKeto":
            return { ...state, superpowers: { ...state.superpowers, isLowCarb: action.isKeto } }
        default:
            return state
    }
}