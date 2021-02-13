import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Component/Footer';
import Event from './Component/Event';
import Api from './Component/Api';
import ApiWithAxios from './Component/ApiWithAxios';
import classComponent from './Component/ClassComponent'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/event" component={Event} />
        <Route path="/api" component={Api} />
        <Route path="/apiWithAxios" component={ApiWithAxios} />
        <Route path="/ClassComponent" component={classComponent} />

      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')

);
