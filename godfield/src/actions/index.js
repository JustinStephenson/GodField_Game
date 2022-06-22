// added player into redux
export const addPlayer = (userId) => {
    return {
        type: "ADD_PLAYER",
        payload: userId,
    };
};

export const removePlayer = (userId) => {
    return {
        type: "REMOVE_PLAYER",
        payload: userId,
    };
};

export const addCurrentUser = (userId) => {
    return {
        type: "ADD_CURRENT_USER",
        payload: userId,
    };
};

// choosing a player
export const playerSelected = (userId) => {
    return {
        type: "SELECTED",
        payload: userId,
    };
};

export const playerUnselected = (userId) => {
    return {
        type: "UNSELECTED",
        payload: userId,
    };
};

// choosing a card
export const cardSelectedRedux = (cardId) => {
    return {
        type: "CARDSELECTED",
        payload: cardId,
    };
};

export const cardUnselectedRedux = (cardId) => {
    return {
        type: "CARDUNSELECTED",
        payload: cardId,
    };
};

export const cardUnselectAll = () => {
    return {
        type: "UNSELECT_ALL",
    };
};
