import React from 'react'
import UseRef from './UseRef'
import ClassTimer from './ClassTimer'
import HookTimer from './HookTimer'

function REF() {
    return (
        <div>
            {/* <UseRef /> */}

            {/* use timer didMount and timerUnmount with class component */}
            {/* <ClassTimer /> */}

            {/*  how to use timer setInterval with react hook */}
            <HookTimer />
        </div>
    )
}

export default REF
