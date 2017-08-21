import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import authDsm, { initializeBlog } from './reducer';
import withGoogle from '../hoc/env/google/googleEnv.component';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { addPadding, customPostStyles} from '../../constants/theme';

const handler = (id) => Router.push({
  pathname: '/blog',
  query: { id },
  shallow: true
});

const href = id => `/blog/${id}`;
const as = href;

// const Page = ({ posts }) => posts === undefined ? <h2>Loading</h2> : <h2>It works!</h2>;
const Page = ({ posts, status }) => status === 'fetching-posts-success' ?
  (<div>
    {posts.map(x => (
      <div style={{background: 'rgb(86, 156, 183)',
        padding: '1em',
        fontFamily: 'Lato',
        border: '1px solid white',
        borderRadius: '10px',
        margin: '1.5em',
        textAlign: 'center',
        lineHeight: '1.5'
      }} key={x.id}>
        <h2>{x.title}</h2>
        <RaisedButton primary={true} onClick={(x) => Router.push(href(x.id), as, {shallow: true})}>
          <Link prefetch href={`/blog/${x.id}`}>
            <a style={addPadding}>Read Post</a></Link>
        </RaisedButton>
      </div>)
    )}
  </div>
  ) :
  <h2 style={{fontFamily: 'Lato',
    textAlign: 'center',
    padding: '1em'}}>One moment please....</h2>;

const mapState = state => ({ posts: state.blog.payload, status: state.blog.status });


export default connect(mapState, {  initializeBlog })(withGoogle(Page));

