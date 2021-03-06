import React, {Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import Ladies from './components/products/Ladies';
import Shoes from './components/products/Shoes';
import Accessories from './components/products/Accessories';
import Men from './components/products/Men';
import Kids from './components/products/Kids';
import PrivateRoute from './routing/PrivateRoute';
import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './Store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
    <Fragment>
     <Router>
     <Navbar/>
     <Route exact path = "/" component={Landing}/>
     <section className="container">
       <Alert/>
       <Switch>
         <Route exact path="/register" component={Register}/>
         <Route exact path="/login" component={Login}/>
         <PrivateRoute exact path="/ladies" component={Ladies}/>
         <PrivateRoute exact path="/shoes" component={Shoes}/>\
         <PrivateRoute exact path="/men" component={Men}/>
         <PrivateRoute exact path="/kids" component={Kids}/>
         <PrivateRoute exact path="/accessories" component={Accessories}/>
         <PrivateRoute exact path="/dashboard" component={Dashboard}/>
       </Switch>
     </section> 
     <Footer/>
     </Router>
  </Fragment>
  </Provider>
  )}

export default App;
