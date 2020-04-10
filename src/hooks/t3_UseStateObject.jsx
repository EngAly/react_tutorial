import React, { useState } from 'react';

const UseStateObject = () => {
    const [name, getName] = useState({ fname: '', lname: '' })
    return (
        <div>
            <div>
                <h4>with pass property only without spread operator so that it ignore other elements</h4>
                <input type="text" value={name.fname} id="" onChange={e => getName({ fname: e.target.value })} />
                <br />
                <input type="text" value={name.lname} id="" onChange={e => getName({ lname: e.target.value })} />)
                 <br />
                <h3>my name is {name.fname} {name.lname}</h3>
                <br />
                <p>{JSON.stringify(name)}</p>
            </div >
            <div>
                <h4>with pass spread operator so that it pass other elements and override other founded properies</h4>
                <input type="text" value={name.fname} id="" onChange={e => getName({ ...name, fname: e.target.value })} />
                <br />
                <input type="text" value={name.lname} id="" onChange={e => getName({ ...name, lname: e.target.value })} />)
                    <br />
                <h3>my name is {name.fname} {name.lname}</h3>
                <br />
                <p>{JSON.stringify(name)}</p>
            </div>
        </div>
    );
};

export default UseStateObject;