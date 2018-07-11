import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cakes from 'components/pages/cakes/Cakes.js';
import Cupcakes from 'components/pages/cakes/Cupcakes.js';
import ChildrensBirthdayCakes from 'components/pages/cakes/ChildrensBirthdayCakes.js';

class CakesRouter extends Component {
  render() {
    const path = `${this.props.match.path}`;
    return (
      <Switch>
        <Route path={path} component={Cakes} exact />
        <Route path={`${path}/cupcakes`} component={Cupcakes} />
        <Route path={`${path}/childrens-birthday-cakes`} component={ChildrensBirthdayCakes} />
      </Switch>
    )
  };
};

export default CakesRouter;
