import autodux from 'autodux';

export const aboutMeInfo = [
  {
  active: false,
  title: `Design Minded`,
  text: `
  <h2>My name is Thomas Greco</h2> and I’m a JavaScript developer focused on building reusable applications through functional programming. Before becoming passionate about the web, I worked in graphic design and this had a direct result on the way in which I approached web development. Specifically, I set out to master responsive design before venturing into the depths of JavaScript and this gave me the ability to quickly create aesthetically-pleasing web apps that work seamlessly across devices. My lover for design, however big, is still unmatched to that of JavaScript (as well as programming in general). Most recently, my focus has been dedicated almost entirely to understanding the importance of building software using pure functions to ensure the least amount of side-effects possible (network communication, logging to console, etc) to ensure application code is prone to the least amount of randomness possible. Want to hear more? I’ve written a blog post about it <a href="twitter.com">here</a>.
  `,  links: ['https://medium.com', '/contact-me']
}, {
  active: false,
title: `Favor Composition over Inheritence`,
text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
}, { 
    active: false, 
    title: `Experience Teaching`, 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  }
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
