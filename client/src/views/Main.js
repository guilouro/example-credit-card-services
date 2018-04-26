import React from 'react';
import PropTypes from 'prop-types';

const Main = props => (
    <React.Fragment>
        <header>
            Upnid - Credit Cards
        </header>

        <section className="container">
            {props.children}
        </section>
    </React.Fragment>
);


Main.propTypes = {
    children: PropTypes.object,
};

export default Main;
