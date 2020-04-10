import React, { Component } from 'react';
import UserState from './t1_UserState';
import PrevState from './t2_PrevState';
import UseStateObject from './t3_UseStateObject';
import UseStateArray from './t4_UseStateArray';
import UseEffect from './t5_UseEffect';
import RunEffectWithCondition from './t6_RunEffectWithCondition';
import MouseHooks from './t7_MouseHooks';
import UseEffectCleanUp from './t8_UseEffectCleanUp';
import ClassMouse from '../advancedTutorial/ClassMouse';
import FetchDataUseEffect from './t9_FetchDataUseEffect';
import FetchDataWithId from './t91_FetchDataWithId';
import Father from './t92_context/Father';
import Reducer from './t93_reducer/Reducer';
import Launcher from './t94_reducerWithContext/Launcher';
import FetchingData from './t95_fetchingData/FetchingData';
import FetchDataUsingRedcer from './t95_fetchingData/FetchDataUsingRedcer';
import Person from './t96_callback/Person';
import Memo from './t97_memo/Memo';

class Hooks extends Component {
    render() {
        return (
            <div>
                {/* basic of how to start with usestate 
                we try a demo with counter as variable and function */}
                {/* <UseState /> */}

                {/* how to use previous state with useState */}
                {/* <PrevState /> */}

                {/* how to use object with this state this is demo example to save firstname and lastname to object */}
                {/* <UseStateObject /> */}

                {/* how use array with useSate to store multi objects */}
                {/* <UseStateArray /> */}

                {/* it used to equal to update view each render */}
                {/* <UseEffect /> */}

                {/* will restrict useEffect to work only if specific state object is changed */}
                {/* <RunEffectWithCondition /> */}

                {/* make event when mouse move demo to get x,y positions */}
                {/* <MouseHooks /> */}

                {/* how to unmount element when not use it  */}
                {/* <UseEffectCleanUp /> */}

                {/* how to get data from url from other place */}
                {/* <FetchDataUseEffect /> */}

                {/* fetch data from external url via record id */}
                {/* <FetchDataWithId /> */}


                {/* how to use context in functional component */}
                {/* <Father /> */}

                {/* tutorial how to use reducer in react and ther demo  */}
                {/* <Reducer /> */}

                {/* to use useContex with usereducer */}
                {/* <Launcher /> */}


                {/* how to fetch data with loading(boolean) post(object) error(string) */}
                {/* <FetchingData /> */}

                {/* how to fetch data using useReducer */}
                {/* <FetchDataUsingRedcer /> */}

                {/* tutoial for test memo in react and how it work */}
                {/* <Memo /> */}

                {/* how to use useCallback hook*/}
                <Person />



            </div>
        );
    }
}

export default Hooks;