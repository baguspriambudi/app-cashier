import React from 'react';
import Login from './component/Login';
import Create from './component/Create';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </div>
  );
}

export default App;
