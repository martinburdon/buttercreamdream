import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from '../components/core/Header.js';
import Footer from '../components/core/Footer.js';
import HomePage from '../components/pages/HomePage.js';
import Contact from '../components/pages/Contact.js';
import NotFound from '../components/pages/NotFound.js';
import CakesRouter from '../routers/CakesRouter.js';
import siteConfig from 'config/site-config.js';

const AppRouter = () => (
  <BrowserRouter>
    <div className="app">
      <Helmet>
        <title>{siteConfig.meta.title}</title>
        <meta name="description" content={siteConfig.meta.description} />
        <meta name="keywords" content={siteConfig.meta.keywords} />
      </Helmet>
      <Header />
      <div className="main">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/cakes" component={CakesRouter} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
