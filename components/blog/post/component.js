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
  string, array
} = PropTypes;


class Page extends React.Component {
  static getInitialProps(ctx) {
    const id = ctx.query.id;
    return { id };
  }

  render() {
    const { posts, id } = this.props;
    const post = posts.filter(x => x.id === id);
    const { title, content } = post[0];
    // console.log(this.props);
    return (
      <Card style={{margin: '1em'}} >
        <style>{'img { max-width: 600px }'}</style>
        <CardHeader style={{fontSize: '22px'}} title={title} />
        <CardText>
          <div dangerouslySetInnerHTML={{__html: content}} />
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

const mapState = state => ({ posts: state.payload});


export default connect(mapState)(Page);
