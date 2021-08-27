import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Academic from './components/Academic';
import Adopt from './components/Adopt';
import Application from './components/Application';
import Blogs from './components/Blogs';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Event from './components/Event';
import Internships from './components/Internships';
import Partners from './components/Partners';
import WebsiteDesigner from './components/internshipComponents/WebsiteDesigner';
import DigitalMarketing from './components/internshipComponents/DigitalMarketing';
import GrantWriter from './components/internshipComponents/GrantWriter';
import FinanceDirector from './components/internshipComponents/FinanceDirector';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/academic" component={Academic} />
          <Route path="/adopt" component={Adopt} />
          <Route path="/application" component={Application} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/branches" component={Branches} />
          <Route path="/contact" component={Contact} />
          <Route path="/event" component={Event} />
          <Route path="/internships" component={Internships} />
          <Route path="/partners" component={Partners} />
          <Route path="/websiteDesigner" component={WebsiteDesigner} />
          <Route path="/websiteDesigner" component={WebsiteDesigner} />
          <Route path="/DigitalMarketing" component={DigitalMarketing} />
          <Route path="/GrantWriter" component={GrantWriter} />
          <Route path="/FinanceDirector" component={FinanceDirector} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
