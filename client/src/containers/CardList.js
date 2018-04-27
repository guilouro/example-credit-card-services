import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCards } from 'actions/card-list';
import { deleteCard } from 'actions/card-register';
import Loading from 'components/Loading';

class CardList extends React.PureComponent {
    componentDidMount() {
        this.props.fetchCards();
    }

    render() {
        if (this.props.isLoading) {
            return <Loading loading />;
        }

        return (
            <div className="list">
                {this.props.results.map(item =>
                    <div key={item.id} className="list__item">
                        <div className="list__name">
                            {item.company}
                        </div>
                        <div className="list__actions">
                            <Link to={`/edit/${item.id}`}>
                                <span className="edit">
                                    Editar
                                </span>
                            </Link>
                            <span className="delete" onClick={() => this.props.deleteCard(item.id)}>
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
    deleteCard: PropTypes.func,
};

const mapStateToProps = ({ cardList }) => (cardList);

export default connect(mapStateToProps, { fetchCards, deleteCard })(CardList);
