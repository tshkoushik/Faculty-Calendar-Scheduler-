import React from "react";

import { isNull } from "util";
class PopulateTimeTable extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            FID:null,
            Hour:null,
            SCode:null,
            SName:null,
            Location:null
        }
        this.changeHandler.bind(this);
    }
     changeHandler(Event)
     {
        if(Event.target.name==="FIDVal")
        {
            this.setState({FID:Event.target.value});
        }
        else if(Event.target.name==="HourVal")
        {
            this.setState({Hour:Event.target.value});
        }
        else if(Event.target.name==="SubjectVal")
        {
            this.setState({SCode:Event.target.value});
        }
        else if(Event.target.name==="SubjectNameVal")
        {
            this.setState({SName:Event.target.value});
        }
        else if(Event.target.name==="LocationVal")
        {
            this.setState({Location:Event.target.value});
        }
     }
     submitHandler(Event)
     {
        if(isNull(this.state.FID)||isNull(this.state.Hour)||isNull(this.state.SCode)||isNull(this.state.SName)||isNull(this.state.Location))
        {
            alert("Please fill all the requied details");
            Event.preventDefault();
        }
        //alert("submitting!");
     }
    render()
    {
        return(<div>
            <head>
                <title>Populate Faculty TimeTable</title>
            </head>
            <body>
                <form action="http://localhost:8003" name="Populate TimeTable Page" method="GET" onSubmit={this.submitHandler.bind(this)} class="container">
                    <h>Populate Faculty TimeTable</h><br/>
                    Faculty ID:<input type="text" name="FIDVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Day:<input type="text" name="DayVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Hour:<input type="text" name="HourVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Subject Code:<input type="text" name="SubjectVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Subject Name:<input type="text" name="SubjectNameVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Location:<input type="text" name="LocationVal" onChange={this.changeHandler.bind(this)}/><br/>
                    <input type="submit" text="SUBMIT" class="bt1"/>
                    <input type="reset" text="RESETVAL" class="bt1"/>
                </form>
            </body>
        </div>)
    }
}
export default PopulateTimeTable
