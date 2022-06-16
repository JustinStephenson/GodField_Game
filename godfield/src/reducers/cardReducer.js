const INITIAL_STATE = {
    cardId: "",
    selected: false,
};

const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CARDSELECTED":
            return { ...state, cardId: action.payload, selected: true };
        case "CARDUNSELECTED":
            return { ...state, cardId: action.payload, selected: false };
        default:
            return state;
    }
};

export default cardReducer;
