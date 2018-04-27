import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCards } from 'actions/card-list';

class CardList extends React.PureComponent {
    componentDidMount() {
        this.props.fetchCards();
    }

    render() {
        return (
            <div className="list">
                {this.props.results.map(item =>
                    <div className="list__item">
                        <div className="list__name">
                            {item.company}
                        </div>
                        <div className="list__actions">
                            <Link to={`/edit/${item.id}`}>
                                <span className="edit">
                                    Editar
                                </span>
                            </Link>
                            <span className="delete">
                                Excluir
                            </span>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

CardList.propTypes = {
    isLoading: PropTypes.bool,
    results: PropTypes.array,
    fetchCards: PropTypes.func,
};

const mapStateToProps = ({ cardList }) => (cardList);

export default connect(mapStateToProps, { fetchCards })(CardList);
