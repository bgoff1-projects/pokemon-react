const initialState = {
    all: [],
    party: []
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
                    const all = state.all;
                    let index = 0;
                    if (all.find(x => x.pokemonNumber === action.pokemon.pokemonNumber)) {
                        return { ...state };
                    }
                    for (const poke of all) {
                        if (poke.number > index && poke.number < action.pokemon.number) {
                            index = state.all.indexOf(poke) + 1;
                            if (index === action.pokemon.number - 1) break;
                        }
                    }
                    all.splice(index, 0, action.pokemon);
                    return { ...state, all };
                } else return { ...state };
            case 'REMOVE_POKEMON':
                if (action.index || action.index === 0) {
                    let all = state.all;
                    all.splice(action.index, 1);
                    return { ...state, all };
                }
                return { ...state };
            default:
                return { ...state };
        }
    }
;

export default pokemon;
