import { parseSubmit } from 'services/utils';
import { API_URL } from '../constants';

export const FLIP = 'card-register/FLIP';
export const CHANGE = 'card-register/CHANGE';
export const SUBMIT = 'card-register/SUBMIT';

export const toFlip = value => ({
    type: FLIP,
    payload: value,
});

export const change = (value, field) => ({
    type: CHANGE,
    payload: { value, field },
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
