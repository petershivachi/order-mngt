import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './Store';

const App = () => (
  <Provider store={store}>
    <Fragment>
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
  </Provider>
)

export default App;
