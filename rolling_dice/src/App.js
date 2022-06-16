import React from "react";

import Route from "./components/Route";
import Header from "./components/Header";
import DiceRoll from "./components/DiceRoll";
import Messanger from "./components/Messanger";

const App = () => {
    return (
        <div>
            <Header />
            <Route path="/">
                <DiceRoll />
            </Route>
            <Route path="/messanger">
                <Messanger />
            </Route>
        </div>
    );
};

export default App;
