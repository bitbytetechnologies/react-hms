import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from './Components/Common/Navbar';
import Sidebar from './Components/Common/Sidebar';

import Login from './Components/Login';
import Home from './Components/Home';
import User from './Components/Management/User';
import UsersList from './Components/Management/UsersList';
import ManageStaff from './Components/Management/ManageStaff';
import MedicationReport from './Components/Management/MedicationReport';
import SendLocation from './Components/Client/SendLocation';
import Notifications from './Components/Common/Notifictaions';

import './App.css'
import { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {

    let u = localStorage.getItem('user')

    if (u) {
      setUser(JSON.parse(u))
    }

    return () => { };

  }, []);

  return (
    <div className="App">
      <Router>

        {!user ? <Route exact path="/"><Login /></Route>
          :
          <div>
            <Navbar user={user}></Navbar>

            <Sidebar></Sidebar>


            <Route exact path="/"><Home /></Route>

            <Route exact path="/user"><User /></Route>

            <Route exact path="/user/:id"><User /></Route>

            <Route exact path="/users-list"><UsersList /></Route>

            <Route exact path="/manage-staff"><ManageStaff /></Route>

            <Route exact path="/medication-report"><MedicationReport /></Route>

            <Route exact path="/send-location"><SendLocation /></Route>

            <Route exact path="/notifications"><Notifications /></Route>


          </div>

        }
      </Router>
    </div>

  );
}

export default App;
