import React from "react"
import { isNull } from "util";
class Logout extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
        }
        this.changeHandler.bind(this);
    }
     changeHandler(Event)
     {
        
     }
    render()
    {
        return(<div>
            <head>
                <title>Edit Faculty TimeTable</title>
            </head>
            <body>
                <form action="http://localhost:8007" name="Edit TimeTable Page" method="GET" onSubmit={this.submitHandler.bind(this)}>
                   
                </form>
            </body>
        </div>)
    }
}
export default Logout
