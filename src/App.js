import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/movies">
          <MovieList />
        </Route>
        <Route exact path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
