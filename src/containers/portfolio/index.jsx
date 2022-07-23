import React, { useState } from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { AiFillProject } from 'react-icons/ai';
import { filterOptions, portfolioData } from './data';
import './styles.scss';

function Portfolio() {
  const [filterValue, setFilterValue] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleFilter = function (id) {
    setFilterValue(id);
  };

  const filteredPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);

  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent
        headerText='My Portfolio'
        icon={<AiFillProject size={40} />}
      />

      <div className='portfolio__content'>
        <ul className='portfolio__content__filter'>
          {filterOptions.map((option) => (
            <li
              onClick={() => handleFilter(option.id)}
              key={`filter${option.id}`}
              className={option.id === filterValue ? 'active' : ''}
            >
              {option.label}
            </li>
          ))}
        </ul>

        <div className='portfolio__content__cards'>
          {filteredPortfolioData.map((item, index) => (
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={index}
              className='portfolio__content__cards__item'
            >
              <div className='portfolio__content__cards__item__img-wrapper'>
                <a href='#id'>
                  <img
                    id={`image${index}`}
                    src={item.image}
                    alt={item.projectName}
                  />
                </a>
              </div>
              <div className='overlay'>
                {hoveredIndex === index && (
                  <div>
                    <p>{item.projectName}</p>
                    <a href={item.projectLink} target='_blank' rel='noreferrer'>
                      <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
