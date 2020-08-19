import React from "react";
//import PopulateTimeTable from "./PopulateTimeTable";
//import "./global";
//import InitialPage from "./InitialPage";

import { isNull } from "util";
class ViewTimeTable extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            FID:null
        }
        this.changeHandler.bind(this);
    }
     changeHandler(Event)
     {
        if(Event.target.name==="FIDVal")
        {
            this.setState({FID:Event.target.value});
        }
     }
     submitHandler(Event)
     { 
         if(isNull(this.state.FID))
        {
            alert("Please fill all the requied details");
            Event.preventDefault();
        }
        //alert("submitting!");
        //alert(global.admin);
        //alert(global.adminis);
        //global.adminis="false";
        //alert(global.adminis);
     }
    render()
    {
        return(<div>
            <head>
                <title>View Faculty TimeTable</title>
            </head>
            <body>
                <form action="http://localhost:8004" name="Registration Page" method="GET" onSubmit={this.submitHandler.bind(this)} class="container">
                    <h>View Faculty TimeTable</h><br/>
                    Faculty ID:<input type="text" name="FIDVal" onChange={this.changeHandler.bind(this)}/><br/>
                    <input type="submit" text="SUBMIT" class="bt1"/>
                    <input type="reset" text="RESETVAL" class="bt1"/>
                </form>
            </body>
        </div>)
    }
}
//add button to allow download of timetable
export default ViewTimeTable
