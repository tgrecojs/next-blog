import React from 'react';
const content = `My name is Thomas Greco and I’m a JavaScript developer focused on building reusable applications through functional programming. Before becoming passionate about the web, I worked in graphic design and this had a direct result on the way in which I approached web development. Specifically, I set out to master responsive design before venturing into the depths of JavaScript and this gave me the ability to quickly create aesthetically-pleasing web apps that work seamlessly across devices. My lover for design, however big, is still unmatched to that of JavaScript (as well as programming in general). Most recently, my focus has been dedicated almost entirely to understanding the importance of building software using pure functions to ensure the least amount of side-effects possible (network communication, logging to console, etc) to ensure application code is prone to the least amount of randomness possible. Want to hear more? I’ve written a blog post about it here.`
import { connect } from 'react-redux';
import { selectors } from './about-me/reducer';

const { getValue } = selectors;


const InfoTile = ({
  title, text
}) => ( 
  <div>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);


const tgShowcase = ({info}) => {
    return  (
  <div>
  {
    info.map(x =>  {
      console.log('x ==> ',x);
      <div>
     <h2>{x.title}</h2>
     <p>{x.content}</p>
     </div>
    })
  }
  </div>
  )
}

const mapState = state => ({ info: state.aboutMe });

export default connect(mapState)(tgShowcase);
