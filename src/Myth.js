import React from "react";
import "./css/myth.css";
import Gura from "./img/gura-selfie.png";

export default function Myth() {
    return (
        <div>
            <section className="myth-page">
                <header className="myth-page-title">Myth</header>
                <div className="myth-container">
                    <ul>
                        <li>
                            <img src = {Gura} alt="gura" />
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}