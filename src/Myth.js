import React, { useEffect } from "react";
import "./css/myth.css";
import Gura from "./img/gura-selfie.png";
import Ame from "./img/Ame.png";
import Ina from "./img/Ina.png";
import Calli from "./img/Calli.png";
import Kiara from "./img/Kiara.png";
import mythLogo from "./img/myth-logo.png";

export default function Myth() {
    useEffect(() => {
        const carousel = document.querySelector(".carousel");
        window.M.Carousel.init(carousel, {});
    }, []);

    return (
        <div className="myth-page">
            <h1 className="myth-title">Myth</h1>
            <img src = {mythLogo} className="myth-logo" alt="myth-logo" />
            <div className="carousel">
                <div className="carousel-item item-size">
                    <img src={Gura} alt="Gura" />
                    <div className="character-name">Gawr Gura</div>
                </div>
                <div className="carousel-item item-size">
                    <img src={Ame} alt="Ame" />
                    <div className="character-name">Amelia Watson</div>
                </div>
                <div className="carousel-item item-size">
                    <img src={Ina} alt="Ina" />
                    <div className="character-name">Ninomae Ina'nis</div>
                </div>
                <div className="carousel-item item-size">
                    <img src={Calli} alt="Calli" />
                    <div className="character-name">Calliope Mori</div>
                </div>
                <div className="carousel-item item-size">
                    <img src={Kiara} alt="Kiara" />
                    <div className="character-name">Takanashi Kiara</div>
                </div>
            </div>
        </div>
    )
}
