import { connect } from 'react-redux';
import React from "react";
import { flipGenerationFilter } from "../../actions";

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    generations: state.generationFilter
});

class LeftHeader extends React.Component {
    count() {
        let count = 0;
        for (const checked in this.props.generations) {
            if (this.props.generations.hasOwnProperty(checked) && this.props.generations[ checked ] === true) {
                count++;
            }
        }
        if (count === 7) return 'All Generations';
        return count + ' Selected';
    }

    getNames() {
        let result = [];
        for (const checked in this.props.generations) {
            if (this.props.generations.hasOwnProperty(checked)) result.push(checked);
        }
        return result;
    }

    static addRegionalName(gen) {
        switch (Number.parseInt(gen)) {
            case 1:
                return `${gen}: Kanto`;
            case 2:
                return `${gen}: Johto`;
            case 3:
                return `${gen}: Hoenn`;
            case 4:
                return `${gen}: Sinnoh`;
            case 5:
                return `${gen}: Unova`;
            case 6:
                return `${gen}: Kalos`;
            case 7:
                return `${gen}: Alola`;
            default:
                return gen;
        }
    }

    check(checkedName) {
        for (const checkBox in this.props.generations) {
            if (checkBox === checkedName && this.props.generations[ checkedName ] === true) {
                return true;
            }
        }
        return false;
    }

    onChange(type) {
        this.props.dispatch(flipGenerationFilter(type));
    }

    render() {
        if (this.props.pokemon.all && this.props.pokemon.all.length !== 0) {
            return (
                <div className='col-md-3'>
                    <div className="dropdown float-right">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            { <span>{ this.count() }</span> }
                        </button>
                        <div className="dropdown-menu">
                            { this.getNames().map(val =>
                                <div key={ val } className='ml-4'>
                                    <label className='checkbox'>
                                        <input type='checkbox' value={ val } onChange={ () => this.onChange(val) }
                                               defaultChecked={ this.check(val) }/>
                                        { LeftHeader.addRegionalName(val) }
                                    </label>
                                </div>) }
                        </div>
                    </div>
                </div>
            );
        } else return null;
    }
}

export default connect(mapStateToProps)(LeftHeader);
