import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Navbar from "./component/layout/navbar"
import Dashboard from './component/dashboard/dashboard';
import PorjectDetails from "./component/projects/porjectDetails"
import signIn from './component/auth/signIn';
import signUp from './component/auth/signUp';
import createProject from './component/projects/createProject';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/project/:id" component={PorjectDetails}/>
          <Route path="/signin" component={signIn}/>
          <Route path="/signup" component={signUp}/>
          <Route path="/create" component={createProject}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
