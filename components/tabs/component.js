import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};


function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="JavaScript Development" >
      <div>
        <h2 style={styles.headline}>From Graphic Design To Functional Programming</h2>
        <p>My name is Thomas Greco and I’m a JavaScript developer currently focused on building scalable JavaScript applications using functional programming concepts. Among the technologies I love using are ES6, React, Next.js, Material-UI (I discuss this more in technologies built with this app). Over the last two years, I’ve had the chance to work with people all over the globe for various reasons. This allowed me to gain experience doing everything from creating web layouts with bootstrap to teaching courses viewed by tens of thousands of people.</p>
        <RaisedButton label="GitHub" />
        <Slider name="slider0" defaultValue={0.5} />
      </div>
    </Tab>
    <Tab label="Item Two" >
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="onActive"
      data-route="/home"
      onActive={handleActive}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);
export default connect()(TabsExampleSimple);
