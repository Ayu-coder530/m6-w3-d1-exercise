import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Animation1 from './animation1/App';
import Animation2 from './animation2/App';
import Animation3 from './animation3/App';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/animation1">Animation 1</Link>
            </li>
            <li>
              <Link to="/animation2">Animation 2</Link>
            </li>
            <li>
              <Link to="/animation3">Animation 3</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/animation1" component={Animation1} />
          <Route path="/animation2" component={Animation2} />
          <Route path="/animation3" component={Animation3} />
          <Route path="/" exact component={() => <div>Welcome to the Animation App</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
