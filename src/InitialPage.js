import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import FacultyLogin from "./FacultyLogin"; 
import AdminLogin from "./AdminLogin";
import PopulateCalendar from "./PopulateCalendar";
import PopulateTimeTable from "./PopulateTimeTable";
import ViewTimeTable from "./ViewTimeTable";
import ViewCalendar from "./ViewCalendar";
import EditCalendar from "./EditCalendar";
import EditTimeTable from "./EditTimeTable";
import FacultyReg from "./FacultyReg";
class InitialPage extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            
        }
        global.adminis="false";
    }
    render()
    {
        return(<div>
            <head>
                <title>HomePage</title>
            </head>
            <body>
                    <Router>
                    <Link to ="/FacultyLogin"><button className="btn">Faculty Login</button></Link>
                    <Link to ="/AdminLogin"><button className="btn">Administrator Login</button></Link>
                    <Link to ="/PopulateCalendar"><button className="btn">Populate Calendar</button></Link>
                    <Link to ="/PopulateTimeTable"><button className="btn">Populate TimeTable</button></Link>
                    <Link to ="/ViewTimeTable"><button className="btn">View TimeTable</button></Link>
                    <Link to ="/ViewCalendar"><button className="btn">View Calendar</button></Link>
                    <Link to ="/EditTimeTable"><button className="btn">Edit TimeTable</button></Link>
                    <Link to ="/EditCalendar"><button className="btn">Edit Calendar</button></Link>
                    <Link to="/FacultyReg"><button className="btn">Faculty Registration</button></Link>
                    <a href="http://localhost:8013"><button className="btn">Logout</button></a>
                    <Route path="/FacultyLogin" component={FacultyLogin}/>
                    <Route path="/AdminLogin" component={AdminLogin}/>
                    <Route path="/PopulateCalendar" component={PopulateCalendar}/>
                    <Route path="/PopulateTimeTable" component={PopulateTimeTable}/>
                    <Route path="/ViewTimeTable" component={ViewTimeTable}/>
                    <Route path="/ViewCalendar" component={ViewCalendar}/>
                    <Route path="/EditTimeTable" component={EditTimeTable}/>
                    <Route path="/EditCalendar" component={EditCalendar}/>
                    <Route path="/FacultyReg" component={FacultyReg}/>
                    </Router>
            </body>
        </div>)
    }
}
//add button to allow download of timetable
export default InitialPage
