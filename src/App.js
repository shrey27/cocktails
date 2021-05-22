import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SingleCocktail from "./SingleCocktail";
import Error from "./Error";
import Navbar from "./Navbar";
import firebase from 'firebase';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  const [auth,setAuth] = useState(false);
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authenticate) => {
      authenticate
        ? setAuth(true)
        : setAuth(false)
    });
  })

  return (
    <Router>
      
      <Navbar auth={auth}/>

      <Switch>
        <Route exact path="/" >
          <Home auth={auth}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/signin">
          <SignIn  setAuth={setAuth}/>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
