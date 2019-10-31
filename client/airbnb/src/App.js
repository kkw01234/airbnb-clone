import React from 'react';
import Login from './views/login/index';
import Index from './views/index/index';
import Homes from './views/homes/index';
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Switch className="App">
      <Route exact path="/" component={Index} />
      <Route path="/signin" component={Login}/>
      <Route path="/homes" component={Homes}/>
    </Switch>
  );
}

export default App;
