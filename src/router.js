import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import home from './routes/home';
import Login from './routes/login';
import Nav from './routes/nav';
class Routers extends Component {
    render(){        
      return(            
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/home" component={home}/>
            <Route path="/login" component={Login}/>
            <Route path="/nav" component={Nav}/>
        </Switch>
      </BrowserRouter>
      )
    }   
}
export default Routers;
