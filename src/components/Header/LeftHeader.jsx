import { connect } from 'react-redux';
import React from "react";

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    party: state.party
});

class LeftHeader extends React.Component {
    render() {
        if (this.props.pokemon.pokemon && this.props.pokemon.pokemon.length !== 0) {
            return (
                <div className='col-md-2'>

                </div>
            );
        } else return null;
    }
}

export default connect(mapStateToProps)(LeftHeader);
