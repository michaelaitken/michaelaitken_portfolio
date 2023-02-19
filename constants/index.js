const nodejs = {name: 'Node.js', svg: '/nodejs_icon.svg'};
const materialui = {name: 'Material UI', svg: '/materialui_icon.svg'};
const tailwind = {name: 'TailwindCSS', svg: '/tailwind_icon.svg'};
const sass = {name: 'SASS', svg: '/sass_icon.svg'};
const react = {name: 'React.js', svg: '/react_icon.svg'};
const nextjs = {name: 'NEXT.js', svg: '/nextjs_icon.svg'};
const expressjs = {name: 'Express.js', svg: '/expressjs_icon.svg'};
const mongodb = {name: 'MongoDB', svg: '/mongodb_icon.svg'};
const postgresql = {name: 'PostgreSQL', svg: '/postgresql_icon.svg'};
const rapidapi = {name: 'RapidAPI', svg: '/rapidapi_icon.svg'};
const redux = {name: 'Redux', svg: '/redux_icon.svg'};
const typescript = {name: 'Typescript', svg: '/typescript_icon.svg'};
const bootstrap = {name: 'Bootstrap', svg: '/bootstrap_icon.svg'};
const firebase = {name: 'Firebase', svg: '/firebase_icon.svg'};

const data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const linkedInProfile = 'https://www.linkedin.com/in/maitken/';
export const githubProfile = 'https://github.com/michaelaitken';

// TECH: Don't include more than 5 tech items! Mobile Scaling might have issues.
export const projectData = [
    {
      id: 'project-1',
      imgUrl: '/project-1.jpg',
      title: 'Upcoming...',
      subtitle: data,
      liveLink: '',
      gitLink: 'https://github.com/michaelaitken',
      tech: [tailwind, react, nodejs, typescript, nextjs],
    },
    {
      id: 'project-2',
      imgUrl: '/aitken-music.png',
      title: 'Aitken Music',
      subtitle: 'Aitken Music is a Spotify clone web app experimenting with RapidAPI and Redux',
      liveLink: 'https://music.michaelaitken.com',
      gitLink: 'https://github.com/michaelaitken/aitken_music',
      tech: [tailwind, react, rapidapi, redux],
    },
    {
      id: 'project-3',
      imgUrl: '/project-3.jpg',
      title: 'Upcoming...',
      subtitle: data,
      liveLink: '',
      gitLink: 'https://github.com/michaelaitken',
      tech: [sass, react, nodejs, postgresql, expressjs],
    },
    {
      id: 'project-4',
      imgUrl: '/project-4.jpg',
      title: 'Upcoming...',
      subtitle: data,
      liveLink: '',
      gitLink: 'https://github.com/michaelaitken',
      tech: [bootstrap, react, nodejs, mongodb, materialui],
    },
  ];


  // techSkills must be a factor of 3, for the last 3 elements to render.
export const techSkills = [
  {
    name: 'Node.js',
    svg: '/nodejs_icon.svg',
    color: 'hover-nodejs',
  },
  {
    name: 'Material UI',
    svg: '/materialui_icon.svg',
    color: 'hover-materialui',
  },
  {
    name: 'TailwindCSS',
    svg: '/tailwind_icon.svg',
    color: 'hover-tailwind',
  },
  {
    name: 'HTML 5',
    svg: '/html5_icon.svg',
    color: 'hover-html',
  },
  {
    name: 'Javascript',
    svg: '/javascript_icon.svg',
    color: 'hover-javascript',
  },
  {
    name: 'SASS',
    svg: '/sass_icon.svg',
    color: 'hover-sass',
  },
  {
    name: 'Python',
    svg: '/python_icon.svg',
    color: 'hover-python',
  },
  {
    name: 'React.js',
    svg: '/react_icon.svg',
    color: 'hover-react',
  },
  {
    name: 'CSS 3',
    svg: '/css3_icon.svg',
    color: 'hover-css',
  },
  {
    name: 'Git',
    svg: '/git_icon.svg',
    color: 'hover-git',
  },
  {
    name: 'NEXT.js',
    svg: '/nextjs_icon.svg',
    color: 'hover-next-express',
  },
  {
    name: 'Express.js',
    svg: '/expressjs_icon.svg',
    color: 'hover-next-express',
  },
  {
    name: 'MongoDB',
    svg: '/mongodb_icon.svg',
    color: 'hover-mongodb',
  },
  {
    name: 'PostgreSQL',
    svg: '/postgresql_icon.svg',
    color: 'hover-postgresql',
  },
  {
    name: 'RapidAPI',
    svg: '/rapidapi_icon.svg',
    color: 'hover-rapidapi',
  },
  {
    name: 'Redux',
    svg: '/redux_icon.svg',
    color: 'hover-redux-bootstrap',
  },
  {
    name: 'Typescript',
    svg: '/typescript_icon.svg',
    color: 'hover-typescript',
  },
  {
    name: 'Bootstrap',
    svg: '/bootstrap_icon.svg',
    color: 'hover-redux-bootstrap',
  },
  {
    name: 'VS Code',
    svg: '/vscode_icon.svg',
    color: 'hover-vscode',
  },
  {
    name: 'Firebase',
    svg: '/firebase_icon.svg',
    color: 'hover-firebase',
  },

  /* NEXT, Express, 
  MongoDB SQL, RapidAPI, 
  Redux, Bootstrap, VScode, Typescript, Firebase */
]