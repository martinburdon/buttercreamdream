import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cakes from 'components/pages/cakes/Cakes.js';
import CakesTemplate from 'components/pages/cakes/CakesTemplate.js';
import cakePages from 'config/cake-pages.json';
import { formatCakeUrl } from 'helpers.js';

class CakesRouter extends Component {
  createRoute(page, i) {
    return (
      <Route
        key={i}
        path={formatCakeUrl(page.title)}
        render={routeProps => <CakesTemplate {...routeProps} {...page} />}
      />
    );
  }

  render() {
    const pages = cakePages.map((page, i) => this.createRoute(page, i));

    return (
      <Switch>
        <Route path="/cakes" component={Cakes} exact />
        {pages}
      </Switch>
    )
  };
};

export default CakesRouter;
