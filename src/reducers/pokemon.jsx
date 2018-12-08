const initialState = {
    pokemon: [],
    party: []
};
const pokemon = (state = initialState, action) => {
        switch (action.type) {
            case 'ADD_POKEMON_BULK':
                if (action.pokemon) {
                    const pokemon = action.pokemon;
                    return {
                        ...state,
                        pokemon
                    };
                } else return { ...state };
            case 'ADD_TO_PARTY':
                if (action.pokemon) {
                    const party = state.party;
                    for (const poke of state.pokemon) {
                        if (poke === action.pokemon) {
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
                    const pokemon = state.pokemon;
                    let index = 0;
                    for (const poke of pokemon) {
                        if (poke.number > index && poke.number < action.pokemon.number) {
                            index = state.pokemon.indexOf(poke) + 1;
                            if (index === action.pokemon.number - 1) break;
                        }
                    }
                    console.log(index);
                    pokemon.splice(index, 0, action.pokemon);
                    return { ...state, pokemon };
                } else return { ...state };
            case 'REMOVE_POKEMON':
                if (action.index || action.index === 0) {
                    let pokemon = state.pokemon;
                    pokemon.splice(action.index, 1);
                    return { ...state, pokemon };
                }
                return { ...state };
            case 'ADD_TYPES_CHART':
                return { ...state };
            default:
                return { ...state };
        }
    }
;

export default pokemon;