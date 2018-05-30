import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from '../components/Header.js';
import HomePage from '../components/HomePage.js';
import GalleryPage from '../components/GalleryPage.js';
import PriceList from '../components/PriceList.js';
import Faq from '../components/Faq.js';
import Contact from '../components/Contact.js';
// import Blog from '../components/Blog.js';
// import BlogPost from '../components/BlogPost.js';

const AppRouter = () => (
  <BrowserRouter>
    <div className="app">
      <Helmet>
        <title>Buttercream Dream - Cupcakes, Cakes and Sweet Treats in Sunderland</title>
        <meta name="description" content="Cakes, cupcakes and sweet treats for all occasions. We can make cakes for all occasions such as birthday, anniversary, christening, wedding and any other occasion you may need cake!" />
        <meta name="keywords" content="cakes, cupcakes, sunderland, cake pops, newcastle, cakes in sunderland, cakes in the north east, custom cakes" />
      </Helmet>
      <Header />
      <div class="main">
        <Switch>
          <Route path="/" component={HomePage} exact={true}></Route>
          <Route path="/gallery" component={GalleryPage} exact={true}></Route>
          <Route path="/price-list" component={PriceList} exact={true}></Route>
          <Route path="/faq" component={Faq} exact={true}></Route>
          <Route path="/contact" component={Contact} exact={true}></Route>
          {/*<Route path="/blog" component={Blog} exact={true}></Route>
        <Route path="/blog/:id" component={BlogPost}></Route>*/}
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
