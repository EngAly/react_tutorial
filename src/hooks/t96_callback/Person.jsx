import React, { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const Person = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(5000);

    // use callback + memo to stop all component to render
    //  so that it will call a method wrapped with useCallback will
    // re render state in array only i.e age
    const incAge = useCallback(() => {
        setAge(age + 1);
    }, [age])

    const incSalary = useCallback(() => {
        setSalary(salary + 500);
    }, [salary])

    /**
     * note that here each change in any state will re render all others component
     * so that it not logic 
     */
    return (
        <div>
            <Title />

            <Count text='age' count={age} />
            <Button handleClick={incAge}>Increment Age</Button>

            <Count text='salary' count={salary} />
            <Button handleClick={incSalary}>Increment Salary</Button>
        </div>
    );
};

export default Person;