import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import Head from 'next/head';
import { 
  PRIMARY_COLOR,
  PRIMARY_COLOR_TWO,
  PRIMARY_COLOR_THREE,
  ACCENT_COLOR_ONE,
  ACCENT_COLOR_TWO,
  ACCENT_COLOR__THREE
} from '../../../constants/theme';
import AppBar from 'material-ui/AppBar';
import Link from 'next/link';

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
    <MenuItem primaryText="Blog" onClick={() => Router.push('/blog')} />
    <MenuItem primaryText="Contact Me" onClick={() => Router.push('/contact')} />
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
            primary1Color: PRIMARY_COLOR,
            primary2Color: PRIMARY_COLOR_TWO,
            primary3Color: PRIMARY_COLOR_THREE,
            accent1Color: ACCENT_COLOR_ONE,
            accent2Color: ACCENT_COLOR_TWO,
            accent3Color: ACCENT_COLOR__THREE
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
            body {
              margin: 0;
            }
            .site {
              display: flex;
              min-height: 100vh;
              flex-direction: column;
            }
              p, h2, h3, h4 {
                font-family: 'Lato';
              }
            .content {
              flex: 1;
            }
            .tab-content {
              color: white;
              font-family: 'Lato';
            }
            .banner{
              background: #fff;
              font-family: 'Lato';
              display: flex; 
              flex-direction: column; 
              align-items: center;
            }
            .btn-row {
              display: flex;
              justify-content: space-around;
              align-items: center;
              margin-bottom: 1em;
            }
            form {
              width: 100%;
              margin-bottom: 1em;
            }
            form, .flex-col {
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
            nav {
              display: flex;
              justify-content: space-around;
              align-items: center;
              max-width: 100%;
              max-height: 100%;
            }
            pre {
              overflow: auto;
              word-wrap: normal;
              white-space: pre;
            }
            footer {
              background: rgb(86, 156, 183);
              height: 60px;
              font-family: 'Lato';
              color: #fff;
            }

            @media (max-width: 600px) {
             .flex-col p {
                width: 90%;
              }
              .post-content img, pre {
                max-width: 100%;
              }
              nav {
                flex-direction: column;
              }
            }
            input {

    word-wrap: break-word;
    word-break: break-all;
            }

            h4 a {
              font-family: 'Lato';
              color: white;
              text-decoration: none;
            }
        `}
          </style>
          <MuiThemeProvider muiTheme={muiTheme}>
            <div className="site">
            <nav>
              <h4><Link prefetch href="/">Home</Link></h4>
              <h4><Link prefetch href="/blog">Blog</Link></h4>
              <h4><Link prefetch href="/contact">Contact</Link></h4>
            </nav>
              <div className="banner">
                <img className="logo" src="../../static/tg-logo.png" />
                <h2 style={{fontFamily: 'Lato'}}>Application Development and Design</h2>
              </div>
              <ComposedComponent className="content"
                {...this.props}
              />
            </div>
          </MuiThemeProvider>
          <footer className="flex-col">
            <h4>This site was built by Thomas Greco with Next.js</h4></footer>
        </div>
      );
    }
  };

  return HOC;
};

export default withMaterialUI;
