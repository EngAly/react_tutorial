import React, { Component } from 'react';

class ChangeName extends Component {
    constructor() {
        super();
        this.state = { name: "aly ahmed", age: 26,btn_name:"ChangeName" };
    }
    newName = () => {
        this.setState({ name: "ali ahmed mohamed" ,btn_name:"DbClickOldName"});
    }
    oldName=()=>{
        this.setState({name: "aly ahmed",btn_name:"ChangeName"});
    }
    render() {
        return (
            <div>
                <p>
                    my name is : <b>{this.state.name} </b>
                    and my age is <b>{this.state.age}</b>
                </p>
                <button type="button" onClick={this.newName} onDoubleClick={this.oldName}>{this.state.btn_name}</button>
            </div>
        );
    }
}

export default ChangeName

