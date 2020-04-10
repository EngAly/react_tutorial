



/**
 * what Redux Component
 * Store => reducer => dispatch => action => state
 */
const initState = {
    name: "aly ahmed",
    age: 25
}

/**
 * reducer function take two variables 
 * state =>  that may you change in it and finally will retuen final state
 * action => through action.type you can choose between each action you want to change and from
 * it you will return specific state.
 * how to get data from received action (action.data)
 * @param {*} state 
 * @param {*} action 
 */
const reduce1 = (state = initState, action) => {
    // if user send action.type "INC" when call dispatch(actionType) will return 
    // specific state
    if (action.type == "INC") {
        return {
            age: state.age + 1,
            name: state.name
        };
    }
    // if user send action.type "DEC" when call dispatch(actionType) will return 
    // specific state and so on you can define multi action.type thay will return different state
    else if (action.type == "DEC") {
        return {
            age: state.age - 1,
            name: state.name
        };
    }
    // return default state i.e with initState if user doesn't define specific actionType
    return initState
}

// export default reduce1 => make this reducer is importable so that developer can import 
// it any another files
export default reduce1