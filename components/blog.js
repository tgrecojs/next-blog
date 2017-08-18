import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { SecondaryBg } from '../constants/theme';
const Page = ({ posts }) => (<div>Next stars: {posts.map(x => {
  return (
    <Card style={{paddingBottom: '0',
      marginBottom: '1em', textAlign: 'center'
    }}>
      <CardHeader style={{alignText: 'center', background: 'rgb(86, 156, 183)'}} title={x.title}/>
      <RaisedButton fullWidth={true} style={{backgroundColor: '#49558c'}}><Link href={`/blog/${x.id}`}>Click to Read</Link></RaisedButton>
    </Card>
  );
})

}
</div>);


const API_KEY = 'AIzaSyAvTf4FzPZt6hr7DtAXt2dBmQ5rqZXeZm8';
Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/4789269094064278868/posts?key=AIzaSyAvTf4FzPZt6hr7DtAXt2dBmQ5rqZXeZm8');
  const json = await res.json();
  return { posts: json.items };
};

export default Page;
