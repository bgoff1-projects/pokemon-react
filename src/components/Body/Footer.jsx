import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => ({
    pokemon: state.pokemon.all,
});

const Footer = (props) => {
    return props.pokemon.length > 0 ? (<footer className="bg-dark text-white text-center mt-5">
        <div className="row" style={ { 'marginLeft': '0', 'marginRight': '0' } }>
            <span className="col">&copy; of bgoff1</span>
            <span className="col">Pokémon info and images fetched from PokeAPI</span>
            <span className="col">Pokémon is &copy; of Nintendo, 1995-2019</span>
        </div>
    </footer>) : null;
};

export default connect(mapStateToProps)(Footer);
