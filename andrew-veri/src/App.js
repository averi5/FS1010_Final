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
import imageDetail from './components/imageDetail'

function App() {

  return (
    <div className="App">
    <Router>
      <Nav />

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/portfolio'exact component={Portfolio}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/contactMe' component={ContactMe}/>
        <Route path='/portfolio/designPort' exact component={DesignPort}/>
        <Route path='/portfolio/designPort/:id' component={imageDetail}/>
        <Route path='/portfolio/artPort' exact component={ArtPort}/>
        <Route path='/portfolio/artPort/:id' component={imageDetail}/>

      </Switch>

      <Footer />
    </Router>
    </div>
    
  );
}

export default App;
