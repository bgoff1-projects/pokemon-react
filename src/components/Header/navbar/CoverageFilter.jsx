import { connect } from 'react-redux';
import React from "react";
import { checkCoverage } from "../../../actions";

const mapStateToProps = state => ({
    pokemon: state.pokemon,
});

class CoverageFilter extends React.Component {

    handleClick() {
        this.props.dispatch(checkCoverage());
    }

    render() {
        return (
            <div className='navbar-item pointer' onClick={ () => this.handleClick() }>Check Coverage</div>
        );
    }
}


export default connect(mapStateToProps)(CoverageFilter);
