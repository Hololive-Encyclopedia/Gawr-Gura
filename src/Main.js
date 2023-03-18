import React from "react";
import Gura from "./Gura.js";
import "./Gura.css";

export default function Main() {
    return (
        <div>
            <Gura />
            <div className="timeline-dot"></div>
            <div className="timeline-dot"></div>
            <div className="timeline-dot"></div>
            <div className="timeline-dot"></div>
            <div className="timeline-dot"></div>
        </div>
    )
}