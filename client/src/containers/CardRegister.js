import React from 'react';
import PropTypes from 'prop-types';
import InputElement from 'react-input-mask/build/InputElement';
import { connect } from 'react-redux';
import CardSimulator from 'components/CardSimulator';
import { toFlip, change, clear, submit } from 'actions/card-register';
import { fetchCard } from 'actions/card-list';

class CardRegister extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.fetchCard(this.props.match.params.id);
        }
    }

    componentWillUnmount() {
        this.props.clear();
    }

    onSubmit(e) {
        this.props.submit(this.props.card);
        e.preventDefault();
    }

    render() {
        return (
            <div className="card__register">
                <CardSimulator
                    {...this.props.card}
                />

                <form className="card__form" onSubmit={this.onSubmit}>
                    <div className="form__row">
                        <div className="form__field">
                            <InputElement
                                required
                                type="text"
                                mask="9999 9999 9999 9999"
                                maskChar="*"
                                placeholder="NUMBER"
                                value={this.props.card.number}
                                onChange={e => this.props.change(e.target.value, 'number')}
                            />
                        </div>
                        <div className="form__field">
                            <input
                                required
                                type="text"
                                placeholder="FULL NAME"
                                value={this.props.card.company}
                                onChange={e => this.props.change(e.target.value, 'company')}
                            />
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__field">
                            <InputElement
                                required
                                type="text"
                                mask="99/99"
                                maskChar="*"
                                placeholder="MM/YY"
                                value={this.props.card.expiration}
                                onChange={e => this.props.change(e.target.value, 'expiration')}
                            />
                        </div>
                        <div className="form__field">
                            <InputElement
                                required
                                type="text"
                                mask="999"
                                maskChar="*"
                                placeholder="CVV"
                                value={this.props.card.cvv}
                                onChange={e => this.props.change(e.target.value, 'cvv')}
                                onFocus={() => this.props.toFlip(true)}
                                onBlur={() => this.props.toFlip(false)}
                            />
                        </div>
                        <button
                            className="form__button"
                        >
                            SAVE
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

CardRegister.propTypes = {
    match: PropTypes.object,
    card: PropTypes.object,
    change: PropTypes.func,
    toFlip: PropTypes.func,
    clear: PropTypes.func,
    fetchCard: PropTypes.func,
    submit: PropTypes.func,
};

const mapStateToProps = ({ cardRegister }) => ({ card: cardRegister });

export default connect(mapStateToProps, {
    toFlip, change, clear, submit, fetchCard,
})(CardRegister);
