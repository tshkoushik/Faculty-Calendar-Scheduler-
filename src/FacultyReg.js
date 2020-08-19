import React from "react";
import { isNull } from "util";
class FacultyReg extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            FID:null,
            Fname:null,
            Password:null,
            Address:null,
            Phone:null,
            Desc:null
        }
        this.changeHandler.bind(this);
    }
     changeHandler(Event)
     {
        if(Event.target.name==="FIDVal")
        {
            this.setState({FID:Event.target.value});
        }
        else if(Event.target.name==="PasswordVal")
        {
            this.setState({Password:Event.target.value});
        }
        else if(Event.target.name==="FNameVal")
        {
            this.setState({Fname:Event.target.value});
        }
        else if(Event.target.name==="AddrVal")
        {
            this.setState({Address:Event.target.value});
        }
        else if(Event.target.name==="PhoneVal")
        {
            this.setState({Phone:Event.target.value});
        }
        else if(Event.target.name==="DescVal")
        {
            this.setState({Desc:Event.target.value});
        }
     }
     submitHandler(Event)
     {
        //alert("submitting!");
        if(isNull(this.state.FID)||isNull(this.state.Fname)||isNull(this.state.Password)||isNull(this.state.Address)||isNull(this.state.Phone))
        {
            alert("Please fill all the requied details");
            Event.preventDefault();
        }
     }
    render()
    {
        return(<div>
            <head>
                <title>New Faculty Registration</title>
            </head>
            <body>
                <form action="http://localhost:8008" name="Edit TimeTable Page" method="GET" onSubmit={this.submitHandler.bind(this)} class='container'>
                    <h>New Faculty registration</h><br/>
                    Faculty ID:<input type="text" name="FIDVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Password:<input type="text" name="PasswordVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Faculty Name:<input type="text" name="FNameVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Address:<input type="text" name="AddrVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Phone:<input type="text" name="PhoneVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Description:<input type="text" name="DescVal" onChange={this.changeHandler.bind(this)}/><br/>
                    <input type="submit" text="SUBMIT" class="bt1"/>
                    <input type="reset" text="RESETVAL" class="bt1"/>
                </form>
            </body>
        </div>)
    }
}
export default FacultyReg
