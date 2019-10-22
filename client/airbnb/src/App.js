import React from 'react';
import Login from './views/login/index';
import Index from './views/index/index'
import {Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Index}/>
      <Route path="/signin" component={Login} />
      <Route path="/homes"/>
    </div>
  );
}

export default App;
