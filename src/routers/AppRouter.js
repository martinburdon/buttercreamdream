import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from '../components/core/Header.js';
import Footer from '../components/core/Footer.js';
import HomePage from '../components/pages/HomePage.js';
import Contact from '../components/pages/Contact.js';
import NotFound from '../components/pages/NotFound.js';

import CakesRouter from '../routers/CakesRouter.js';

const AppRouter = () => (
  <BrowserRouter>
    <div className="app">
      <Helmet>
        <title>Buttercream Dream - Cupcakes, Cakes and Sweet Treats in Sunderland</title>
        <meta name="description" content="Cakes, cupcakes and sweet treats for all occasions. We can make cakes for all occasions such as birthday, anniversary, christening, wedding and any other occasion you may need cake!" />
        <meta name="keywords" content="cakes, cupcakes, sunderland, cake pops, newcastle, cakes in sunderland, cakes in the north east, custom cakes" />
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
