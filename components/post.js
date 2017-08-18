import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Page = ({ title, content }) =>  (
  <Card style={{marginTop: '1em'}}>
  <CardHeader style={{background: 'rgb(86, 156, 183)'}}
  title={title}
  subtitle="Subtitle" />
    <CardText>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </CardText>
  </Card>
);


const API_KEY = 'AIzaSyAvTf4FzPZt6hr7DtAXt2dBmQ5rqZXeZm8';
Page.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/4789269094064278868/posts/${id}?key=AIzaSyAvTf4FzPZt6hr7DtAXt2dBmQ5rqZXeZm8`);
  const json = await res.json();
  return { title: json.title, content: json.content };
};

export default Page;
