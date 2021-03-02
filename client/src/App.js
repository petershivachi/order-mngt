import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

const App = () => (
  <Fragment className="App">
     <Router>
     <Navbar/>
     <Route exact path = "/" component={Landing}/>
     <section className="container">
       <Switch>
         <Route exact path="/register" component={Register}/>
         <Route exact path="/login" component={Login}/>
       </Switch>
     </section>
     <Footer/>
     </Router>
  </Fragment>
)

export default App;
