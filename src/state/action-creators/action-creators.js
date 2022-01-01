export const setIsVegan = (isVegan) => {
    return (dispatch) => {
        dispatch({
            type: 'setIsVegan',
            isVegan: isVegan
        })
    }
}
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