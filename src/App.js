import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './Components/Common/Navbar';
import Sidebar from './Components/Common/Sidebar';

import Login from './Components/Login';
import Home from './Components/Home';
import User from './Components/Management/User';
import UsersList from './Components/Management/UsersList';
import AssignStaff from './Components/Management/AssignStaff';
import MedicationReport from './Components/Management/MedicationReport';
import SearchLocation from './Components/Client/SearchLocation';
import Requests from './Components/Common/Requests';

import './App.css'
import { useEffect, useState } from "react";

function App() {


  const [user, setUser] = useState(null)

  useEffect(() => {

    //localStorage.setItem('user', JSON.stringify(user))
    let u = localStorage.getItem('user')

    if (u) {

      u = JSON.parse(u)
      u = u.result
      setUser(u)

    }

    return () => { };

  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? <Route exact path="/"><Login /></Route>
          :
          <div>
            <Navbar user={user} />

            <Sidebar user={user} />

            <Route exact path="/"> <Home user={user} /> </Route>

            <Route exact path="/user"> <User user={user} /> </Route>

            <Route exact path="/update-user"> <User user={user} /> </Route>

            <Route exact path="/users-list"> <UsersList user={user} /> </Route>

            <Route exact path="/assign-staff"> <AssignStaff user={user} /> </Route>

            <Route exact path="/medication-report"> <MedicationReport user={user} /> </Route>

            <Route exact path="/search-location"> <SearchLocation user={user} /> </Route>

            <Route exact path="/requests"> <Requests user={user} /> </Route>
          </div>

        }
      </Router>
    </div>

  );
}

export default App;
