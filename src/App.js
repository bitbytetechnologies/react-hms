import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from './Components/Common/Navbar';
import Sidebar from './Components/Common/Sidebar';

import Login from './Components/Login';
import Home from './Components/Home';
import User from './Components/Management/User';
import UsersList from './Components/Management/UsersList';
import MedicationReport from './Components/Management/MedicationReport';


import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          {!localStorage.getItem('user') ? <Route exact path="/"><Login /></Route>
            :
            <div>
              <Navbar></Navbar>

              <Sidebar></Sidebar>


              <Route exact path="/"><Home /></Route>

              <Route exact path="/create-user"><User /></Route>

              <Route exact path="/users-list"><UsersList /></Route>

              <Route exact path="/medication-report"><MedicationReport /></Route>


            </div>

          }
        </Switch>
      </Router>
    </div>

  );
}

export default App;
