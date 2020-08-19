import React from "react"

import { isNull } from "util";
import DatePicker from "react-datepicker";
import "./global";
import "react-datepicker/dist/react-datepicker.css";
class ViewCalendar extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            startDate:new Date(),
            EventName:null,
            Type:null
        }
    }
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
     submitHandler(Event)
     {
        if(isNull(this.state.startDate))
        {
            alert("Please fill all the requied details");
            Event.preventDefault();
        }
         //alert("submitting");
         //alert(global.adminis);
     }
    render()
    {
        return(<div>
            <head>
                <title>View Academic Calendar</title>
            </head>
            <body>
                <form action="http://localhost:8005" name="Registration Page" method="GET" onSubmit={this.submitHandler.bind(this)} class="container">
                    <h>View Academic Calendar</h><br/>
                    Date:<DatePicker selected={this.state.startDate} onChange={this.handleChange.bind(this)} name="DateVal"/><br/>
                    <input type="submit" text="SUBMIT" class="bt1"/>
                    <input type="reset" text="RESETVAL" class="bt1"/>
                </form>
            </body>
        </div>)
    }
}
export default ViewCalendar
