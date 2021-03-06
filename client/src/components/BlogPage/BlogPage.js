import React, { Component } from 'react';

import BlogMain from './BlogMain';
import BlogArticlePage from './BlogArticlePage';

//route
import { Switch, Route } from 'react-router-dom';

class BlogPage extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/blog" component={BlogMain} />
        <Route
          path="/blog/:id"
          render={props => {
            return <BlogArticlePage {...props} />;
          }}
        />
      </Switch>
    );
  }
}

export default BlogPage;
