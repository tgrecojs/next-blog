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

const Page = ({ posts }) => posts === undefined ? <h2>Loading</h2> : (
  <div style={{fontFamily: 'Lato', textAlign: 'center'}}>
    {posts.map(x => (<div>
      <h2>{x.title}</h2><p>{x.text}</p>
    </div>)
    )}
  </div>
);

const mapState = state => ({ posts: state.blog.posts });

export default connect(mapState, {initializeBlog, selectPost})(withGoogle(Page));

