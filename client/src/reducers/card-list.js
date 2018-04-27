import { FETCH_ALL } from 'actions/card-list';

const INITIAL_STATE = {
    isLoading: false,
    results: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${FETCH_ALL}_PENDING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${FETCH_ALL}_FULFILLED`:
            return {
                ...state,
                results: action.payload.results,
                isLoading: false,
            };
        default:
            return state;
    }
};
