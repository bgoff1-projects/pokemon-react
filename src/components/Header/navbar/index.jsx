import React from 'react';
import { connect } from 'react-redux';
import TypeFilter from './TypeFilter';
import GenerationFilter from './GenerationFilter';
import GameFilter from './GameFilter';
import CoverageFilter from './CoverageFilter';
import { isFilter } from '../../../utils';

const mapStateToProps = state => ({
    all: state.pokemon,
    party: state.party,
    selected: state.typeFilter,
    generations: state.generationFilter
});

class Navbar extends React.Component {
    render() {
        if (!isFilter(this.props) && !this.props.all.all.length && !this.props.all.party.length) {
            return <span/>;
        }
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse row" id="navbarCollapse">
                    <TypeFilter />
                    <CoverageFilter />
                    <GameFilter />
                    <GenerationFilter />
                </div>
            </nav>
        );
    }
}

export default connect(mapStateToProps)(Navbar);
