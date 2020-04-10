import React, { Component } from 'react'
import Hero from './Hero';

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    // each component wrapped by this component will get here first then will catch error or will last for
    // its execution
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {
        if (this.state.hasError) {
            return <h3>some thing goes error</h3>
        }
        // say to react to make actual rendering component to continue
        return this.props.children;
    }
}

export default ErrorBoundary
