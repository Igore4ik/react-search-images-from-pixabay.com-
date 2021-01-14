const initialState = {
    images: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_IMAGES" :
            return {
                ...state,
                images: action.arr
            }
        default:
            return state;
    }
}