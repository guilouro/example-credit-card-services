import React from 'react';
import PropTypes from 'prop-types';
import { TweenLite, TimelineLite, CSSPlugin } from 'gsap';

class CardSimulator extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onFlip = this.onFlip.bind(this);
    }

    componentDidMount() {
        CSSPlugin.defaultTransformPerspective = 1000;
        TweenLite.set(this.back, { rotationY: -180 });
        this.tl = new TimelineLite({ paused: true });
        this.tl
            .to(this.front, 0.4, { rotationY: 180 })
            .to(this.back, 0.4, { rotationY: 0 }, 0);

        this.onFlip(this.props.flip);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.flip !== this.props.flip) {
            this.onFlip(newProps.flip);
        }
    }

    onFlip(flip) {
        return flip ? this.tl.play() : this.tl.reverse();
    }

    render() {
        return (
            <div className="card" ref={(card) => { this.card = card; }}>
                <div className="card__front" ref={(front) => { this.front = front; }}>
                    <div className="card__number">
                        {this.props.number.padEnd(19, '*')}
                    </div>
                    <div className="card__section">
                        <div className="card__company">
                            {this.props.company}
                        </div>
                        <div className="card__expiration">
                            <span>Valid Date</span>
                            {this.props.expiration}
                        </div>
                    </div>
                </div>
                <div className="card__back" ref={(back) => { this.back = back; }}>
                    <div className="card__company">
                        {this.props.cvv.padEnd(3, '*')}
                    </div>
                </div>
            </div>
        );
    }
}

CardSimulator.propTypes = {
    number: PropTypes.string,
    expiration: PropTypes.string,
    company: PropTypes.string,
    cvv: PropTypes.string,
    flip: PropTypes.bool,
};

export default CardSimulator;
