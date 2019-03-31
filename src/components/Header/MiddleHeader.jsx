import { connect } from 'react-redux';
import React from "react";
import { flipGameFilter } from "../../actions";

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    games: state.gameFilter
});

class MiddleHeader extends React.Component {

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

    onChange(type) {
        this.props.dispatch(flipGameFilter(type));
    }

    render() {
        if (this.props.pokemon.all && this.props.pokemon.all.length !== 0) {
            return (
                <div className='col-md-4 text-center'>
                    <button className="btn btn-secondary dropdown-toggle" type="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        { <span>{this.count()}</span> }
                    </button>
                    <div className="dropdown-menu" style={ { 'right': 0, 'left': 0 } }>
                        { this.getNames().map(val =>
                            <div key={ val } className='ml-4'>
                                <label>
                                <input type='checkbox' value={ val } onChange={ () => this.onChange(val) }
                                    checked={this.check(val)} />
                                { val }
                                </label>
                            </div>) }
                    </div>
                </div>
            );
        } else return null;
    }
}

export default connect(mapStateToProps)(MiddleHeader);
