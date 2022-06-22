import React, { useState, useEffect, useRef } from "react";
import "./PlayArea.scss";
import { useSelector } from "react-redux";

export const PlayArea = () => {
    const cardStatus = useSelector((state) => state.cardReducer.cardStatus);

    console.log(cardStatus?.every());
    return <div>PlayArea</div>;
};
