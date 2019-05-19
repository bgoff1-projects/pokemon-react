import { connect } from 'react-redux';
import React from "react";
import { getPokemon, addPokemonToParty, removePokemonFromGrid } from "../../actions/index";
import { isGameFilter } from '../../reducers/gameFilter';
import './Pokemon.css';
import { isFilter } from '../../utils/'

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
        props.dispatch(getPokemon());
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

    gameFilterToAcronym(gameFilter) {
        switch (gameFilter) {
            case 'Red | Blue | Yellow':
                return 'RBY';
            case 'Gold | Silver | Crystal':
                return 'GSC';
            case 'Ruby | Sapphire | Emerald':
                return 'RSE';
            case 'Diamond | Pearl':
                return 'DP';
            case 'Platinum':
                return 'PT';
            case 'HeartGold | SoulSilver':
                return 'HGSS';
            case 'Black | White':
                return 'BW';
            case 'Black 2 | White 2':
                return 'BW2';
            case 'X | Y':
                return 'XY';
            case 'Omega Ruby | Alpha Sapphire':
                return 'ORAS';
            case 'Sun | Moon':
                return 'SM';
            case 'Ultra Sun | Ultra Moon':
                return 'USUM';
            default:
                return '';
        }
    }

    getArrayFromMap(map) {
        let result = [];
        for (const i in map) {
            if (map[ i ]) result.push(this.gameFilterToAcronym(i));
        }
        return result;
    }

    filter() {
        if (this.props && this.props.pokemon.all) {
            return this.props.pokemon.all.filter(p => {
                if (isGameFilter(this.props.gameFilter)) {
                    if (!p.games.includes(this.getArrayFromMap(this.props.gameFilter)[ 0 ])) {
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
                let filter = this.gameFilterToAcronym(isGameFilter(this.props.gameFilter));
                if (filter && a.locations.hasOwnProperty(filter) && b.locations.hasOwnProperty(filter)) {
                    return a.locations[ filter ] - b.locations[ filter ];
                }
                else if (a.hasOwnProperty('pokemonNumber') && b.hasOwnProperty('pokemonNumber')) {
                    return a.pokemonNumber - b.pokemonNumber;
                }
                else return a - b;
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
                <div className='col-md-8 text-center'>
                    {
                        pokemon.map((poke, index) => {
                            let className = poke.types.length === 1 ? `circle ${poke.types[ 0 ]}` : `circle ${poke.types[ 1 ]}-main ${poke.types[ 0 ]}-secondary`;
                            const image = <img className={ className }
                                               src={ `data:image/png;base64, ${poke.image}` }
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
