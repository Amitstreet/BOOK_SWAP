import { combineReducers } from 'redux';
import  AuthReducer  from './Auth/reducer'

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  Auth: AuthReducer,
});


export default rootReducer;
