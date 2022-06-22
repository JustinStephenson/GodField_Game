const cardId = require("./card");

const io = require("socket.io")(8888, {
    cors: {
        origin: "http://localhost:3000",
    },
});

// Sending user data to the client side
let users = [];

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
};

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
};

// Weighted Random
// The max has lower probability
// For 100 runs, { a: 64, b: 19, c: 9, d: 5, e: 3 }, which a is 1 and e is 5
const weightedRandom = (min, max) => {
    return Math.round(max / (Math.random() * max + min));
};

const getCards = (numCards, min, max) => {
    let cardArr = [];

    for (i = 1; i < numCards + 1; i++) {
        const rarity = weightedRandom(min, max);

        cardArr.push({ rarity: rarity, cardId: cardId[0][i] + rarity });
    }

    return cardArr;
};

io.on("connection", (socket) => {
    console.log("an user connected");

    socket.on("addUser", (userId) => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });

    // Chat area on the bottom
    socket.on("sendMessage", (message) => {
        io.emit("getMessage", { message });
    });

    //Choosing player from the top right bar
    socket.on("playerSelection", ({ selection, userId }) => {
        io.emit("getPlayerSelection", { selection, userId });
    });

    // Distribute initial cards
    socket.on("getInitialCards", ({ currentUser, numCards, min, max }) => {
        var cardList = getCards(numCards, min, max);
        const user = getUser(currentUser);

        io.to(user?.socketId).emit("initialCards", {
            cardList,
        });
    });

    // An attacker selecting card
    socket.on("attackerChooseCard", ({ userId, cards }) => {
        io.emit("cardChooseByAttacker", { userId, cards });
    });

    // An defender selecting card
    socket.on("defenderChooseCard", ({ userId, cards }) => {
        io.emit("cardChooseByDefender", { userId, cards });
    });

    socket.on("disconnect", () => {
        console.log("an user disconnected!");
        removeUser(socket.id);
        io.emit("userDisconnect", users);
    });
});
