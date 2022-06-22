const INITIAL_STATE = {
    selection: [],
    currentUser: "",
    online: [],
};

const playerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_CURRENT_USER":
            return { ...state, currentUser: action.payload };
        case "ADD_PLAYER":
            return { ...state, online: action.payload };
        case "REMOVE_PLAYER":
            return {
                ...state,
                online: action.payload,
            };
        case "SELECTED":
            return {
                ...state,
                selection: [{ userId: action.payload, selected: true }],
            };
        case "UNSELECTED":
            return { ...state, selection: [] };
        default:
            return state;
    }
};

export default playerReducer;
