import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Home1 from './pages/Home1';
import AddPartner from './pages/AddPartner';
import Home2 from './pages/Home2';
import Profiles from './pages/Profiles';
import Sidebar from './components/Sidebar5';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Success5 from './pages/Success5';
import EditAccount5 from './pages/EditAccount5';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Sidebar/>
          <Router>
            <div>
              <Route path='/home1' component={Home1}/>
              <Route path='/add' component={AddPartner}/>
              <Route path='/home2' component={Home2}/>
              <Route path='/Profiles' component={Profiles}/>
              <Route path='/Success' component={Success5}/>
              <Route path='/edit/:id' component={EditAccount5}/>
            </div>
          </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;