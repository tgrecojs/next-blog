import autodux from 'autodux';

export const aboutMeInfo = [
  {
    active: false,
    title: 'Design Minded',
    subtitle: 'From Graphic Design to Functional Programming and back.',
    text: `
    <p>My name is Thomas Greco and I’m a JavaScript developer currently focused on building scalable JavaScript applications using functional programming concepts. Among the technologies I love using are ES6, React, Next.js, Material-UI (I discuss this more in technologies built with this app). Over the last two years, I’ve had the chance to work with people all over the globe for various reasons. This allowed me to gain experience doing everything from creating web layouts with bootstrap to teaching courses viewed by tens of thousands of people.</p>
    `,  links: [
      { name: 'Medium', url: 'https://medium.com'},
      {
        name: 'Contact Me',
        url: '/contact-me'
      }]
  }, {
    active: false,
    title: 'Technical Content',
    subtitle: 'Spreading knowledge on a global scale',
    text: `<p>My name is Thomas Greco and I’m a JavaScript developer currently focused on building scalable JavaScript applications using functional programming concepts. Among the technologies I love using are ES6, React, Next.js, Material-UI (I discuss this more in technologies built with this app). Over the last two years, I’ve had the chance to work with people all over the globe for various reasons. This allowed me to gain experience doing everything from creating web layouts with bootstrap to teaching courses viewed by tens of thousands of people.</p> 
    `,
    links: [
      { name: 'Medium', url: 'https://medium.com'},
      {
        name: 'Contact Me',
        url: '/contact-me'
      }]
  },
  {
    active: false,
    title: 'Advanced Engineering',
    submit: 'JavaScript is too dynmaic of a language for apps to have brittle architecture.',
    text: ` <p>My name is Thomas Greco and I’m a JavaScript developer currently focused on building scalable JavaScript applications using functional programming concepts. Among the technologies I love using are ES6, React, Next.js, Material-UI (I discuss this more in technologies built with this app). Over the last two years, I’ve had the chance to work with people all over the globe for various reasons. This allowed me to gain experience doing everything from creating web layouts with bootstrap to teaching courses viewed by tens of thousands of people.</p> 
    `,
    links: [
      { name: 'Medium', url: 'https://medium.com'},
      {
        name: 'Contact Me',
        url: '/contact-me'
      }]
  },
];
const id = x => x;

const aboutMeSlice = autodux({
  slice: 'about-me',
  initial: aboutMeInfo,
  selectors: {
    getValue: id
  }
});

const {
  selectors,
  reducer,
  initial,
  slice
} = aboutMeSlice;


export { selectors, reducer, initial, slice };
export default aboutMeSlice;
