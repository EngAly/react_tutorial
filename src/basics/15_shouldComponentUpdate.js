import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class ShouldComponentUpdate extends Component {
    constructor() {
        super();
        this.state = { material: "Computer" };
    }
    shouldComponentUpdate(){
        // true => to permit component to update
        // false => to perevet component to update
        return true;
    }
    changeCase = () => {
        this.setState({ material: "COMPUTER" });
    }
    render() {
        return (
            <div className="containner">
                <div className="jumbotron text-center">
                    <p>
                        your fav material is:
                  <b className="text-center">{this.state.material}</b><br />
                        <button onClick={this.changeCase}>change material caes</button>
                    </p>
                </div>
            </div>
        );
    }
}
export default ShouldComponentUpdate

