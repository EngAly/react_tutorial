import React, { Component } from 'react';

// connect from react-redux link react With redux
import { connect } from 'react-redux'


// import all acions from action creator file
import { INC, DEC, Default } from './actions/actionCreator'



// JSX Flow describe user interface
class App extends Component {
    render() {
        var { name, age } = this.props;
        return (
            <center>
                {/* fetch name from returned props */}
                {name}

                <br />

                {/* fetch age from returned props */}
                {age}

                <br />

                {/* call  inc from props to increase age with one time*/}
                <button onClick={this.props.inc}>Inc</button>

                {/* call  dec from props to decrease age with one time*/}
                <button onClick={this.props.dec}>Dec</button>

                {/* call  default from props to return default age*/}
                <button onClick={this.props.default}>Default</button>


            </center>
        );
    }
}

/**
 * get state from reducer and pass it to component props
 * to get age this.props.age
 * @param {*} state 
 */
function mapStateToProps(state) {
    // you can get one/more field(s) as follow
    // return {
    //     // handle only need fields
    //     name: state.name,
    //     age: state.age
    // }

    // we can get state and save it to component props
    // but you need to know fields in it
    return state;

}


/**
 * note that => dispatch take action and the action is maybe type or type+data example
 * 1) const acion ={ type: "INC" } or
 * 2) const acion1 ={ type: "INC",data:"any data" } 
 * dispatch(acion) you can use either acion or acion1
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch) {
    return {
        // dispatch => send action for reducer
        // dispatch link action with reducer
        inc: () => dispatch(INC()),
        dec: () => dispatch(DEC()),
        // retrive default state state doesn't have any action type
        default: () => dispatch(Default())
    }
}



/**
 * can pass mapStateToProps for connect method
 * connect take two params method that will return state and store it to props
 * and 
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);