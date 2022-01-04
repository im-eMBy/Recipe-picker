const initialState = {
    responseData: null
}

export const appReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "setResponseData":
            return {...state, responseData: action.data}
        default:
            return state
    }
}