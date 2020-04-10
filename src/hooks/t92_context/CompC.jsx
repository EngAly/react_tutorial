import React from 'react';
import { Consumer, Consumer1 } from './Context'

const CompC = () => {
    return (
        <div>
            <Consumer>
                {library => {
                        return (
                            <Consumer1>
                                {framework => {
                                        return (<h1>{library} is library and {framework} is framework</h1>)
                                    }
                                }
                            </Consumer1>)
                    }
                }
            </Consumer>
        </div>
    );
};

export default CompC;