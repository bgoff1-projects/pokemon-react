import React from "react";
import { Link } from 'react-router-dom';

export default class PartiesLink extends React.Component {
    render() {
        return <Link className='navbar-item pointer' to={'/parties'}>Saved Parties</Link>
    }
}
