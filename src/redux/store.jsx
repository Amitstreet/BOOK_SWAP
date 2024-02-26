import  {createStore}  from 'redux';
import rootReducer from './root_reudcer';

const store = createStore(rootReducer);

export default store;
