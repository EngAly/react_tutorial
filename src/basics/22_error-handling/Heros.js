import React, { Component } from 'react'
import Hero from './Hero'
import ErrorBoundary from './ErrorBoundary'

class Heros extends Component {
    render() {
        return (
            <div>
                {/* each component will go to  ErrorBoundary first to check if there error or not
                very note: if you wrapped all component as a whole will crash all components
                but the good to put each comonet unattached others in one single error wrapping component */}

                {/* <ErrorBoundary>
                    <Hero hero="superman" />
                    <Hero hero="spider man" />
                    <Hero hero="jimes bondz" />
                </ErrorBoundary> */}

                {/* each componet unattached with others */}

                <ErrorBoundary><Hero hero="superman" /> </ErrorBoundary>

                <ErrorBoundary><Hero hero="spider man" /> </ErrorBoundary>

                <ErrorBoundary><Hero hero="jimes bondz" /> </ErrorBoundary>

            </div>
        )
    }
}

export default Heros
