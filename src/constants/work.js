import fresh from '../assets/project1.png';
import movies from '../assets/project2.png';
import lyriks from '../assets/project3.png';
import calendar from '../assets/project4.png';

const work = [
  {
    name: 'Fresh E-Commerce',
    description: 'Complete, functional and fully responsive e-commerce created with React.Js, Node.js, Strapi and MongoDB.',
    imgUrl: fresh,
    projectLink: 'https://fresh-e-commerce.netlify.app/',
    codeLink: 'https://github.com/UzielPatron/fresh-e-commerce-reactjs',
    tags: [ 'ReactJS + NodeJS', 'Responsive Design', 'All' ],
  },
  {
    name: 'Movies App',
    description: 'A web app for movies and series with React and Sass, implementing the TMDB API.',
    imgUrl: movies,
    projectLink: 'https://moviesapp-uzielpatron.netlify.app/',
    codeLink: 'https://github.com/UzielPatron/react-movie',
    tags: [ 'Public APIs', 'Responsive Design', 'All'  ],
  },
  {
    name: 'Lyriks Music Player',
    description: 'Spotify-like music player with React and Tailwind CSS',
    imgUrl: lyriks,
    projectLink: 'https://lyriks-app-uzielpatron.netlify.app/',
    codeLink: 'https://github.com/UzielPatron/lyriks-music-player',
    tags: [ 'Public APIs', 'Responsive Design', 'All'  ],
  },
  {
    name: 'MERN Calendar',
    description: 'Calendar application built with React, Node.js, Express and MongoDB',
    imgUrl: calendar,
    projectLink: 'https://my-mern-calendar-back-end.herokuapp.com/',
    codeLink: 'https://github.com/UzielPatron',
    tags: [ 'MERN', 'ReactJS + NodeJS', 'All' ],
  },
]

export default work;