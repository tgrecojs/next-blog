import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';


const styles = {
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
          <p>My name is Thomas Greco and I’m a JavaScript developer currently focused on building scalable JavaScript applications using functional programming concepts. Among the technologies I love using are ES6, React, Next.js, Material-UI (I discuss this more in technologies built with this app). Over the last two years, I’ve had the chance to work with people all over the globe for various reasons. This allowed me to gain experience doing everything from creating web layouts with bootstrap to teaching courses viewed by tens of thousands of people.</p>
          <IconButton iconClassName="muidocs-icon-custom-github" />        </div>
      </Tab>
      <Tab label="Teaching" >
        <div className="flex-col tab-content">
          <h2 style={styles.headline}>Teaching Experience</h2>
          <p>
        I’ve also published I received the opportunity to publish tutorials and informative articles viewed hundreds of thousands of people across the globe. As a self-taught developer, this was a daunting task, however I strived to succeed and ultimately established a reputation for my ability to write. This resulted in me gaining the skill to teacher others on a massive scale. Additionally, this allowed me to build relationships with people located everywhere from Australia to Portugal and win awesome achievements, like SitePoint.com’s Ambassador of the month!

          </p>
        </div>
      </Tab>
      <Tab
        label="Lover of JavaScript"
        data-route="/javascript"
      >
        <div className="flex-col tab-content">
          <h2 style={styles.headline}>Tab Three</h2>
          <p>
          This is a third example tab.
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
