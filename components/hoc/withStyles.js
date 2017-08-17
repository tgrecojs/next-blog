import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import Head from 'next/head';
import { PRIMARY_COLOR } from '../../constants/theme';
import AppBar from 'material-ui/AppBar';
import Router from 'next/router';
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
    <MenuItem primaryText="Medium Page" onItemTouchTap={() => Router} />
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
            <title>Thomas Greco - Advanced JavaScript</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
          </Head>
          <style>
            {`
            html {
              background: #49768c;
            }
            .site {
              display: flex;
              min-height: 100vh;
              flex-direction: column;
            }
            
            .content {
              flex: 1;
            }
            .banner{
              background: #fff;
              font-family: 'Lato';
              display: flex; 
              flex-direction: column; 
              align-items: center;
            }
            .flex-col p {
              width: 60%;
              line-height: 1.6
            }
            .logo {
              max-width: 300px; 
              padding: 16px;
            }
            pre {
              background: #49768c;
              color: white;
              padding: 1em;
            }
            pre {
              overflow: auto;
              word-wrap: normal;
              white-space: pre;
            }
            
        @media (max-width: 600px) {
            .post-content img, pre {
              max-width: 100%;
            }
          }
            form {
              width: 100%;
            }
        form, .flex-col {
              display: flex;
    flex-direction: column;
    align-items: center;
        }
        `}
          </style>
          <MuiThemeProvider muiTheme={muiTheme}>
            <div className="site">
              <AppBar
                title="Thomas Greco"
                iconElementRight={<Logged/>}
              />
              <div className="banner">
                <img className="logo" src="../../static/tg-logo.png" />
                <h2 style={{fontFamily: 'Lato'}}>Application Development and Design</h2>
              </div>
              <ComposedComponent className="content"
                {...this.props}
              />
            </div>
          </MuiThemeProvider>
          <footer>I am at the bottom</footer>
        </div>
      );
    }
  };

  return HOC;
};

export default withMaterialUI;
