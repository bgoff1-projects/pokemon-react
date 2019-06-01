import { connect } from 'react-redux';
import React from "react";
import { removeParty } from "../actions";

const mapStateToProps = state => ({
    savedParties: state.savedParties
});

class Parties extends React.Component {
    constructor(props) {
        super(props);
        for (const party of this.props.savedParties.parties) {
            while (party.length < 6) {
                party.push({ name: 'empty' });
            }
        }
    }

    onClick(partyIndex) {
        this.props.dispatch(removeParty(this.props.savedParties.parties[partyIndex]));
    }


    render() {
        if (this && this.props && this.props.savedParties) {
            const div = <div>&nbsp;</div>;
            const parties = this.props.savedParties.parties;
            return (
                <div>
                    { parties.map((party, partyIndex) => {
                            return <div key={partyIndex}>{party.map((value, index) => {
                                if (value.name === 'empty') {
                                    return <span style={ { 'display': 'inline-block' } } key={ index } onClick={() => this.onClick(partyIndex)}><span
                                        className='empty'/>{ div }{ div }<br/></span>
                                }
                                let className;
                                let types;
                                if (value.types.length === 1) {
                                    className = `circle ${ value.types[ 0 ] }`;
                                    types = (<span className={ 'type ' + value.types[ 0 ] }>
                                                    { value.types[ 0 ] }
                                                </span>);
                                } else {
                                    className = `circle ${ value.types[ 1 ] }-main ${ value.types[ 0 ] }-secondary`;
                                    types = (<span><span className={ 'type ' + value.types[ 1 ] }>
                                                    { value.types[ 1 ] }
                                                    </span><span className={ 'type ' + value.types[ 0 ] }>
                                                    { value.types[ 0 ] }
                                                </span></span>);
                                }
                                return (
                                    <span style={ { 'display': 'inline-block' } } key={ index }>
                                            <img className={ className }
                                                 src={ `data:image/png;base64, ${ value.image }` }
                                                 alt={ value.name } width={ '96px' } height={ '96px' }
                                                 onClick={ () => this.onClick(partyIndex) }/>
                                            <div className='name'>{ value.name }</div>
                                            <div>{ types }</div><br/>
                                        </span>
                                )
                            })}</div>
                        }
                    ) }
                </div>
            );
        }
        return <span/>
    };
}

export default connect(mapStateToProps)(Parties);
