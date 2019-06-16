import React from 'react';
import { connect } from 'react-redux';
import TypeFilter from './TypeFilter';
import CoverageFilter from './CoverageFilter';
import GameFilter from './GameFilter';
import GenerationFilter from './GenerationFilter';
import { isFilter } from '../../../utils';
import PartiesLink from "./PartiesLink";

const mapStateToProps = state => ({
    all: state.pokemon,
    party: state.party,
    selected: state.typeFilter,
    generations: state.generationFilter
});

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    render() {
        if (!isFilter(this.props) && !this.props.all.all.length && !this.props.all.party.length) {
            return <span/>;
        }
        return (
            <nav role="navigation" className="navbar">
                <div className='navbar-brand'>
                    <span className='navbar-item'>
                        <img src='../pokeball.png' alt='pokeball'/>
                        <span style={ { 'paddingLeft': '0.5em' } }>Pokemon Team Builder</span>
                    </span>
                    <button className={ this.state.active ? 'navbar-burger button is-active' : 'navbar-burger button' }
                            aria-label="menu"
                            aria-expanded="false" onClick={ () => this.setState({ active: !this.state.active }) }>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </button>
                </div>
                <div id="header" className={ this.state.active ? 'navbar-menu is-active' : 'navbar-menu' }>
                    <TypeFilter/>
                    <CoverageFilter />
                    <GameFilter />
                    <GenerationFilter />
                    <PartiesLink/>
                </div>
            </nav>
        );
    }
}

export default connect(mapStateToProps)(Navbar);
