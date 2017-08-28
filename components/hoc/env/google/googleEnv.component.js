import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadGetInitialProps } from 'next/dist/lib/utils';

const checkState = props => serverRendered => serverRendered === true && props.payload.length === undefined

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
      const subProps = await loadGetInitialProps(ComposedComponent, ctx);
      const serverRendered = !process.browser;
      console.log('Server rendered from google', serverRendered);
      const env = serverRendered ? {
        BLOGGER_API_KEY: process.env.BLOGGER_API_KEY
      } : {};

      return {
        env,
        serverRendered,
        ...subProps
      };
    }
    componentWillReceiveProps(nextProps) {
      console.log('nextPorps', this.nextProps);
    }

    componentWillMount() {
      const {
        serverRendered,
        initializeBlog,
        env
      } = this.props;

      if (checkState(this.props)(serverRendered)) {
        return initializeBlog(env);
      }
    
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
};

export default withEnv;
