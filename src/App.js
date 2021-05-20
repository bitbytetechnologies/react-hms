import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from './Components/Common/Navbar';
import Sidebar from './Components/Common/Sidebar';

import Login from './Components/Login';
import Home from './Components/Home';
import User from './Components/Management/User';
import UsersList from './Components/Management/UsersList';
import ManagerRequest from './Components/Management/ManagerRequest';
import AssignStaff from './Components/Management/AssignStaff';
import MedicationReport from './Components/Management/MedicationReport';
import LocationRequest from './Components/Client/LocationRequest';
import Requests from './Components/Common/Requests';
import RoasterRequests from './Components/Staff/RosterRequests';
import StaffProgress from './Components/Staff/StaffProgress';
import ApprovedRosters from './Components/Staff/ApprovedRosters';
import Medication from './Components/Staff/Medication';
import ProgressReport from './Components/Staff/ProgressReport';
import ClientFeedback from './Components/Client/ClientFeedback';
import './App.css'
import IncidentForm from "./Components/Staff/IncidentForm";
import Billing from "./Components/Staff/Billing";
import ChangePassword from "./Components/ChangePassword";

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

            <Route exact path="/change-password"> <ChangePassword user={user} /> </Route>

            <Route exact path="/update-user"> <User user={user} /> </Route>

            <Route exact path="/users-list"> <UsersList user={user} /> </Route>

            <Route exact path="/new-roster"> <ManagerRequest user={user} /> </Route>

            <Route exact path="/assign-staff"> <AssignStaff user={user} /> </Route>

            <Route exact path="/medication-report"> <MedicationReport user={user} /> </Route>

            <Route exact path="/location-request"> <LocationRequest user={user} /> </Route>

            <Route exact path="/requests"> <Requests user={user} /> </Route>

            <Route exact path="/roster-requests"> <RoasterRequests user={user} /> </Route>

            <Route exact path="/approved-rosters"> <ApprovedRosters user={user} /> </Route>

            <Route exact path="/staff-progress"> <StaffProgress user={user} /> </Route>

            <Route exact path="/medication"> <Medication user={user} /> </Route>

            <Route exact path="/billing"> <Billing user={user} /> </Route>

            <Route exact path="/progress-report"> <ProgressReport user={user} /> </Route>

            <Route exact path="/incident-report"> <IncidentForm user={user} /> </Route>


            <Route exact path="/client-feedback"> <ClientFeedback user={user} /> </Route>

          </div>

        }
      </Router>
    </div>

  );
}

export default App;
