//key words

export const setKeyWords = (text) => {
    return (dispatch) => {
        dispatch({
            type: 'setKeyWords',
            text: text
        })
    }
}

//is vegan

export const setIsVegan = (isVegan) => {
    return (dispatch) => {
        dispatch({
            type: 'setIsVegan',
            isVegan: isVegan
        })
    }
}

//superpowers

export const setIsHighProtein = (isHighProtein) => {
    return (dispatch) => {
        dispatch({
            type: 'setIsHighProtein',
            isHighProtein: isHighProtein
        })
    }
}
export const setIsNoSugar = (isNoSugar) => {
    return (dispatch) => {
        dispatch({
            type: 'setIsNoSugar',
            isNoSugar: isNoSugar
        })
    }
}
export const setIsHighFiber = (isHighFiber) => {
    return (dispatch) => {
        dispatch({
            type: 'setIsHighFiber',
            isHighFiber: isHighFiber
        })
    }
}

//allergies

export const setAllergyPeanuts = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: 'setAllergyPeanuts',
            isAllergy: isAllergy
        })
    }
}
export const setAllergyTreenuts = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: 'setAllergyTreenuts',
            isAllergy: isAllergy
        })
    }
}
export const setAllergyWheat = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: 'setAllergyWheat',
            isAllergy: isAllergy
        })
    }
}
export const setAllergySoy = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: 'setAllergySoy',
            isAllergy: isAllergy
        })
    }
}
export const setAllergyDairy = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: 'setAllergyDairy',
            isAllergy: isAllergy
        })
    }
}
export const setAllergyEggs = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: 'setAllergyEggs',
            isAllergy: isAllergy
        })
    }
}
export const setAllergyFish = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: 'setAllergyFish',
            isAllergy: isAllergy
        })
    }
}
export const setAllergyCrustaceans = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: 'setAllergyCrustaceans',
            isAllergy: isAllergy
        })
    }
}

