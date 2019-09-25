import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';
import MovieDetails from './MovieDetails';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Main() {

  return (
    <div className= "App">
    
    <Router>
        {/* <Link to="/">Welcome</Link>
        <Link to="/hobbies">Hobbies</Link> */}
        <Switch>
          <Route exact path='/' render={() => <App></App>} ></Route>
          <Route exact path='/details/:id' render={(props) => <MovieDetails {...props} />} ></Route>
        </Switch>

    </Router>
    </div>
  );
}

export default Main;
