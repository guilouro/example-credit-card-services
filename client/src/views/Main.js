import React from 'react';
import PropTypes from 'prop-types';
import CardSimulator from 'components/CardSimulator';

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

            <div className="form">
                <CardSimulator />
            </div>

            <form className="card__form">
                <div className="form__row">
                    <input type="text" name="number" />
                    <input type="text" name="company" />
                </div>
                <div className="form__row">
                    <input type="text" name="cvv" />
                    <input type="text" name="expiration" />
                    <button>SUBMIT</button>
                </div>
            </form>

            {props.children}
        </section>
    </React.Fragment>
);

Main.propTypes = {
    children: PropTypes.object,
};

export default Main;
