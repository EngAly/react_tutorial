import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SetState extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'react'
        }
    }

    render() {
        return (
            <div>
                <h>my favorite frontend framework is {this.state.name}</h>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(prevState => {
                return { name: prevState.name + ' and angular' }
            });
        },
            3000
        );
    }
}

export default SetState
