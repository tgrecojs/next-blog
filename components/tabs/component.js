import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';


const styles = {
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
        <div className="flex-col tab-content">
          <h2 style={styles.headline}>From Graphic Design To Functional Programming</h2>
          <p style={styles.fontFamily}>
          My name is Thomas Greco and I’m a self-taught developer with a passion for prototypes and functional programming. Prior to finding an interest in programming, I worked as a graphic designer and this has a tremendous influence in the way I studying the web. Among the technologies I am currently utilizing are React, Next.js, Styled Components, and more. Want to hear more? Get in touch with me!</p>
     </div>
      </Tab>
      <Tab label="Teaching" >
        <div className="flex-col tab-content">
          <h2 style={styles.headline}>Teaching Experience</h2>
          <p>
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
      <Tab
        label="Lover of JavaScript"
        data-route="/javascript"
      >
        <div className="flex-col tab-content">
          <h2 style={styles.headline}>Object Compostion over Class-based Inheritence</h2>
          <p>
          Unlike many JavaScript developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.  Unlike many JavaScript developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.  
          Unlike many JavaScript developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.  Unlike many JavaScript developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.            
          </p>
          </div>
      </Tab>
    </Tabs>
    <div className="btn-row">
      <RaisedButton label="GitHub" />
      <RaisedButton secondary={true} label="Twitter" />
      <RaisedButton primary={true} label="Blog" icon={<FontIcon className="muidocs-icon-custom-github" />} />
    </div>
  </div>
);

const mapState = state => ({ info: state.aboutMe });
export default connect()(TabsExampleSimple);
