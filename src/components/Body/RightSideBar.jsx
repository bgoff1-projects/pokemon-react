import { connect } from 'react-redux';
import React from "react";
import types from '../../utils/types';
import { isWeakAgainst } from "../../utils";

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    party: state.party
});

class RightSideBar extends React.Component {
    findWeaknessCount(type) {
        if (this.props && this.props.pokemon) {
            let count = 0;
            for (const partyMember of this.props.pokemon.party) {
                if (isWeakAgainst(partyMember, type)) count++;
            }
            return count;
        }
    }

    render() {
        if (this.props.pokemon.all && this.props.pokemon.all.length !== 0) {
            return (<div className='column weaknesses text-center'>
                <span>Weaknesses:</span>
                <table className='text-center'>
                    <tbody>
                    { types.map((val, index) => <tr key={index}>
                        <td>&nbsp;{ val }&nbsp;</td>
                        <td>{ this.findWeaknessCount(val) }</td>
                    </tr>) }
                    </tbody>
                </table>
            </div>);
        } else {
            return null;
        }
    }
}

export default connect(mapStateToProps)(RightSideBar);
