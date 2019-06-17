import { connect } from 'react-redux';
import React from "react";
import types from '../../utils/types';
import { isStrongAgainst } from "../../utils";

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    party: state.party
});

class LeftSideBar extends React.Component {
    findStrengthCount(type) {
        if (this.props && this.props.pokemon) {
            let count = 0;
            for (const partyMember of this.props.pokemon.party) {
                if (isStrongAgainst(partyMember, type)) count++;
            }
            return count;
        }
    }

    render() {
        if (this.props.pokemon.all && this.props.pokemon.all.length !== 0) {
            return (<div className='column text-center'>
                <div className='type-table-header'>Strengths:</div>
                <table className='text-center strengths'>
                    <tbody>
                    { types.map((val, index) => <tr key={ index }>
                        <td>&nbsp;{ val }&nbsp;</td>
                        <td>{ this.findStrengthCount(val) }</td>
                    </tr>) }
                    </tbody>
                </table>
            </div>);
        } else {
            return null;
        }
    }
}

export default connect(mapStateToProps)(LeftSideBar);
