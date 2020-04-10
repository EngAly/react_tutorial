
import { createStore } from 'redux';
import reduce1 from '../reducers/reducer1'

// store may take any reducer i.e reduce1,reduce2,...
const basicStore = createStore(reduce1);

export default basicStore