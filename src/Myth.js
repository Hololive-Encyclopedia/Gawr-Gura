import React, { useEffect } from "react";
import "./css/myth.css";
import Gura from "./img/Gura/gura-selfie.png";
import Ame from "./img/Ame/Ame.png";
import Ina from "./img/Ina/Ina.png";
import Calli from "./img/Calli/Calli.png";
import Kiara from "./img/Kiara/Kiara.png";
import mythLogo from "./img/myth-logo.png";

export default function Myth() {

    const scrollToIntro = (event) => {
        event.preventDefault();

        const introSection = document.querySelector('#CharacterSelect');
        const introSectionPos = introSection.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: introSectionPos,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const carousel = document.querySelector(".carousel");
        window.M.Carousel.init(carousel, {});
    }, []);

    return (
        <div className="myth-page" id="CharacterSelect">
            <div className="upbutton">
                <a href="#CharacterSelect" onClick={scrollToIntro}>
                    <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
                </a>
            </div>
            <h1 className="myth-title">Myth</h1>
            <img src={mythLogo} className="myth-logo" alt="myth-logo" />
            <div className="carousel">
                <div className="carousel-item item-size">
                    <a href="#section1">
                        <img src={Gura} alt="Gura" />
                        <div className="character-name">Gawr Gura</div>
                    </a>
                </div>

                <div className="carousel-item item-size">
                    <a href="#section2">
                        <img src={Ame} alt="Ame" />
                        <div className="character-name">Amelia Watson</div>
                    </a>
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
        </div >
    )
}
