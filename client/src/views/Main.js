import React from 'react';
import PropTypes from 'prop-types';

const Main = props => (
    <React.Fragment>
        <header>
            <div className="header__name">
                Credit Cards System
            </div>
        </header>

        <section className="content">
            {props.children}
        </section>
    </React.Fragment>
);

Main.propTypes = {
    children: PropTypes.object,
};

export default Main;
