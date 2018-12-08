import { connect } from 'react-redux';
import React from "react";
import { flipTypeFilter } from "../../actions";
import './header.css';
const mapStateToProps = state => ({
    pokemon: state.pokemon,
    selected: state.typeFilter
});

class LeftHeader extends React.Component {
    count() {
        let count = 0;
        for (const checked in this.props.selected) {
            if (this.props.selected.hasOwnProperty(checked) && this.props.selected[checked] === true) {
                count++;
            }
        }
        if (count === 18) return 'All Types Selected';
        return count + ' Selected';
    }

    getNames() {
        let result = [];
        for (const checked in this.props.selected) {
            if (this.props.selected.hasOwnProperty(checked)) result.push(checked);
        }
        return result;
    }

    check(checkedName) {
        for (const checkBox in this.props.selected) {
            if (checkBox === checkedName && this.props.selected[checkedName] === true) {
                return true;
            }
        }
        return false;
    }

    onChange(type) {
        this.props.dispatch(flipTypeFilter(type));
    }

    render() {
        if (this.props.pokemon.all && this.props.pokemon.all.length !== 0) {
            return (
                <div className='col-md-2'>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {<span>{this.count()}</span>}
                        </button>
                        <div className="dropdown-menu">
                            {this.getNames().map(val =>
                                <div key={ val } className='ml-4'>
                                    <label className='checkbox'>
                                        <input type='checkbox' value={val} onChange={() => this.onChange(val)} defaultChecked={this.check(val)} />
                                        { val }
                                    </label>
                                </div>)}
                        </div>
                    </div>
                </div>
            );
        } else return null;
    }
}

export default connect(mapStateToProps)(LeftHeader);
