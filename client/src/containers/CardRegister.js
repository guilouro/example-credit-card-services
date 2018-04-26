import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardSimulator from 'components/CardSimulator';
import { toFlip, change } from 'actions/card-register';

class CardRegister extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    onChange(e, name) {
        this.props.change(e.target.value, name);
    }

    render() {
        return (
            <div className="card__register">
                <CardSimulator
                    {...this.props.card}
                />

                <form className="card__form">
                    <div className="form__row">
                        <div className="form__field">
                            <input
                                type="text"
                                placeholder="NUMBER"
                                value={this.props.card.number}
                                onChange={e => this.onChange(e, 'number')}
                            />
                        </div>
                        <div className="form__field">
                            <input
                                type="text"
                                placeholder="FULL NAME"
                                value={this.props.card.company}
                                onChange={e => this.onChange(e, 'company')}
                            />
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__field">
                            <input
                                type="text"
                                placeholder="MM/YY"
                                value={this.props.card.expiration}
                                onChange={e => this.onChange(e, 'expiration')}
                            />
                        </div>
                        <div className="form__field">
                            <input
                                type="text"
                                placeholder="CVV"
                                value={this.props.card.cvv}
                                onChange={e => this.onChange(e, 'cvv')}
                                onFocus={() => this.props.toFlip(true)}
                                onBlur={() => this.props.toFlip(false)}
                            />
                        </div>
                        <div className="form__button">SUBMIT</div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ cardRegister }) => ({ card: cardRegister });

export default connect(mapStateToProps, { toFlip, change })(CardRegister);
