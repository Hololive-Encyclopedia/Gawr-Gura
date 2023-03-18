import React from 'react';
import './Gura.css';
import gura from './img/gura.png';
import guraSelfie from './img/gura-selfie.png';

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
              A descendant of the Lost City of Atlantis, who swam to Earth while saying, "It's so boring down there LOLOLOL!"
              Gura bought her clothes (and her shark hat) in the human world and she really loves them. In her spare time, she enjoys talking to marine life.
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

          {/* <div className='timeline-item'>

          </div>
          <div className='timeline-item'>

          </div> */}
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


    </div>
  );
}

export default Gura;
