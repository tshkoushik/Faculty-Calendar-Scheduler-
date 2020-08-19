import React from "react";
export default class MyForm extends React.Component {
    constructor(props)
    {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            name:"",value:""
        }
    }
    handleSubmit(event) {
        //event.preventDefault();
        //alert("submitting");
        var a=5;
    };

    render() {
        //const { children, handleSubmit } = this.props

        return (
            <form onSubmit={this.handleSubmit} name="MyForm" action="http://google.com" method="GET">
                
                <input type="text" name="email" onChange={this.handleSubmit}/>
                <input type="submit"/>
            </form>
        )
    }
}