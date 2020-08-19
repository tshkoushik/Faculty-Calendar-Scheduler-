import React from "react"

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
class RegistrationPage extends React.Component{
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
     changeHandler(Event)
     {
        if(Event.name==="EventVal")
        {
            this.setState({EventName:Event.target.value});
        }
        else if(Event.name==="HWVal")
        {
            this.setState({Type:Event.target.value});
            alert(Event.target.value);
        }
     }
    render()
    {
        return(<div>
            <head>
                <title>Populate Academic Calendar</title>
            </head>
            <body>
                <form action="http://google.com" name="Registration Page" method="GET">
                    <h>Populate Academic Calendar</h><br/>
                    Date:<DatePicker selected={this.state.startDate} onChange={this.handleChange} name="DateVal"/><br/>
                    Event:<input type="text" name="EventVal" onChange={this.changeHandler}/><br/>
                    H/W:<input type="text" name="HWVal" onChange={this.changeHandler}/><br/>
                    <input type="submit" text="SUBMIT"/>
                    <input type="reset" text="RESETVAL"/>
                </form>
            </body>
        </div>)
    }
}
export default RegistrationPage
