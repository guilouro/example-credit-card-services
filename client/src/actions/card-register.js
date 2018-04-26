export const FLIP = 'card-register/FLIP';
export const CHANGE = 'card-register/CHANGE';

export const toFlip = value => ({
    type: FLIP,
    payload: value,
});

export const change = (value, field) => ({
    type: CHANGE,
    payload: { value, field },
});
