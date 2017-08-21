import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Router from 'next/router';
const navigate = (route) => Router.push(`/${route}`);
import { baseFont } from '../../constants/theme';

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
          <h2 style={baseFont}>From Graphic Design To Functional Programming</h2>
          <p style={baseFont}>
          First somethings many something developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.  Unlike many JavaScript developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.          
          Unlike many JavaScript developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.  Unlike many JavaScript developers, I was not always aware of the problems that come with using class-based architecture. As a self-taught developer, it took me quite some time to begin understanding JavaScript’s base prototypes makes possible.                    
          </p>  
          <div className="btn-row">
          <RaisedButton label="Contact" onClick={() => Router.push('/contact')}/>
          <RaisedButton secondary={true} label="Twitter" />
          <RaisedButton primary={true} label="Blog" onClick={() => Router.push('/blog')} />
          </div>
        </div>
      </Tab>
      <Tab label="Teaching" >
        <div className="flex-col tab-content">
          <h2 style={baseFont}>Teaching Experience</h2>
          <p style={baseFont}>
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
        <div className="flex-col tab-content">
          <h2 style={baseFont}>Object Compostion over Class-based Inheritence</h2>
          <p style={baseFont}>
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
