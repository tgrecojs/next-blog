import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Page = ({ posts }) => (<div>Next stars: {posts.map(x => {
  return (
    <Card title={x.title}>
    <li><Link href={`/blog?id=${x.id}`} as={`/blog/${x.id}`}><a>My first blog post</a></Link></li>
    </Card>
  );
})

}
</div>);


const API_KEY = 'AIzaSyAvTf4FzPZt6hr7DtAXt2dBmQ5rqZXeZm8';
Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/4789269094064278868/posts?key=AIzaSyAvTf4FzPZt6hr7DtAXt2dBmQ5rqZXeZm8');
  const json = await res.json();
  console.log(json);
  return { posts: json.items };
};

export default Page;
