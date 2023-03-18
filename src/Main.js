import React from "react";
import Gura from "./Gura.js";
import "./css/timeline-dot.css";

export default function Main() {
    return (
        <div>
            <Gura />
            <div className="timeline-dot" data-id="1"></div>
            <div className="timeline-dot" data-id="2"></div>
            <div className="timeline-dot" data-id="3"></div>
            <div className="timeline-dot" data-id="4"></div>
            <div className="timeline-dot" data-id="5"></div>
        </div>
    )
}