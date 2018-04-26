import { FLIP, CHANGE } from 'actions/card-register';

const INITIAL_STATE = {
    flip: false,
    number: '4454 4468 6658 6698',
    company: 'LOREM IPSUM',
    expiration: '06/22',
    cvv: '563',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FLIP:
            return { ...state, flip: action.payload };
        case CHANGE:
            return { ...state, [action.payload.field]: action.payload.value };
        default:
            return state;
    }
};
