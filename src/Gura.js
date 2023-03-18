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
      <section className='timeline-section'>
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
