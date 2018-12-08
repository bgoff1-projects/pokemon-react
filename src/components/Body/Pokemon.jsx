import { connect } from 'react-redux';
import React from "react";
import { getPokemon, addPokemonToParty, removePokemonFromGrid } from "../../actions/index";
import './Pokemon.css';

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    party: state.party
});

class View extends React.Component {
    constructor(props) {
        super(props);
        props.dispatch(getPokemon());
    }

    onClick(pokemon, index) {
        if (this.props.pokemon.party.length !== 6) {
            this.props.dispatch(addPokemonToParty(pokemon));
            this.props.dispatch(removePokemonFromGrid(index));
        }
    }

    render() {
        const pokemon = this.props.pokemon.pokemon;
        if (pokemon) {
            let i = 1;
            return (
                <div className='col-md-8 text-center'>
                    {
                        pokemon.map((poke, index) => {
                            let result;
                            let className;
                            if (poke.types.length === 1) {
                                className = `circle ${poke.types[ 0 ]}`;
                            } else {
                                className = `circle ${poke.types[ 1 ]}-main ${poke.types[ 0 ]}-secondary`;
                            }
                            const image = <img className={ className }
                                               src={ `data:image/png;base64, ${poke.image}` }
                                               alt={ poke.name } width={ '52px' } height={ '52px' }
                                               onClick={ () => this.onClick(poke, index) }/>;
                            if (i % 15 === 0) {
                                result = (<span key={ i } title={ poke.name }>{ image }</span>);
                            } else {
                                result = (<span key={ i } title={ poke.name }>{ image }</span>);
                            }
                            i++;
                            return result;
                        }) }
                </div>
            );
        }
    }

}

export default connect(mapStateToProps)(View);