import { createMap } from './map';

const env = 'PROD';

let URL = '';
if (env === 'DEV') {
    URL = 'http://localhost:8000';
} else {
    URL = 'https://pure-caverns-33114.herokuapp.com';
}
export const url = URL;

const map = createMap();

export function isStrongAgainst(pokemon, type) {
    for (const pokemonType of pokemon.types) {
        if (map.get(pokemonType).has(type) && map.get(pokemonType).get(type) === 2) return true;
    }
}

export function isWeakAgainst(pokemon, type) {
    if (pokemon.types.length === 1) {
        if (map.get(type).has(pokemon.types[ 0 ]) && map.get(type).get(pokemon.types[ 0 ]) === 2) {
            return true;
        }
    } else {
        if (map.get(type).has(pokemon.types[0])) {
            const type1 = map.get(type).get(pokemon.types[0]);
            if (map.get(type).has(pokemon.types[1])) {
                const type2 = map.get(type).get(pokemon.types[1]);
                if (type1 * type2 >= 2) return true;
            } else if (type1 === 2) return true;
        } else if (map.get(type).has(pokemon.types[1])) {
            if (map.get(type).get(pokemon.types[1]) === 2) return true;
        }
    }
    return false;
}
