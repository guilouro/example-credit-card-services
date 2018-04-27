import { FLIP, CHANGE, CLEAR } from 'actions/card-register';
import { FETCH } from 'actions/card-list';
import { parseExpiration } from 'services/utils';

const INITIAL_STATE = {
    flip: false,
    number: '',
    company: '',
    expiration: '',
    cvv: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FLIP:
            return { ...state, flip: action.payload };
        case CHANGE:
            return { ...state, [action.payload.field]: action.payload.value };
        case `${FETCH}_FULFILLED`:
            return {
                ...state,
                ...action.payload,
                expiration: parseExpiration(action.payload.expiration),
            };
        case CLEAR:
            return INITIAL_STATE;
        default:
            return state;
    }
};
