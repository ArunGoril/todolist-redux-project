const initialState = {
    list: []
}

const todoReducer = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const {id, data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {id, data}
                ]
            }
        case "DELETE_TODO":
            const newList = state.list.filter((el) => el.id !== action.payload)
            return {
                ...state,
                list: newList
            }
        case "REMOVE_TODOS":
            return {
                ...state,
                list: []
            }
        default:
            return state;
    }
}

export default todoReducer;