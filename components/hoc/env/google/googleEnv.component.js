import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import { connect } from 'react-redux';
const checkState = props => serverRendered => serverRendered === true && props.payload.length === undefined;

const withEnv = ComposedComponent => {
  return class HOC extends Component {
    static propTypes = {
      serverRendered: PropTypes.bool,
      initializeBlog: PropTypes.func,

      env: PropTypes.shape({
        BLOGGER_API_KEY: PropTypes.string
      })
    }

    static async getInitialProps(ctx) {
      const serverRendered = !process.browser;
      console.log('Server rendered from google', serverRendered);
      const env = serverRendered ? {
        BLOGGER_API_KEY: process.env.BLOGGER_API_KEY
      } : {};

      return {
        env,
        serverRendered
      };
    }

    componentWillMount() {
      const {
        initializeBlog,
        serverRendered,
        env
      } = this.props;
      if (serverRendered === true) {
        initializeBlog(env);
      }

    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.payload > this.props.payload) {
        return nextProps.payload;
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
};

export default withEnv;
