import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
// import { initializeBlog } from '../../hoc/env/google/googleEnv.reducer';
import authDsm, { initializeBlog } from './reducer';
import withGoogle from '../../hoc/env/google/googleEnv.component';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { addPadding, loadingText, customPostStyles, postCard} from '../../../constants/theme';
const {
  string,
  object
} = PropTypes;
const selectPostAction = ({ content }) => ({
  type: 'SELECT_POST',
  payload: content
});


const href = id => `/blog/${id}`;
const as = href();

const Page = ({ posts, status, selectPostAction }) => status === 'fetching-posts-success' ?
  (<div>
    {posts.map(x => (
      <div  style={postCard} key={x.id}>
        <h2>{x.title}</h2>
        <div style={{display: 'none'}}>{x.content}</div>
        <RaisedButton primary={true} >
        <Link prefetch href={`/${x.id}`}><a>Read Post</a></Link>
        </RaisedButton>
      </div>)
    )}
  </div>
  ) :
  <h2 style={loadingText}>One moment please....</h2>;

const mapState = state => ({ posts: state.payload, status: state.status });


export default connect(mapState, {  initializeBlog, selectPostAction })(Page);

