import React , { useState, useEffect }from "react";
import "./css/Ame.css";
import Amelia from "./img/Ame/Ame-img.png";
import ame from "./img/Ame/Ame.png";

function Ame() {

    const [text, setText] = useState("");
    const [fullText, setFullText] = useState(
        "Amelia heard strange rumors online surrounding hololive: talking foxes, magical squirrels, superhuman dogs, and more. Soon after beginning her investigation on hololive, and just out of interest, she decided to become an idol herself! She loves to pass her time training her reflexes with FPS games, and challenging herself with puzzle games. It\"s elementary, right ?"
    );
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index]);
                setIndex(index + 1);
            }, 40);
        }
    }, [index]);
    return (
        <div>
            <section className="ame-timeline-section" id="section2">
                <div className="ame-page-deco1"></div>
                <div className="ame-page-deco2"></div>
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="wave"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#fff"
                        fillOpacity="1"
                        d="M0,96L12,117.3C24,139,48,181,72,202.7C96,224,120,224,144,202.7C168,181,192,139,216,128C240,117,264,139,288,128C312,117,336,75,360,90.7C384,107,408,181,432,192C456,203,480,149,504,144C528,139,552,181,576,202.7C600,224,624,224,648,186.7C672,149,696,75,720,74.7C744,75,768,149,792,160C816,171,840,117,864,96C888,75,912,85,936,128C960,171,984,245,1008,250.7C1032,256,1056,192,1080,186.7C1104,181,1128,235,1152,240C1176,245,1200,203,1224,181.3C1248,160,1272,160,1296,165.3C1320,171,1344,181,1368,170.7C1392,160,1416,128,1428,112L1440,96L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"
                    ></path>
                </svg> */}
                <div className="timeline-items">
                    <div className="timeline-item">
                        <div>
                            <h1 className="ame-title">Waston Amelia</h1>
                            <img src={Amelia} alt="ame" className="ame-img" />
                        </div>

                        <h1 className="ame-self-intro">Self-introduction</h1>
                        <p className="ame-self-intro-content">
                            {text}
                        </p>

                        <ul className="ame-link">
                            <li className="ame-youtube">
                                <a href="https://www.youtube.com/@Gawrame">
                                    <button className="ame-youtube-button">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            fill="currentColor"
                                            className="bi bi-youtube"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                        </svg>


                                        <span>Youtube</span>
                                    </button>
                                </a>
                            </li>
                            <li className="ame-twitter">
                                <a href="https://twitter.com/gawrame">
                                    <button className="ame-twitter-button">
                                        <svg
                                            viewBox="0 0 16 16"
                                            className="bi bi-twitter"
                                            fill="currentColor"
                                            height="18"
                                            width="18"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                        </svg>
                                        <span>Twitter</span>
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* second page */}
            <section className="ame-info-page" id="info-page">
                <div className="ame-info" id="info">
                    <h2 className="ame-info-title">Personal Profile</h2>
                    <div className="layer"></div>
                    <div className="ame-property-frame animate__animated animate__fadeIn">
                        <p>Name: Waston Amelia</p>
                        <p>Height: 150 cm</p>
                        <p>Age: unknown</p>
                        <p>Constellation: Capricorn</p>
                        <p>Debut time: 2020/9/13</p>
                    </div>
                    <img src={ame} className="ame-selfie" alt="ame-selfie" />
                </div>
            </section >

            {/* third page */}
            < section className="ame-video-page" >
                <header className="ame-video-page-title">
                    <h2>Videos</h2>
                </header>
                <div className="ame-video-container">
                    <ul className="ame-video-list">
                        <li className="ame-video">
                            <a
                                href="https://www.youtube.com/watch?v=r06UeXyiTEg&ab_channel=KazumaSensei"
                                className="ame-video-link"
                            >
                                <figure>
                                    {/* <img src={A} className="ame-A" alt="ame-video" /> */}
                                </figure>
                                <p className="ame-video-label">Meme</p>
                                <div className="ame-video-content">
                                    <p>"A"</p>
                                </div>
                            </a>
                        </li>
                        <li className="ame-video">
                            <a
                                href="https://www.youtube.com/watch?v=BBDcKfmU1qc&ab_channel=%E7%83%A4%E9%AF%8Amansharkman"
                                className="ame-video-link"
                            >
                                <figure>
                                    {/* <img src={Math} className="ame-math" alt="ame-video" /> */}
                                </figure>
                                <p className="ame-video-label">Clip</p>
                                <div className="ame-video-content">
                                    <p>Quite bad at math</p>
                                </div>
                            </a>
                        </li>
                        <li className="ame-video">
                            <a
                                href="https://www.youtube.com/watch?v=LbZMzcGU2t0&ab_channel=%E5%82%A2%E5%82%A2%E5%8F%AA%E6%83%B3%E7%9D%A1%E5%89%8D%E8%81%BD%E6%AD%8C"
                                className="ame-video-link"
                            >
                                <figure>
                                    {/* <img src={Sing} className="ame-sing" alt="ame-video" /> */}
                                </figure>
                                <p className="ame-video-label">Song</p>
                                <div className="ame-video-content">
                                    <p>Good at singing, cover songs are also classic</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section >
        </div >
    )
}

export default Ame;