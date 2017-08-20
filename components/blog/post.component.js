import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { connect } from 'react-redux';
import { initializeBlog, INITIALIZE_BLOG, BLOGGER_API_KEY} from './reducer';
import withGoogle from '../hoc/env/google/googleEnv.component';

class Page extends React.Component {
  static getInitialProps({ query: { id }, store, url }) {
    console.log(store.getState());
    store.dispatch(initializeBlog())
    return { id };
  }

  getPosts (props) {
    const currentPostId = this.props.url.query.slug;
    console.log(currentPostId);
  }
  componentWillMount() {
   const id = this.getPosts();
   const current = this.props.blog.posts.filter(x => x.id === this.id);
   console.log(current);
  }
  render() {

    return (
      <h1>Hi</h1>
    );
  }
}

const mapState = state => ({ selectedPost: state.blog.selectedPost});
export default connect(mapState, { initializeBlog})(withGoogle(Page));
