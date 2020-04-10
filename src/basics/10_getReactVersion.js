import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReactVersion() {
    return (
        <div className="container">
            <div className="jumbotron">
                <p>current react version is :
             <b className="text-danger">{React.version}</b>
                </p>
            </div>
        </div>
    );
}

export default ReactVersion