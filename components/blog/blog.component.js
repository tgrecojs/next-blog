import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import authDsm, { initializeBlog } from './reducer';
import withGoogle from '../hoc/env/google/googleEnv.component';
import PropTypes from 'prop-types';
import Router from 'next/router'
const handler = (id) => Router.push({
  pathname: '/blog',
  query: { id },
  shallow: true
});

// const Page = ({ posts }) => posts === undefined ? <h2>Loading</h2> : <h2>It works!</h2>;
const { initialize } = authDsm.actionCreators;
const Page = ({ posts, status }) => status === 'fetching-posts-success' ?
  (<div style={{fontFamily: 'Lato', textAlign: 'center', padding: '1em'}}>
    {posts.map(x => (
      <div key={x.id}>
        <h2>{x.title}</h2>
        <RaisedButton primary={true}>
        <Link prefetch href={`/blog/${x.id}`}><a>My first blog post</a></Link>
        </RaisedButton>
      </div>)
    )}
  </div>
  ) :
  <h2>Loading</h2>;

const mapState = state => ({ posts: state.blog.payload, status: state.blog.status });


export default connect(mapState, {  initializeBlog })(withGoogle(Page));

