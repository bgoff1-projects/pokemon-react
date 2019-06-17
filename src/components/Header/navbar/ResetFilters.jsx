import React from 'react';
import { resetAllFilters } from "../../../actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    pokemon: state.pokemon,
});

class ResetFilters extends React.Component {

    handleClick() {
        this.props.dispatch(resetAllFilters());
    }
    render() {
        return <div className='navbar-item pointer' onClick={() => this.handleClick()}>Reset All Filters</div>
    }
}

export default connect(mapStateToProps)(ResetFilters);

