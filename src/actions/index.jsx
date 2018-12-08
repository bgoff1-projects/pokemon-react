let nextTodoId = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

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


export function getPokemon() {
    return dispatch => {
        return fetch('http://localhost:8000/pokemon')
            .then(response => response.json())
            .then(json => dispatch(addPokemonToStore(json)))
    }
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};