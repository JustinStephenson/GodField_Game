const INITIAL_STATE = {
    cardStatus: [],
};
const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CARDSELECTED":
            return {
                ...state,
                cardStatus: [
                    ...state.cardStatus,
                    { cardId: action.payload, selected: true },
                ],
            };
        case "CARDUNSELECTED":
            return {
                ...state,
                cardStatus: state.cardStatus.filter(
                    (c) => c.cardId !== action.payload
                ),
            };
        case "UNSELECT_ALL":
            return { ...state, cardStatus: [] };
        default:
            return state;
    }
};

export default cardReducer;
