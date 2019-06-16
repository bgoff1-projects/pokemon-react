import { connect } from 'react-redux';
import React from "react";
import { removeParty } from "../actions";
import { getImageSource } from "../utils/pokemon";

const mapStateToProps = state => ({
    savedParties: state.savedParties,
    pokemon: state.pokemon
});

class Parties extends React.Component {
    constructor(props) {
        super(props);
        for (const party of this.props.savedParties.parties) {
            while (party.length < 6) {
                party.push('');
            }
        }
    }

    onClick(partyIndex) {
        this.props.dispatch(removeParty(this.props.savedParties.parties[ partyIndex ]));
    }


    render() {
        if (this && this.props && this.props.savedParties && this.props.pokemon) {
            const pokemon = this.props.pokemon.all.concat(this.props.pokemon.party);
            const div = <div>&nbsp;</div>;
            const parties = this.props.savedParties.parties;
            return (
                <div>
                    { parties.map((party, partyIndex) => {
                            return <div className='text-center' key={ partyIndex }>
                                { party.map((value, index) => {
                                    const poke = pokemon.find((each) => each.name === value);
                                    if (!poke) {
                                        return <span style={ { 'display': 'inline-block' } } key={ index }
                                                     onClick={ () => this.onClick(partyIndex) }><span
                                            className='empty'/>{ div }{ div }<br/></span>
                                    }
                                    let className;
                                    let types;
                                    if (poke.types.length === 1) {
                                        className = `circle ${ poke.types[ 0 ] }`;
                                        types = (<span className={ 'type ' + poke.types[ 0 ] }>
                                                    { poke.types[ 0 ] }
                                                </span>);
                                    } else {
                                        className = `circle ${ poke.types[ 1 ] }-main ${ poke.types[ 0 ] }-secondary`;
                                        types = (<span><span className={ 'type ' + poke.types[ 1 ] }>
                                                    { poke.types[ 1 ] }
                                                    </span><span className={ 'type ' + poke.types[ 0 ] }>
                                                    { poke.types[ 0 ] }
                                                </span></span>);
                                    }
                                    return (
                                        <span style={ { 'display': 'inline-block' } } key={ index }>
                                            <img className={ className }
                                                 src={ getImageSource(poke) }
                                                 alt={ poke.name } width={ '96px' } height={ '96px' }
                                                 onClick={ () => this.onClick(partyIndex) }/>
                                            <div className='name'>{ poke.name }</div>
                                            <div>{ types }</div><br/>
                                        </span>
                                    )
                                }) }</div>
                        }
                    ) }
                </div>
            );
        }
        return <span/>
    };
}

export default connect(mapStateToProps)(Parties);
