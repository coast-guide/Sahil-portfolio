import ImageOne from '../../images/image1.png';
import ImageTwo from '../../images/image2.png';
import ImageThree from '../../images/image3.png';
import ImageFour from '../../images/image4.png';

export const portfolioData = [
  {
    sectionId: 4,
    projectName: 'Dream Location',
    projectLink: 'https://gleaming-syrniki-aec77b.netlify.app/',
    image: ImageOne,
  },
  {
    sectionId: 2,
    projectName: 'Feedback App',
    projectLink: 'https://goofy-engelbart-95db10.netlify.app/',
    image: ImageTwo,
  },
  {
    sectionId: 2,
    projectName: 'Portfolio Website',
    projectLink: '#',
    image: ImageThree,
  },
  {
    sectionId: 3,
    projectName: 'Listings API',
    projectLink: 'https://dream-location-backend.herokuapp.com/swagger/',
    image: ImageFour,
  },
];

export const filterOptions = [
  {
    label: 'All',
    id: 1,
  },
  {
    label: 'Frontend',
    id: 2,
  },
  {
    label: 'Backend',
    id: 3,
  },
  {
    label: 'Fullstack',
    id: 4,
  },
];
