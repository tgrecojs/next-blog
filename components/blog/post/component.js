import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { connect } from 'react-redux';

// import { initializeBlog, INITIALIZE_BLOG, BLOGGER_API_KEY} from '..//reducer';
import withGoogle from '../../hoc/env/google/googleEnv.component';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import { btnRow } from '../../../constants/theme';

const {
  string
} = PropTypes;

const getPostById = state => state.blog.payload.filter(x => x.id === state.url.query);

/** 
 * export const Post = ({title = 'Blog post', content = 'I am some content', blogDiv = 'blogPost'}) => (
  <div className={blogDiv}>
    <h2>{title}</h2>
    <div>{content}</div>
  </div>
);
*/

class Page extends React.Component {
  static getInitialProps({ query: { id } }) {
    return { id };
  }

  render() {
    const { id, payload } = this.props;
    const post = payload.filter(x => x.id === id);
    console.log('Props from page', post[0].title);
    const { title, content } = post[0];
    return (
      <Card style={{margin: '1em'}} >
        <style>{`img {
        max-width: 600px;
      }`}</style>
        <CardHeader style={{fontSize: '22px'}} title={title} />
        <CardText>
          <div dangerouslySetInnerHTML={{__html: content }} />
        </CardText>
        <div style={btnRow}>
          <RaisedButton primary={true}>
            <Link prefetch href="/blog">
              <a style={{padding: '1em', color: '#fff'}}>Back to blog</a>
            </Link>
          </RaisedButton>
          <RaisedButton secondary={true}>
            <Link prefetch href="/contact">
              <a style={{padding: '1em', color: '#fff'}}>Contact Me</a>
            </Link>
          </RaisedButton>
        </div>
      </Card>
    );
  }
}

Page.propTypes = {
  title: string,
  content: string,
  blogDiv: string
};




export default connect()(Page);
