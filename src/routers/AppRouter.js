import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header.js';
import Gallery from '../components/Gallery.js';
import Blog from '../components/Blog.js';
import BlogPost from '../components/BlogPost.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Gallery} exact={true}></Route>
        <Route path="/blog" component={Blog} exact={true}></Route>
        <Route path="/blog/:id" component={BlogPost}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
