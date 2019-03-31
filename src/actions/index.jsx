import { url } from "../utils";

export const addPokemonToStore = pokemon => ({
    type: 'ADD_POKEMON_BULK',
    pokemon
});

export const addPokemonToParty = pokemon => ({
    type: 'ADD_TO_PARTY',
    pokemon,
});

export const removePokemonFromParty = index => ({
    type: 'REMOVE_FROM_PARTY',
    index
});

export const addPokemonToGrid = pokemon => ({
    type: 'ADD_POKEMON',
    pokemon
});

export const removePokemonFromGrid = index => ({
    type: 'REMOVE_POKEMON',
    index
});

export const flipTypeFilter = typeToFlip => ({
    type: 'FLIP_TYPE_FILTER',
    typeToFlip
});

export const flipGenerationFilter = generationToFlip => ({
    type: 'FLIP_GEN_FILTER',
    generationToFlip
});

export const flipGameFilter = gameToFlip => ({
   type: 'FLIP_GAME_FILTER',
   gameToFlip
});

export const turnOffAllGames = () => ({
    type: 'SET_ALL_GAMES_OFF'
});

export const flipAllTypesTrue = () => ({
    type: 'FLIP_ALL_TYPE_FILTER_TRUE'
});

export const flipAllTypesFalse = () => ({
    type: 'FLIP_ALL_TYPE_FILTER_FALSE'
});

export function getPokemon() {
    return dispatch => {
        return fetch(`${url}/pokemon`)
            .then(response => response.json())
            .then(json => dispatch(addPokemonToStore(json)))
    }
}
