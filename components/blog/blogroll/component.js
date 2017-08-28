import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
// import { initializeBlog } from '../../hoc/env/google/googleEnv.reducer';
import authDsm, { initializeBlog, selectPostAction } from './reducer';
import withGoogle from '../../hoc/env/google/googleEnv.component';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { addPadding, loadingText, customPostStyles, postCard} from '../../../constants/theme';
const {
  string,
  object
} = PropTypes;


const PostCard = ({title, content, id}) => (
  <div style={postCard} key={id}>
    <h2>{title}</h2>
    <div style={{display: 'none'}}>{content}</div>
    <RaisedButton primary={true} >
      <Link prefetch href={`/${id}`}><a>Read Post</a></Link>
    </RaisedButton>
  </div>
);

const Page = ({ posts, selectPostAction }) => posts.length > 2 ?
  <div>
    {posts.map(post => (<PostCard key={post.id} {...post} />))}
  </div>
  :
  <h2 style={loadingText}>One moment please....</h2>;

const mapState = state => ({ posts: state.payload });


export default connect(mapState, {  initializeBlog, selectPostAction })(Page);

