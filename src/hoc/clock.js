import React, { Component } from 'react';



/**
 * This API is take a original component and add new proprties then
 * it return back as 
 * @param {} OriginalComponent 
 * @param {*} start NewComponent and assigned it to UpdatedComponent
 */
const UpdatedComponent = (OriginalComponent, start) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
//  we can pass the start number for count in each component consume HOC
            this.state = { count: start }
        }
        /**
         * method use to inc count property by one in time
         */
        increase = () => {
            this.setState(prevstate => {
                return { count: prevstate.count + 1 }
            });
        }
        /**
         * In a nutshell, rendering is the process of transforming your react
         *  components into DOM (Document Object Model) nodes that your browser can
         *  understand and display on the screen. DOM manipulation is extremely slow
         * difference between render and return :-
         * Render is a method that tell react what to display
         * Return is a method / give output of function
         */
        render() {
// note that here before convert originalComponent with newComponent we can get name property
// that found in originalComponent but after converting originalComponent hoc ignore any other founded properties
            console.log(this.props.name);
            return <OriginalComponent increase={this.increase}
                count={this.state.count}
                // ...this.props it store all properties in originalComponent so that we pass it again
                {...this.props} />
        }
    }
    return NewComponent
}

export default UpdatedComponent;