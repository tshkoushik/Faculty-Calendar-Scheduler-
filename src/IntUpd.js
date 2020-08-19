import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import "./InitialPage.css";
import FacultyLogin from "./FacultyLogin"; 
import AdminLogin from "./AdminLogin";
import PopulateCalendar from "./PopulateCalendar";
import PopulateTimeTable from "./PopulateTimeTable";
import ViewTimeTable from "./ViewTimeTable";
import ViewCalendar from "./ViewCalendar";
import EditCalendar from "./EditCalendar";
import EditTimeTable from "./EditTimeTable";
class InitialPage extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            
        }
    }
    render()
    {
        return(<div>
            <head>
                <title>HomePage</title>
            </head>
            <body> 
                    <h1 className = "hd">Faculty Calendar Scheduler</h1>
                    <Router>
                        <div class = "fl">
                                <button className = "Button"><Link to ="/FacultyLogin">Faculty Login</Link></button>
                                <button className = "Button"><Link to ="/PopulateTimeTable">Populate TimeTable</Link></button>
                                <button className = "Button"><Link to ="/EditTimeTable">Edit TimeTable</Link></button>
                        </div>
                        <div class = "al">
                            <button className = "Button1"><Link to ="/AdminLogin">Administrator Login</Link></button>
                            <button className = "Button1"><Link to ="/ViewTimeTable">View TimeTable</Link></button>
                            <button className = "Button1"><Link to ="/EditCalendar">Edit Calendar</Link></button>
                         </div>
                         <div class = "al">
                            <button className = "Button2"><Link to ="/PopulateCalendar">Populate Calendar</Link></button>
                            <button className = "Button2"><Link to ="/ViewCalendar">View Calendar</Link></button>
                            <a href="http://localhost:8013"><button className="Button2">Logout</button></a>
                         </div>
                    <Route path="/FacultyLogin" component={FacultyLogin}/>
                    <Route path="/AdminLogin" component={AdminLogin}/>
                    <Route path="/PopulateCalendar" component={PopulateCalendar}/>
                    <Route path="/PopulateTimeTable" component={PopulateTimeTable}/>
                    <Route path="/ViewTimeTable" component={ViewTimeTable}/>
                    <Route path="/ViewCalendar" component={ViewCalendar}/>
                    <Route path="/EditTimeTable" component={EditTimeTable}/>
                    <Route path="/EditCalendar" component={EditCalendar}/>
                    </Router>
            </body>
        </div>)
    }
}
//add button to allow download of timetable
export default InitialPage
