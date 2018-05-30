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
        <title>Buttercream Dream - Cupcakes, Cakes and Sweet Treats in Sunderland</title>
        <meta name="description" content="Cakes, cupcakes and sweet treats for all occasions. We can make cakes for all occasions such as birthday, anniversary, christening, wedding and any other occasion you may need cake!" />
        <meta name="keywords" content="cakes, cupcakes, sunderland, cake pops, newcastle, cakes in sunderland, cakes in the north east, custom cakes" />
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
