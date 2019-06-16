import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => ({
    pokemon: state.pokemon.all,
});

const Footer = (props) => {
    return props.pokemon.length > 0 ? (<footer className="text-center">
        <div className="columns" style={ { 'position': 'absolute', 'bottom': 0, 'width': '100%' } }>
            <span className="column">&copy; of bgoff1</span>
            <span className="column">Pokémon info and images fetched from PokeAPI</span>
            <span className="column">Pokémon is &copy; of Nintendo, 1995-2019</span>
        </div>
    </footer>) : null;
};

export default connect(mapStateToProps)(Footer);
