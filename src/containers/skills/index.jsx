import React from 'react';
import { GiSkills } from 'react-icons/gi';
import { Line } from 'rc-progress';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { skillsData } from './data';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';

function Skills() {
  return (
    <section id='skills' className='skills'>
      <PageHeaderContent headerText='My Skills' icon={<GiSkills size={40} />} />

      <div className='skills__content-wrapper'>
        {skillsData.map((item, index) => (
          <div className='skills__content-wrapper__inner-conent' key={index}>
            <Animate
              play
              duration={1}
              delay={0.4}
              start={{ transform: 'translateX(-250px)' }}
              end={{ transform: 'translateX(0px)' }}
            >
              <h3 className='skills__content-wrapper__inner-conent__category-text'>
                {item.label}
              </h3>
              <div>
                {item.data.map((skill, index) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={['opacity : 1', 'opacity : 0']}
                    iterationCount={1}
                  >
                    <div className='progressbar-wrapper' key={index}>
                      <p>{skill.skillName}</p>
                      <Line
                        percent={skill.percentage}
                        strokeWidth={2}
                        strokeColor='var(--selected-theme-main-color)'
                        strokeLinecap='square'
                        trailWidth={2}
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
