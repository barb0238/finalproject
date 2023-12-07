import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Services from './Services';
import ScheduleCall from './ScheduleCall';
import NotFound from './NotFound';

function MainPage() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/schedule-call">Schedule a Call</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/schedule-call" component={ScheduleCall} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default MainPage;
