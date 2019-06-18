import { getPartyTypes, isAPartyMemberStrong } from '../utils/';

const insertPokemon = (state, pokemon) => {
    const all = state.all;
    let index = 0;
    if (all.find(x => x.name === pokemon.name)) {
        return { ...state };
    }
    for (const poke of all) {
        if (poke.number > index && poke.number < pokemon.number) {
            index = state.all.indexOf(poke) + 1;
            if (index === pokemon.number - 1) break;
        }
    }
    all.splice(index, 0, pokemon);
    return { ...state, all };
};

const initialState = {
    all: [],
    party: [],
    checkingParty: false,
    lackingCoverage: [],
    searchFilter: ''
};
const pokemon = (state = initialState, action) => {
        switch (action.type) {
            case 'ADD_POKEMON_BULK':
                if (action.pokemon) {
                    const all = action.pokemon;
                    return {
                        ...state,
                        all
                    };
                } else return { ...state };
            case 'ADD_TO_PARTY':
                if (action.pokemon) {
                    const party = state.party;
                    for (const poke of state.all) {
                        if (poke.name === action.pokemon.name) {
                            party.push(poke);
                            break;
                        }
                    }
                    return { ...state, party };
                } else return { ...state };
            case 'REMOVE_FROM_PARTY':
                if (action.index || action.index === 0) {
                    const party = state.party;
                    party.splice(action.index, 1);
                    return { ...state, party };
                }
                return { ...state };
            case 'ADD_POKEMON':
                if (action.pokemon) {
                    return insertPokemon(state, action.pokemon);
                } else return { ...state };
            case 'REMOVE_POKEMON':
                if (action.index || action.index === 0) {
                    let all = state.all;
                    all.splice(action.index, 1);
                    return { ...state, all };
                }
                return { ...state };
            case 'CHECK_PARTY':
                if (state.checkingParty) {
                    state.checkingParty = false;
                    state.lackingCoverage = [];
                    return { ...state };
                }
                if (state.party.length === 0) {
                    return { ...state };
                }
                state.checkingParty = true;
                let partyTypes = getPartyTypes(state.party);
                for (const pokemon of state.all) {
                    if (!isAPartyMemberStrong(partyTypes, pokemon)) {
                        state.lackingCoverage.push(pokemon);
                    }
                }
                return { ...state };
            case 'RESET_ALL_FILTERS':
                state.checkingParty = false;
                state.lackingCoverage = [];
                state.searchFilter = '';
                return { ...state };
            case 'CLEAR_PARTY':
                state.party = [];
                for (const partyMember of action.members) {
                    state = insertPokemon(state, partyMember);
                }
                return { ...state };
            case 'UPDATE_SEARCH_FILTER':
                state.searchFilter = action.searchFilter;
                return { ...state };
            default:
                return { ...state };
        }
    }
;

export default pokemon;
