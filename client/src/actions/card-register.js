import { parseSubmit } from 'services/utils';
import { API_URL } from '../constants';
import { fetchCards } from './card-list';

export const FLIP = 'card-register/FLIP';
export const CHANGE = 'card-register/CHANGE';
export const CLEAR = 'card-register/CLEAR';
export const SUBMIT = 'card-register/SUBMIT';
export const DELETE = 'card-register/DELETE';

export const toFlip = value => ({
    type: FLIP,
    payload: value,
});

export const change = (value, field) => ({
    type: CHANGE,
    payload: { value, field },
});

export const clear = () => ({
    type: CLEAR,
});

export const submit = (values) => {
    const request = fetch(`${API_URL}/cards`, {
        method: 'POST',
        body: JSON.stringify(parseSubmit(values)),
    });

    return {
        type: SUBMIT,
        payload: request,
    };
};

export const deleteCard = id => (
    (dispatch) => {
        const request = fetch(`${API_URL}/cards/${id}`, {
            method: 'DELETE',
        })
            .then(() => dispatch(fetchCards()));

        return dispatch({
            type: DELETE,
            payload: request,
        });
    }
);
