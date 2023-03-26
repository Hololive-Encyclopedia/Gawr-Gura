import React from "react";
import Gura from "./Gura.js";
import Myth from "./Myth.js";
import Ame from "./Ame.js";
import Ina from "./Ina.js";
import Calli from "./Calli.js";
import Kiara from "./Kiara.js";

export default function Main() {
    return (
        <div>
            <Myth />
            <Gura />
            <Ame />
            <Ina />
            <Calli />
            <Kiara />
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