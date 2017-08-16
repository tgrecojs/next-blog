import React from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Logged = (props) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Medium Page" />
    <MenuItem primaryText="Contact Me" />
  </IconMenu>
);



const AboutMe = ({info}) => (
  <div>
    {
      info.map(x => (
        <Card>
          <CardHeader
            title={x.title}
            subtitle="Subtitle"
            style={{background: 'rgb(86, 156, 183)', borderBottom: '2px solid #064d6a'}}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expanded={x.active} expandable={true}>
           <div dangerouslySetInnerHTML={{ __html: x.text}} />
          </CardText>
        </Card>
      ))
    }
    <RaisedButton label="Get In Contact With Me" fullWidth={true} /> 
  </div>
);


const mapState = ({aboutMe}) => ({info: aboutMe});

export default connect(mapState)(AboutMe);
