import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Animate } from 'react-simple-animate';
import './styles.scss';

function Home() {
  return (
    <section className='home' id='home'>
      <div className='home__text-wrapper'>
        <h1>
          Hello, I'm Sk Sahil
          <br />
          I'm a Web Developer.
        </h1>
      </div>

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(600px)',
        }}
        end={{
          transform: 'translateX(0px)',
        }}
      >
        <div className='contact-me'>
          <div className='contact-me__buttons-wrapper'>
            <button>Contact me</button>
            <a>Download Resume</a>
          </div>
          <div className='contact-me__socials-wrapper'>
            <FaLinkedin size={32} />
            <FaTwitter size={32} />
            <SiGmail size={32} />
            <FaGithub size={32} />
          </div>
        </div>
      </Animate>
    </section>
  );
}

export default Home;
