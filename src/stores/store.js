
import { createStore } from 'redux';
import reduce2 from '../reducers/reducer2'

// store may take any reducer i.e reduce1,reduce2,...
const store = createStore(reduce2);


// Bottom Part You Can Observe redux Data Flow

/**
 * store.getState will return default state because user doesn't define any specific action
 */
// console.log(store.getState())


/**
 * you can define specific actionType so that in reducer can return specific state
 * note here define new action but already not use it yet. so we need to pass this 
 * action to store to take it.
 */
// const newAction = {
//     type: "split",
//     data: "ali ahmed"
// }


/**
 * pass pre defined action(i.e newAction) to store through dispatch method
 * CONSEQUENTLY will return new state through actionType
 */
// store.dispatch(newAction);

/**
 * store.getState will return state CONSEQUENTLY newAction
 */
// console.log(store.getState())

/**
 * create newAction willreturn new state CONSEQUENTLY actionType
 */
// const action1  = {
//     type:"add",
//     data: "ali ahmed mohamed"
// }

/**
 * pass pre defined action(i.e action1) to store through dispatch method
 * CONSEQUENTLY will return new state through actionType
 */
// store.dispatch(action1);

/**
 * store.getState will return state CONSEQUENTLY action1
 */
// console.log(store.getState())

export default store;