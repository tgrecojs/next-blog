import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { initializeBlog, selectPost } from './reducer';
import withGoogle from '../hoc/env/google/googleEnv.component';
import PropTypes from 'prop-types';
// const Page = ({ posts }) => posts === undefined ? <h2>Loading</h2> : <h2>It works!</h2>;

const Page = ({ posts, selectPost }) => posts === undefined ? <h2>Loading</h2> : (
  <div style={{fontFamily: 'Lato', textAlign: 'center', padding: '1em'}}>
    {posts.map(x => (<div>
      <h2>{x.title}</h2>
      <RaisedButton onClick={() => selectPost(x)} primary={true}><Link href={`/blog/${x.id}`}>Read</Link></RaisedButton>
    </div>)
    )}
  </div>
);

const mapState = state => ({ posts: state.blog.posts });

export default connect(mapState, {initializeBlog, selectPost})(withGoogle(Page));

