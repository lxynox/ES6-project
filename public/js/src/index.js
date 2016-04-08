// dependencies
import { React, ReactDOM, Router, Route, hashHistory } from './dependencies.js';
// views
import { SideNavbar } from './views/components/SideNavbar';
import { TopNavbar } from './views/components/TopNavbar';
import { Footer } from './views/components/Footer';
import { App } from './app';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/top' component={TopNavbar} />
      <Route path='/main' component={SideNavbar} />
      <Route path='/foot' component={Footer} />
    </Route>
  </Router> 
  ), document.getElementById('app')
);
