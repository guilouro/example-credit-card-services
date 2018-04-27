import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cardRegister from './card-register';
import cardList from './card-list';

const rootReducer = combineReducers({
    routing: routerReducer,
    cardRegister,
    cardList,
});

export default rootReducer;
