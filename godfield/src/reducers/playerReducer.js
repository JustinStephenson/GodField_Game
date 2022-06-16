const INITIAL_STATE = {
    selected: false,
    online: [],
    userId: "",
};

const playerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_PLAYER":
            return { ...state, online: action.payload };
        case "REMOVE_PLAYER":
            return {
                ...state,
                online: action.payload,
            };
        case "SELECTED":
            return { ...state, selected: true, userId: action.payload };
        case "UNSELECTED":
            return { ...state, selected: false, userId: action.payload };
        default:
            return state;
    }
};

export default playerReducer;
