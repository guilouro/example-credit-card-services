import React from 'react';
import { Link } from 'react-router-dom';
import CardRegister from 'containers/CardRegister';

const Register = props => (
    <React.Fragment>
        <CardRegister {...props} />
        <Link to="/list" className="button">
            Go to List
        </Link>
    </React.Fragment>
);

export default Register;
