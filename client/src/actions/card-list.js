import { API_URL } from '../constants';

export const FETCH_ALL = 'card-list/FETCH_ALL';
export const FETCH = 'card-list/FETCH';

export const fetchCard = (id) => {
    const request = fetch(`${API_URL}/cards/${id}`).then(res => res.json());

    return {
        type: FETCH,
        payload: request,
    };
};

export const fetchCards = () => {
    const request = fetch(`${API_URL}/cards`).then(res => res.json());

    return {
        type: FETCH_ALL,
        payload: request,
    };
};
