import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { connect } from 'react-redux';
import { initializeBlog, INITIALIZE_BLOG, BLOGGER_API_KEY} from './reducer';
import withGoogle from '../hoc/env/google/googleEnv.component';

class Page extends React.Component {
  static getInitialProps({ query: { id } }) {
    return { id };
  }

  render() {
    const { id, blog } = this.props;
    const post = blog.payload.filter(x => x.id === id);
    return (
      <Card style={{margin: '1em'}} >
      <CardHeader style={{fontSize: '22'}} title={post[0].title} />
      <CardText>
      <div dangerouslySetInnerHTML={{__html: post[0].content }} />
      </CardText>
      </Card>
    );
  }
}
// const mapState = state => ({ selectedPost: state.blog.selectedPost});
export default connect()(Page);

