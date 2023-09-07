const projectsData = [
  {
    id: 1,
    img: require('./imgs/origami.png'),
    title: 'Origami React App',
    shortTitle: 'Origami',
    desc: 'Project developed to play with SVG animations and share pictures of my origamis',
    skills: [
      'React Js',
      'styled-components',
      'Responsive Design',
      'Github',
      'GIT',
      'Testing Library',
    ],
    linkWeb: 'https://origami-kevin.netlify.app/',
    linkGit: 'https://github.com/beyondthefruit/origami',
  },
  {
    id: 2,
    img: require('./imgs/playlist.jpg'),
    title: 'Playlist React App',
    shortTitle: 'Playlist',
    desc: 'Project built in pair programming with a software developer to share our favorite songs.',
    skills: [
      'React Js',
      'styled-components',
      'Responsive Design',
      'Github',
      'GIT',
      'Testing Library',
    ],
    linkWeb: 'https://react-playlist.netlify.app/',
    linkGit: 'https://github.com/julianoiret/playlist-react',
  },
  {
    id: 3,
    img: require('./imgs/catstronauts.png'),
    title: 'Catstronaut React App',
    shortTitle: 'Catstronaut',
    desc: 'Animations and parallax effects using React-Spring library. I wanted a basic project to test some cool parallax effects',
    skills: [
      'React Js',
      'React-SPRING',
      'CSS',
      'Responsive Design',
      'Github',
      'GIT',
    ],
    linkWeb: 'https://catstronaut-saturn-mission.netlify.app/',
    linkGit: 'https://github.com/beyondthefruit/para-play',
  },
  {
    id: 4,
    img: require('./imgs/book.jpg'),
    title: 'Book list review React App',
    shortTitle: 'Book list',
    desc: 'My first React App, created from scratch. This is my own book list with my own review. I included various functionalities, it is dynamic (star ratings, buttons choice by genres or authors...)',
    skills: ['React Js', 'HTML', 'CSS', 'Responsive Design', 'Github', 'GIT'],
    linkWeb: 'https://booklist-app-kevin.netlify.app/',
    linkGit: 'https://github.com/beyondthefruit/Booklist',
  },

  {
    id: 5,
    img: require('./imgs/blog.png'),
    title: 'Blog list Full Stack Project',
    shortTitle: 'Blog list',
    desc: 'Project built during the Full Stack Open course. It is a basic form to write and manage blog posts with user Identification',
    skills: [
      'React Js',
      'Node Js',
      'Express Js',
      'E2E Testing',
      'Cypress',
      'User login',
      'MongoDB',
      'Github',
      'GIT',
    ],

    linkGit: 'https://github.com/beyondthefruit/fullstackopen',
  },
  {
    id: 6,
    img: require('./imgs/boc1.jpg'),
    title: 'Boards of Canada webpage Javascript',
    shortTitle: 'Boards of Canada',
    desc: "Probably my favourite music band. I've made a couple of web projects on them since I started my tech journey. Made with Javascript, Buttons are dynamic",
    skills: ['Javascript', 'HTML', 'CSS', 'Responsive Design', 'Github', 'GIT'],
    linkWeb: 'https://boc-fanpage-js.netlify.app/',
    linkGit: 'https://github.com/beyondthefruit/JS-BOC-FANPAGE',
  },

  {
    id: 7,
    img: require('./imgs/tours.jpg'),
    title: 'Travel tours React',
    shortTitle: 'Tours',
    desc: 'Project built during my react course. Many functionalities (buttons show more, delete specific tours)',
    skills: ['React Js', 'HTML', 'CSS', 'Github', 'GIT'],
    linkWeb: 'https://travel-tours-react-beyond.netlify.app/',
    linkGit: 'https://github.com/beyondthefruit/travel-tours-react',
  },
  {
    id: 8,
    img: require('./imgs/reviews.jpg'),
    title: 'Reviews React',
    shortTitle: 'Reviews',
    desc: 'Project built during my react course. Buttons to display next and previous reviews, random reviews etc',
    skills: ['React Js', 'HTML', 'CSS', 'Github', 'GIT'],
    linkWeb: 'https://reviews-react-beyond.netlify.app/',
    linkGit: 'https://github.com/beyondthefruit/reviews-react',
  },
  {
    id: 9,
    img: require('./imgs/menu.jpg'),
    title: 'Restaurant menu React',
    shortTitle: 'Menu',
    desc: 'Project built during my React course, buttons are dynamic. Similar to the Javascript project but using react',
    skills: ['React Js', 'HTML', 'CSS', 'Github', 'GIT'],
    linkWeb: 'https://menu-react-beyond.netlify.app/',
    linkGit: 'https://github.com/beyondthefruit/menu-react',
  },

  {
    id: 10,
    img: require('./imgs/profile.jpg'),
    title: 'Basic front end challenge',
    shortTitle: 'Profile card',
    desc: 'Front end challenge. I used SCSS for this project',
    skills: ['HTML', 'SCSS', 'Responsive Design'],
    linkWeb: 'https://basic-frontend-challenge-beyond.netlify.app/',
    linkGit: 'https://github.com/beyondthefruit/social-profile-card-challenge',
  },
  {
    id: 11,
    img: require('./imgs/catstronaut.jpg'),
    title: 'Catstronaut Space Academy',
    shortTitle: 'Catstronaut',
    desc: 'Full-stack project Apollo GrahQL, part of the certification Graph Developer Associate. Resolvers, data, mutations',
    skills: ['Apollo GraphQL', 'React Js', 'Heroku'],
    linkWeb: 'https://catstronauts--client-kevin.herokuapp.com/',
    linkGit: 'https://github.com/beyondthefruit/odyssey-lift-off-part5-server',
  },
  {
    id: 12,
    img: require('./imgs/portfolio.jpg'),
    title: 'Portfolio',
    shortTitle: 'Portfolio',
    desc: 'My own portfolio developed from scratch, it include most of my projects',
    skills: ['React Js', 'CSS', 'Responsive Design', 'Github', 'GIT'],
    linkWeb: 'https://catstronauts--client-kevin.herokuapp.com/',
    linkGit: 'https://github.com/beyondthefruit/portfolio-react',
  },
  {
    id: 13,
    img: require('./imgs/menu.jpg'),
    title: 'Restaurant menu Javascript',
    shortTitle: 'Menu',
    desc: 'Project built during my Javascript course, buttons are dynamic',
    skills: ['Javascript', 'HTML', 'CSS', 'Github', 'GIT'],
    linkWeb: 'https://menu-js-beyond.netlify.app/',
    linkGit: 'https://github.com/beyondthefruit/menu-JS',
  },
  {
    id: 14,
    img: require('./imgs/darkmode.jpg'),
    title: 'Simple dark mode',
    shortTitle: 'Dark mode',
    desc: 'Quick project built during my Javascript course',
    skills: ['Javascript', 'HTML', 'CSS', 'Github', 'GIT'],
    linkWeb: 'https://js-darkmode-beyond.netlify.app/',
    linkGit: 'https://github.com/beyondthefruit/JS-darkmode',
  },
];
export default projectsData;
