import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { connect } from 'react-redux';

const Page = (props) =>  {
  console.log(props)
  return (
  <div>
   hi
  </div>
);}

// const mapState = state => ({ props.selectedPost: state.blog.props.selectedPost});
export default connect()(Page);
