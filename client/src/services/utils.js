import lastDayOfMonth from 'date-fns/last_day_of_month';
import format from 'date-fns/format';

export const parseDateToSend = (value) => {
    const [month, year] = value.split('/');
    return format(lastDayOfMonth(new Date(`${month}/01/20${year}`)), 'YYYY-MM-DD');
};

export const parseSubmit = values => ({
    company: values.company,
    expiration: parseDateToSend(values.expiration),
    number: Number(values.number.replace(/\s/g, '')),
    cvv: Number(values.cvv),
});

