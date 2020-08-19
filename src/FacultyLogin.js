import React from "react";

import { isNull } from "util";
class FacultyLogin extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            FID:null,
            Password:null
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
     }
     submitHandler(Event)
     {
        //alert("submitting!");
        if(isNull(this.state.FID)||isNull(this.state.Password))
        {
            alert("Please fill all the requied details");
            Event.preventDefault();
        }
     }
    render()
    {
        return(<div>
            <head>
                <title>Faculty Login</title>
            </head>
            <body>
                <form action="http://localhost:8000/" name="Faculty Login Page" method="GET" onSubmit={this.submitHandler.bind(this)} class="container">
                    <h>Faulty Login</h><br/>
                    Faculty ID:<input type="text" name="FIDVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Password:<input type="text" name="PasswordVal" onChange={this.changeHandler.bind(this)}/><br/>
                    <input type="submit" text="SUBMIT" class="bt1"/>
                    <input type="reset" text="RESETVAL" class="bt1"/>
                </form>
            </body>
        </div>)
    }
}
export default FacultyLogin
