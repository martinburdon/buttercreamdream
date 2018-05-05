import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header.js';
import Gallery from '../components/Gallery.js';
import Blog from '../components/Blog.js';

// class AppRouter extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Gallery />
//       </div>
//     );
//   }
// }
//
// export default AppRouter;

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Gallery} exact={true}></Route>
        <Route path="/blog" component={Blog} exact={true}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
