import PropTypes from 'prop-types';
import React from 'react';

const Loading = ({ loading }) => {
    if (!loading) {
        return false;
    }

    return (
        <img src="/images/loading.svg" alt="Loading" />
    );
};

Loading.propTypes = {
    loading: PropTypes.bool,
};

export default Loading;
