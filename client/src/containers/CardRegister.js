import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardSimulator from 'components/CardSimulator';
import { toFlip, change } from 'actions/card-register';

const CardRegister = props => (
    <div className="card__register">
        <CardSimulator
            {...props.card}
        />

        <form className="card__form">
            <div className="form__row">
                <div className="form__field">
                    <input
                        type="text"
                        placeholder="NUMBER"
                        value={props.card.number}
                        onChange={e => props.change(e.target.value, 'number')}
                    />
                </div>
                <div className="form__field">
                    <input
                        type="text"
                        placeholder="FULL NAME"
                        value={props.card.company}
                        onChange={e => props.change(e.target.value, 'company')}
                    />
                </div>
            </div>
            <div className="form__row">
                <div className="form__field">
                    <input
                        type="text"
                        placeholder="MM/YY"
                        value={props.card.expiration}
                        onChange={e => props.change(e.target.value, 'expiration')}
                    />
                </div>
                <div className="form__field">
                    <input
                        type="text"
                        placeholder="CVV"
                        value={props.card.cvv}
                        onChange={e => props.change(e.target.value, 'cvv')}
                        onFocus={() => props.toFlip(true)}
                        onBlur={() => props.toFlip(false)}
                    />
                </div>
                <div className="form__button">SUBMIT</div>
            </div>
        </form>
    </div>
);

const mapStateToProps = ({ cardRegister }) => ({ card: cardRegister });

export default connect(mapStateToProps, { toFlip, change })(CardRegister);
