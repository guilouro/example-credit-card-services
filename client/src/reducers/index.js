import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cardRegister from './card-register';

const rootReducer = combineReducers({
    routing: routerReducer,
    cardRegister,
});

export default rootReducer;
