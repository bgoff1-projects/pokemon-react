import React from 'react';
import { connect } from "react-redux";
import { updateSearchFilter } from "../../../actions";

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    selected: state.typeFilter
});

class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            value: ''
        };
        this.props.dispatch(updateSearchFilter(this.state.value));
    }

    render() {
        return (
            <div className='navbar-item has-dropdown is-hoverable'>
                    <span className="navbar-link" onClick={ () => this.setState({ active: !this.state.active }) }>
                        { this.state.value ? `Searching: ${this.state.value}` : 'Search Filter' }
                    </span>
                <div className={ this.state.active ? 'navbar-dropdown is-active' : 'navbar-dropdown navbar-menu' }>
                    <input className='input' type='text' defaultValue={ this.state.value }
                           onKeyUp={ (event) => {
                               console.log(event.target.value);
                               this.setState({ value: event.target.value });
                               this.props.dispatch(updateSearchFilter(event.target.value));
                           } }
                           style={ { 'marginLeft': '5%', 'width': '90%' } }
                    placeholder='Pikachu, Eevee,'/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SearchFilter);
