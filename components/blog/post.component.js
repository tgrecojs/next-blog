import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { connect } from 'react-redux';
import { initializeBlog, INITIALIZE_BLOG, BLOGGER_API_KEY} from './reducer';
import withGoogle from '../hoc/env/google/googleEnv.component';
import RaisedButton from 'material-ui/RaisedButton';
class Page extends React.Component {
  static getInitialProps({ query: { id } }) {
    return { id };
  }

  render() {
    const { id, blog } = this.props;
    const post = blog.payload.filter(x => x.id === id);
    return (
      <Card style={{margin: '1em'}} >
      <style>{`img {
        max-width: 600px;
      }`}</style>
      <CardHeader style={{fontSize: '22px'}} title={post[0].title} />
      <CardText>
      <div dangerouslySetInnerHTML={{__html: post[0].content }} />
      </CardText>
      <div className="btn-row">
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
// const mapState = state => ({ selectedPost: state.blog.selectedPost});
export default connect()(Page);

