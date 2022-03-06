export const restartState = () => {
    return (dispatch) => {
        dispatch({
            type: "restartState"
        })
    }
}

//for appReducer

export const prevPage = () => {
    return (dispatch) => {
        dispatch({
            type: "prevPage",
        })
    }
}
export const nextPage = () => {
    return (dispatch) => {
        dispatch({
            type: "nextPage",
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

export const addAllergy = (allergy) => {
    return (dispatch) => {
        dispatch({
            type: "addAllergy",
            allergy: allergy
        })
    }
}
export const removeAllergy = (allergy) => {
    return (dispatch) => {
        dispatch({
            type: "removeAllergy",
            allergy: allergy
        })
    }
}