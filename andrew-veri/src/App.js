import './App.css';
import React from 'react'
import Home from './components/home';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import ContactMe from './components/contactMe';
import Nav from './components/nav'
import Footer from './components/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DesignPort from './components/designPort';
import ArtPort from './components/artPort'

function App() {

  return (
    <div className="App">
    <Router>
      <Nav />
      <Footer />

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/portfolio'exact component={Portfolio}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/contactMe' component={ContactMe}/>
        <Route path='/portfolio/designPort' component={DesignPort}/>
        <Route path='/portfolio/artPort' component={ArtPort}/>

      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
