import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { initializeBlog, selectPost } from './reducer';
import withGoogle from '../hoc/env/google/googleEnv.component';
const Page = ({ posts }) => (<div>Next stars: {posts.map(x => {
  return (
    <Card style={{paddingBottom: '0',
      marginBottom: '1em', textAlign: 'center'
    }}>
      <CardHeader style={{alignText: 'center', background: 'rgb(86, 156, 183)'}} title={x.title}/>
      <RaisedButton onClick={() => selectPost(x)}
      fullWidth={true} secondary={true}><Link prefetch href={`/blog?id=${x.id}`} as={`/blog/${x.id}`}>Click to Read
      </Link></RaisedButton>
    </Card>
  );
})

}
</div>);

const mapState = state => ({ posts: state.blog.posts });

export default connect(mapState, {initializeBlog, selectPost})(withGoogle(Page));
