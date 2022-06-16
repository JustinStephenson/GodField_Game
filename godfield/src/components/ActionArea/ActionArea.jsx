import React from "react";
import { Header } from "../shared/Header/Header";
import { ChatArea } from "../gameScreen/ChatArea/ChatArea";
import { Footer } from "../shared/Footer/Footer";
import { GameContent } from "../gameScreen/GameContent/GameContent";
import "./ActionArea.scss";

export const ActionArea = () => {
    return (
        <div className="action-area">
            <Header />
            <GameContent />
            <Footer />
            <ChatArea />
        </div>
    );
};
