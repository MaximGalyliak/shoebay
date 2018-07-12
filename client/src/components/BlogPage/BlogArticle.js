import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Paragraphs from '../Paragraphs';

import { Link } from 'react-router-dom';

const BlogArticle = props => (
  <Paper>
    <Typography variant="headline" component="h3">
      <Link to={`/blog/${props.id}`}> {props.title} </Link> by{' '}
      {props.author.username}
    </Typography>
    <Typography component="div">
      <Paragraphs paragraphs={props.text} />
    </Typography>
  </Paper>
);

export default BlogArticle;
