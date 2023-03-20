import React from 'react';
import './css/Gura.css';
import gura from './img/gura.png';
import guraSelfie from './img/gura-selfie.png';
import A from './img/gura-A.png';
import Math from './img/gura-math.jpg';
import Sing from './img/gura-sing.jpg';

function Gura() {

  return (
    <div>
      <section className='timeline-section' id="section1">
        <svg xmlns="http://www.w3.org/2000/svg" className="wave" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L12,117.3C24,139,48,181,72,202.7C96,224,120,224,144,202.7C168,181,192,139,216,128C240,117,264,139,288,128C312,117,336,75,360,90.7C384,107,408,181,432,192C456,203,480,149,504,144C528,139,552,181,576,202.7C600,224,624,224,648,186.7C672,149,696,75,720,74.7C744,75,768,149,792,160C816,171,840,117,864,96C888,75,912,85,936,128C960,171,984,245,1008,250.7C1032,256,1056,192,1080,186.7C1104,181,1128,235,1152,240C1176,245,1200,203,1224,181.3C1248,160,1272,160,1296,165.3C1320,171,1344,181,1368,170.7C1392,160,1416,128,1428,112L1440,96L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"></path></svg>
        <div className='timeline-items'>
          <div className='timeline-item'>
            <div>
              <h1 className='gura-title'>Gawr Gura</h1>
              <img src={gura} alt='gura' className='gura-img' />
            </div>

            <h1 className='gura-self-intro'>Self-introduction</h1>
            <p className='gura-self-intro-content'>
              A descendant of the Lost City of Atlantis, who swam to Earth while saying, 'It's so boring down there LOLOLOL!' Gura bought her clothes (and her shark hat) in the human world and she really loves them. In her spare time, she enjoys talking to marine life.
            </p>

            <ul className='gura-link'>
              <li className='gura-youtube'>
                <a href="https://www.youtube.com/@GawrGura">
                  <i class="fa fa-youtube-play" aria-hidden="true">
                  </i>
                  <p>Youtube</p>
                </a>
              </li>
              <li className='gura-twitter'>
                <a href="https://twitter.com/gawrgura">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  <p>Twitter</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="timeline-content">Gawr Gura</div>
        <div className="timeline-content">Watson Amelia</div>
        <div className="timeline-content">Ninomae Ina'nis</div>
        <div className="timeline-content">Calliope Mori</div>
        <div className="timeline-content">Takanashi Kiara</div>


      </section>
      <section className='gura-info-page' id="info-page">
        <div className='gura-info' id="info">
          <h2 className='gura-info-title'>Personal Profile</h2>
          <div className='layer'>
          </div>
          <div className='gura-property-frame'>
            <p>Name: Gawr Gura</p>
            <p>Height: 141 cm</p>
            <p>Age: over 9000 years old</p>
            <p>Constellation: Gemini</p>
            <p>Debut time: 2020/9/13</p>
          </div>
          <img src={guraSelfie} className='gura-selfie' alt='gura-selfie' />
        </div>
      </section>


      <section className='gura-video-page'>
        <header className='gura-video-page-title'>
          <h2>Videos</h2>
        </header>
        <div className='gura-video-container'>
          <ul className='gura-video-list'>
            <li className='gura-video'>
              <a href="https://www.youtube.com/watch?v=r06UeXyiTEg&ab_channel=KazumaSensei" className='gura-video-link'>
                <figure>
                  <img src={A} className="gura-A" alt='gura-video' />
                </figure>
                <p className='gura-video-label'>Meme</p>
                <div className='gura-video-content'>
                  <p>
                    "A"
                  </p>
                </div>
              </a>
            </li>
            <li className='gura-video'>
              <a href="https://www.youtube.com/watch?v=BBDcKfmU1qc&ab_channel=%E7%83%A4%E9%AF%8Amansharkman" className='gura-video-link'>
                <figure>
                  <img src={Math} className="gura-math" alt='gura-video' />
                </figure>
                <p className='gura-video-label'>Clip</p>
                <div className='gura-video-content'>
                  <p>
                    Quite bad at math
                  </p>
                </div>
              </a>
            </li>
            <li className='gura-video'>
              <a href="https://www.youtube.com/watch?v=LbZMzcGU2t0&ab_channel=%E5%82%A2%E5%82%A2%E5%8F%AA%E6%83%B3%E7%9D%A1%E5%89%8D%E8%81%BD%E6%AD%8C" className='gura-video-link'>
                <figure>
                  <img src={Sing} className="gura-sing" alt='gura-video' />
                </figure>
                <p className='gura-video-label'>Song</p>
                <div className='gura-video-content'>
                  <p>
                    Good at singing, cover songs are also classic
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>


    </div>
  );
}

export default Gura;
