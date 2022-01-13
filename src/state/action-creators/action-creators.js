//for appReducer

export const setCurrentPage = (page) => {
    return (dispatch) => {
        dispatch({
            type: "setCurrentPage",
            page: page
        })
    }
}
export const setCurrentSubpage = (page) => {
    return (dispatch) => {
        dispatch({
            type: "setCurrentSubpage",
            page: page
        })
    }
}
export const setRecipes = (data) => {
    return (dispatch) => {
        dispatch({
            type: "setRecipes",
            data: data
        })
    }
}

//for queryReducer

//key words

export const setKeyWords = (text) => {
    return (dispatch) => {
        dispatch({
            type: "setKeyWords",
            text: text
        })
    }
}

//is vegan

export const setIsVegan = (isVegan) => {
    return (dispatch) => {
        dispatch({
            type: "setIsVegan",
            isVegan: isVegan
        })
    }
}

//dish type

export const setDishType = (dishType) => {
    return (dispatch) => {
        dispatch({
            type: "setDishType",
            dishType: dishType
        })
    }
}

//cuisine type

export const setCuisineType = (cuisinesArray) => {
    return (dispatch) => {
        dispatch({
            type: "setCuisineType",
            cuisinesArray: cuisinesArray
        })
    }
}

//allergies

export const setAllergyPeanuts = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: "setAllergyPeanuts",
            isAllergy: isAllergy
        })
    }
}
export const setAllergyTreenuts = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: "setAllergyTreenuts",
            isAllergy: isAllergy
        })
    }
}
export const setAllergyWheat = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: "setAllergyWheat",
            isAllergy: isAllergy
        })
    }
}
export const setAllergySoy = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: "setAllergySoy",
            isAllergy: isAllergy
        })
    }
}
export const setAllergyDairy = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: "setAllergyDairy",
            isAllergy: isAllergy
        })
    }
}
export const setAllergyEggs = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: "setAllergyEggs",
            isAllergy: isAllergy
        })
    }
}
export const setAllergyFish = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: "setAllergyFish",
            isAllergy: isAllergy
        })
    }
}
export const setAllergyCrustaceans = (isAllergy) => {
    return (dispatch) => {
        dispatch({
            type: "setAllergyCrustaceans",
            isAllergy: isAllergy
        })
    }
}

//clinical diets

export const setClinicalCardiovascular = (isClinical) => {
    return (dispatch) => {
        dispatch({
            type: "setClinicalCardiovascular",
            isClinical: isClinical
        })
    }
}
export const setClinicalMetabolic = (isClinical) => {
    return (dispatch) => {
        dispatch({
            type: "setClinicalMetabolic",
            isClinical: isClinical
        })
    }
}
export const setClinicalDigestive = (isClinical) => {
    return (dispatch) => {
        dispatch({
            type: "setClinicalDigestive",
            isClinical: isClinical
        })
    }
}
export const setClinicalKidney = (isClinical) => {
    return (dispatch) => {
        dispatch({
            type: "setClinicalKidney",
            isClinical: isClinical
        })
    }
}

