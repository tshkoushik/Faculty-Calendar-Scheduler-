import React from "react"
import { isNull } from "util";
import './SE.css';
class EditTimeTable extends React.Component{
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
        //alert("submitting!");
        if(isNull(this.state.FID)||isNull(this.state.Hour)||isNull(this.state.SCode)||isNull(this.state.SName)||isNull(this.state.Location))
        {
            alert("Please fill all the requied details");
            Event.preventDefault();
        }
     }
    render()
    {
        return(<div>
            <head>
                <title>Edit Faculty TimeTable</title>
            </head>
            <body>
                <form action="http://localhost:8007" name="Edit TimeTable Page" method="GET" onSubmit={this.submitHandler.bind(this)} class="container">
                    <h>Edit Faculty TimeTable</h><br/>
                    Faculty ID:<input type="text" name="FIDVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Date:<input type="text" name="DayVal" onChange={this.changeHandler.bind(this)}/><br/>
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
export default EditTimeTable
