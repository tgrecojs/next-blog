import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Router from 'next/router';
const navigate = (route) => Router.push(`/${route}`);
import { baseFont, flexCol, width60 } from '../../constants/theme';

const style = {
  baseText: { fontFamily: 'Lato', fontSize: 16 },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};


function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = () => (
  <div>
    <Tabs>
      <Tab label="About Me" >
        <div style={flexCol}>
          <h2 style={baseFont}>From Graphic Design To Functional Programming</h2>
          <p style={width60} >
          Welcome to my web application! My name is Thomas Greco and I'm a JavaScript developer with a focus on building composoble software.
          Since starting my career, I've had the opportunity to build web applications with popular frameworks such as Ember, Angular, etc. My time spent
          working in graphic design played a tremendous role in the way in which I learned development. Before mastering JavaScript, I focused on becoming highly proficient
          with Sass CSS, BootStrap, flexbox, and so on. As a result of this, I am able to quickly whip up highly performant mobile-first web applications,
          such as this one which utilize awesome tech like next.js, Redux, and Material UI. Interested in learning more about what went into this application?
          Check out the <a>source code</a> Subscribe to my blog.
          </p>
          <div className="btn-row">
            <RaisedButton label="Contact" onClick={() => Router.push('/contact')}/>
            <RaisedButton secondary={true} label="Twitter" />
            <RaisedButton primary={true} label="Blog" onClick={() => Router.push('/blog')} />
          </div>
        </div>
      </Tab>
      <Tab label="Teaching" >
        <div style={flexCol}>
          <h2 style={baseFont}>Teaching Experience</h2>
          <p style={width60}>
          Something many something developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.  Unlike many JavaScript developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.
          Unlike many JavaScript developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.  Unlike many JavaScript developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.
          </p>
          <div className="btn-row">
            <RaisedButton label="GitHub" />
            <RaisedButton secondary={true} label="Twitter" />
            <RaisedButton primary={true} label="Blog" icon={<FontIcon className="muidocs-icon-custom-github" />} />
          </div>
        </div>
      </Tab>
      <Tab
        label="Lover of JavaScript"
        data-route="/javascript"
      >
        <div style={flexCol}>
          <h2 style={baseFont}>Object Compostion over Class-based Inheritence</h2>
          <p style={width60}>
          Unlike many JavaScript developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.  Unlike many JavaScript developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.
          Unlike many JavaScript developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.  Unlike many JavaScript developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.
          </p>
          <div className="btn-row">
            <RaisedButton label="GitHub" />
            <RaisedButton secondary={true} label="Twitter" />
            <RaisedButton primary={true} label="Blog" icon={<FontIcon className="muidocs-icon-custom-github" />} />
          </div>
        </div>
      </Tab>
    </Tabs>
  </div>
);

const mapState = state => ({ info: state.aboutMe });
export default connect()(TabsExampleSimple);
