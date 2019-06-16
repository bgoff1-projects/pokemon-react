import { connect } from 'react-redux';
import React from "react";
import { getPokemon, addPokemonToParty, removePokemonFromGrid } from "../../actions";
import { isGameFilter } from '../../reducers/gameFilter';
import '../../styles/Pokemon.scss';
import { isFilter } from '../../utils/'
import { gameFilterToAcronym, getArrayFromMap, getImageSource } from "../../utils/pokemon";

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    party: state.party,
    typeFilter: state.typeFilter,
    generationFilter: state.generationFilter,
    gameFilter: state.gameFilter
});

class View extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.pokemon.all.length === 0) {
            props.dispatch(getPokemon());
        }
    }

    findIndex(number, name) {
        for (let i = 0; i < this.props.pokemon.all.length; i++) {
            if (this.props.pokemon.all[ i ].pokemonNumber === number && name === this.props.pokemon.all[ i ].name) {
                return i;
            }
        }
    }

    onClick(pokemon) {
        if (this.props.pokemon.party.length !== 6) {
            this.props.dispatch(addPokemonToParty({
                name: pokemon.name,
                types: pokemon.types,
                pokemonNumber: pokemon.pokemonNumber,
                region: pokemon.region,
                generation: pokemon.generation
            }));

            this.props.dispatch(removePokemonFromGrid(this.findIndex(pokemon.pokemonNumber, pokemon.name)));
        }
    }

    filter() {
        if (this.props && this.props.pokemon.all) {
            const toFilter = this.props.pokemon.checkingParty ?
                this.props.pokemon.lackingCoverage : this.props.pokemon.all;
            return toFilter.filter(p => {
                if (isGameFilter(this.props.gameFilter)) {
                    if (!p.games.includes(getArrayFromMap(this.props.gameFilter)[ 0 ])) {
                        return false;
                    }
                }
                for (const generation in this.props.generationFilter) {
                    if (this.props.generationFilter.hasOwnProperty(generation) && this.props.generationFilter[ generation ] === false
                        && (p.hasOwnProperty('generation') && p.generation === Number.parseInt(generation))) {
                        return false;
                    }
                }
                for (const type in this.props.typeFilter) {
                    if (this.props.typeFilter.hasOwnProperty(type) && this.props.typeFilter[ type ] === true &&
                        (p.types[ 0 ] === type || p.types[ 1 ] === type)) return true;
                }
                return false;
            }).sort((a, b) => {
                let filter = gameFilterToAcronym(isGameFilter(this.props.gameFilter));
                if (filter && a.locations.hasOwnProperty(filter) && b.locations.hasOwnProperty(filter)) {
                    return a.locations[ filter ] - b.locations[ filter ];
                } else if (a.hasOwnProperty('pokemonNumber') && b.hasOwnProperty('pokemonNumber')) {
                    if (a.pokemonNumber === b.pokemonNumber) {
                        return a.generation - b.generation;
                    }
                    return a.pokemonNumber - b.pokemonNumber;
                } else return a - b;
            });
        } else return null;
    }

    render() {
        let pokemon = this.filter();
        if (pokemon.length === 0 && !isFilter(this.props)) {
            return <div className='still-loading'>
                <div className='buffer'>
                    <img src='./pokeball.png' alt='pokeball' className='pokeball img-fluid'/>
                </div>
            </div>
        }
        if (pokemon) {
            return (
                <div className='column is-four-fifths text-center'>
                    {
                        pokemon.map((poke, index) => {
                            let className = poke.types.length === 1 ? `circle ${ poke.types[ 0 ] }` : `circle ${ poke.types[ 1 ] }-main ${ poke.types[ 0 ] }-secondary`;
                            const image = <img className={ className }
                                               src={ getImageSource(poke) }
                                               alt={ poke.name } width={ '64px' } height={ '64px' }
                                               onClick={ () => this.onClick(poke, index) }/>;
                            return (<span key={ poke.name } title={ poke.name }>{ image }</span>);
                        }) }
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(View);
