import { API_URL } from '../constants';

export const FETCH = 'card-list/FETCH';

export const fetchCards = () => {
    const request = fetch(`${API_URL}/cards`).then(res => res.json());

    return {
        type: FETCH,
        payload: request,
    };
};
