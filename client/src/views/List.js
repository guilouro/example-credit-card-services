import React from 'react';
import { Link } from 'react-router-dom';
import CardList from 'containers/CardList';

const List = () => (
    <React.Fragment>
        <CardList />
        <Link to="/" className="button">
            Create new
        </Link>
    </React.Fragment>
);

export default List;
