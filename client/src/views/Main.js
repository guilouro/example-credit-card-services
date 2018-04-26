import React from 'react';
import PropTypes from 'prop-types';

const Main = props => (
    <React.Fragment>
        <header>
            <div className="header__name">
                Upnid - Credit Cards
            </div>
            <div className="header__links">
                1
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
