import { connect } from 'react-redux';
import React from "react";
import { clearParty, flipGameFilter } from "../../../actions";

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    games: state.gameFilter
});

class GameFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    count() {
        let count = 0;
        for (const game in this.props.games) {
            if (this.props.games.hasOwnProperty(game) && this.props.games[ game ] === true) {
                return game;
            }
        }
        if (count === 0) return 'All Games';
    }

    getNames() {
        let result = [];
        for (const checked in this.props.games) {
            if (this.props.games.hasOwnProperty(checked)) result.push(checked);
        }
        return result;
    }

    check(checkedName) {
        for (const checkBox in this.props.games) {
            if (checkedName === checkBox && this.props.games[ checkBox ] === true) {
                return true;
            }
        }
        return false;
    }

    findToggledGame() {
        for (const game in this.props.games) {
            if (this.props.games[ game ]) {
                return game;
            }
        }
    }

    onChange(type) {
        if (this.findToggledGame() !== type && this.props.pokemon.party.length > 0) {
            this.props.dispatch(clearParty(this.props.pokemon.party));
        }
        this.props.dispatch(flipGameFilter(type));
    }

    render() {
        if (this.props.pokemon.all && this.props.pokemon.all.length !== 0) {
            return (
                <div className='navbar-item has-dropdown is-hoverable'>
                    <span className="navbar-link" onClick={ () => this.setState({ active: !this.state.active }) }>
                        { this.count() }
                    </span>
                    <div className={ this.state.active ? 'navbar-dropdown is-active' : 'navbar-dropdown navbar-menu' }>
                        { this.getNames().map(val =>
                            <div key={ val }>
                                <label className='navbar-item'>
                                    <input type='checkbox' value={ val } onChange={ () => this.onChange(val) }
                                           checked={ this.check(val) }/>
                                    { val }
                                </label>
                            </div>) }
                    </div>
                </div>
            );
        } else return null;
    }
}

export default connect(mapStateToProps)(GameFilter);
