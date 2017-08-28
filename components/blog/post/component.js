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
  string, number, array
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

// Component being rendered in /:id
class Page extends React.Component {
  static getInitialProps({ query: { id }}) {
    return { id };
  }

  render() {
    return (
      <Card style={{margin: '1em'}} >
        <style>{'img { max-width: 600px }'}</style>
        <CardHeader style={{fontSize: '22px'}} title='Removed post.title' />
        <CardText>
        Removed post implemenation to ensure this renders w/ 404 as sole error
        </CardText>
        <div style={btnRow}>
          <RaisedButton primary={true}>
            <Link prefetch href="/">
              <a style={{padding: '1em', color: '#fff'}}>Back to blog</a>
            </Link>
          </RaisedButton>
        </div>
      </Card>
    );
  }
}

Page.propTypes = {
  title: string,
  id: string,
  posts: array,
  content: string,
  blogDiv: string
};

// Creates a new reference to payload in my props
// state.payload === props.post === props.payload
const mapState = state => ({ posts: state.payload});


export default connect(mapState)(Page);
