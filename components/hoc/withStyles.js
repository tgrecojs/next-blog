import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import Head from 'next/head';
import { PRIMARY_COLOR } from '../../constants/theme';
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


try {
  injectTapEventPlugin();
} catch (e) {
  // prevent injectTapEventPlugin():
  // Can only be called once per application lifecycle
}

const withMaterialUI = ComposedComponent => {
  class HOC extends Component {
    static propTypes = {
      userAgent: PropTypes.string
    }

    static async getInitialProps(ctx) {
      const { req } = ctx;
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

      const subProps = await loadGetInitialProps(ComposedComponent, ctx);

      return {
        ...subProps,
        userAgent
      };
    }

    render() {
      const { userAgent = 'all' } = this.props;
      const Lato = '\'lato\', sans-serif';
      const muiTheme = getMuiTheme(
        {
          fontFamily: Lato,
          palette: {
            primary1Color: PRIMARY_COLOR
          },
          appBar: {
            height: 50
          }
        },
        {
          userAgent
        }
      );

      return (
        <div>
          <Head>
            <title>Post Amplifier</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
          </Head>
          <style>
            {`
            html {
              background: #49768c;
            }
            .banner {
              background: #fff;
              font-family: 'system-ui', sans-serif;
              display: flex; 
              flex-direction: column; 
              align-items: center;
            }
            .logo {
              max-width: 300px; 
              padding: 16px;
            }
        form, .flex-col {
              display: flex;
    flex-direction: column;
    align-items: center;
        }
        `}
          </style>
          <MuiThemeProvider muiTheme={muiTheme}>
          <div>
          <AppBar
          title="Thomas Greco"
          iconElementRight={<Logged/>}
        />
          <div className="banner">
            <img className="logo" src="../../static/tg-logo.png" />
            <h2>Web Dev Extroidinaire</h2>
          </div>
            <ComposedComponent
              {...this.props}
            />
            </div>
          </MuiThemeProvider>
        </div>
      );
    }
  };

  return HOC;
};

export default withMaterialUI;
