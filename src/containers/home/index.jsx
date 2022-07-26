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
          Hello, I'm John Doe
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
            <a
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noreferrer'
            >
              Download Resume
            </a>
          </div>
          <div className='contact-me__socials-wrapper'>
            <a
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin size={32} />
            </a>

            <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
              <FaTwitter size={32} />
            </a>
            <a href='mailto:abcd123@gmail.com' target='_blank' rel='noreferrer'>
              <SiGmail size={32} />
            </a>
            <a href='https://github.com/' target='_blank' rel='noreferrer'>
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </Animate>
    </section>
  );
}

export default Home;
