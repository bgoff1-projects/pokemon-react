import { connect } from 'react-redux';
import React from "react";
import { checkCoverage } from "../../actions";

const mapStateToProps = state => ({
    pokemon: state.pokemon,
});

class CoverageFilter extends React.Component {

    handleClick() {
        this.props.dispatch(checkCoverage());
    }

    render() {
        return (
            <div className='col-md-3'>
                <button className='btn btn-secondary' onClick={ () => this.handleClick() }>Check Coverage</button>
            </div>
        );
    }
}


export default connect(mapStateToProps)(CoverageFilter);
