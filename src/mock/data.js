import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'marcos.jpg',
  paragraphOne:
    'My name is Marcos Frutos. I am a Front-End Developer with 5 years experience, mainly in professional environments.',
  paragraphTwo:
    'I have worked for companies such as Bynder, Siemens and currently, Helloprint. In Helloprint I create and maintain the Component Design System, built with VueJS (NuxtJS as a framework over it), TailwindCSS and flexbox, Modern Javascript ES6+, and Contentful API.',
  paragraphThree:
    'I am also improving the Mobile Experience, Performance and Optimisation, using great tools such as Lighthouse, Lazy Loading, CDN.',
  resume: './MarcosFrutos_CV_2020.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    videoId: '69ZyEw0T7Z8',
    title: 'Helloprint',
    info:
      'Developed with VueJS and NuxtJS as a main library. We have a huge Component Design System built over the time, where we have reusable components and custom ones. Components are built using BEM Methodology, TailwindCSS and Scoped SCSS, Contentful API and Block Designs, i18n localisation library using Crowdin.',
    info2: '',
    url: 'https://helloprint.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    videoId: '69ZyEw0T7Z8',
    title: 'Tesla Range Calculator',
    info:
      'This is already done in React and VueJS, but nobody did it with Vanilla Javascript. Well I did. Without using any major front-end libraries, I developed this Tesla Landing page with a range calculator using HTML5, SCSS, ES6+ Javascript (Intersection and Mutation Observers), and Webpack.',
    info2: '',
    url: 'https://laughing-fermat-878689.netlify.app',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Could we be a match? Hit me up',
  btn: 'Email me',
  email: 'hola@marfru.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/M4rfru',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/marcos-frutos-3a023385/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Marfru',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
