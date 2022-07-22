import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaDatabase, FaReact } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import { CgCPlusPlus } from 'react-icons/cg';
import { Animate } from 'react-simple-animate';
import PageHeaderContent from '../../components/pageHeaderContent';
import { personalData } from './data';
import './styles.scss';

function About() {
  return (
    <section className='about' id='about'>
      <PageHeaderContent
        headerText='About me'
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className='about__content'>
        <div className='about__content__personalWrapper'>
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: 'translateX(-800px)' }}
            end={{ transform: 'translateX(0px)' }}
          >
            <h3 className='developerContent'>Web developer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet justo lorem. Nullam pharetra mattis hendrerit. Nam lacinia
              urna justo, id facilisis purus accumsan sed. Pellentesque lacinia
              arcu enim. Sed in dui non sapien dignissim mattis. Integer
              sollicitudin, elit sit amet lacinia auctor, tellus augue lacinia
              risus, ut venenatis libero felis vitae mauris. Nam tellus ex,
              ullamcorper vel faucibus ut, pharetra eget odio. Sed laoreet
              mattis volutpat. Donec ac elementum mi. Vivamus ut tortor nec erat
              vehicula semper. Sed ultricies nunc eget nisi fringilla, sed
              ornare lorem aliquet. Ut eget orci non leo semper rhoncus eget in
              turpis. Nulla pulvinar consequat tristique. Suspendisse potenti.
              Phasellus pharetra posuere dui ac tincidunt.
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: 'translateX(500px)' }}
            end={{ transform: 'translateX(0px)' }}
          >
            <h3 className='personalContent'>Personal Information</h3>
            <ul>
              {personalData.map((item, index) => (
                <li key={index}>
                  <span className='title'>{item.label}</span>
                  <span className='value'>{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className='about__content__servicesWrapper'>
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: 'translateX(500px)' }}
            end={{ transform: 'translateX(0px)' }}
          >
            <div className='about__content__servicesWrapper__innerContent'>
              <div>
                <FaReact size={60} color='var(--selected-theme-main-color)' />
              </div>
              <div>
                <SiDjango size={60} color='var(--selected-theme-main-color)' />
              </div>
              <div>
                <FaDatabase
                  size={60}
                  color='var(--selected-theme-main-color)'
                />
              </div>
              <div>
                <CgCPlusPlus
                  size={60}
                  color='var(--selected-theme-main-color)'
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;
