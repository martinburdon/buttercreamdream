import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from '../components/Header.js';
import Gallery from '../components/Gallery.js';
import PriceList from '../components/PriceList.js';
// import Blog from '../components/Blog.js';
// import BlogPost from '../components/BlogPost.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Helmet>
        <title>Buttercream Dream - cupcakes, cakes and sweet treats in Sunderland</title>
      </Helmet>
      <Header />
      <Switch>
        <Route path="/" component={Gallery} exact={true}></Route>
        <Route path="/price-list" component={PriceList} exact={true}></Route>
        {/*<Route path="/blog" component={Blog} exact={true}></Route>
      <Route path="/blog/:id" component={BlogPost}></Route>*/}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
