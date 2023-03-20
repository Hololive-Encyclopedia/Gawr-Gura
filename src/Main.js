import React from "react";
import Gura from "./Gura.js";
import "./css/timeline-dot.css";
import Myth from "./Myth.js";

export default function Main() {
    return (
        <div>
            <Myth />
            <Gura />
            {/* <a href="#section1" className="timeline-dot">
                <div  data-id="1"></div>
            </a> */}

            {/* <div className="timeline-dot" data-id="2"></div>
            <div className="timeline-dot" data-id="3"></div>
            <div className="timeline-dot" data-id="4"></div>
            <div className="timeline-dot" data-id="5"></div> */}
        </div>
    )
}