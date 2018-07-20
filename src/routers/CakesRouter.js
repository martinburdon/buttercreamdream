import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cakes from 'components/pages/cakes/Cakes.js';
import CakesTemplate from 'components/pages/cakes/CakesTemplate.js';
import cakePages from 'config/cake-pages.json';

class CakesRouter extends Component {
  createRoute(path, page, i) {
    return (
      <Route
        key={i}
        path={`${path}/${page.url}`}
        render={routeProps => <CakesTemplate {...routeProps} {...page} />}
      />
    );
  }

  render() {
    const path = `${this.props.match.path}`;
    const pages = cakePages.map((page, i) => this.createRoute(path, page, i));

    return (
      <Switch>
        <Route path={path} component={Cakes} exact />
        {pages}
      </Switch>
    )
  };
};

export default CakesRouter;
