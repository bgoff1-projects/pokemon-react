export function getImageSource(poke) {
    return process.env.PUBLIC_URL + `/images/${ poke.pokemonNumber + (poke.name.includes('Alolan ') || poke.name.includes('alolan ') ? '-alola' : '') }.png`
}
export function gameFilterToAcronym(gameFilter) {
    switch (gameFilter) {
        case 'Red | Blue | Yellow':
            return 'RBY';
        case 'Gold | Silver | Crystal':
            return 'GSC';
        case 'Ruby | Sapphire | Emerald':
            return 'RSE';
        case 'Diamond | Pearl':
            return 'DP';
        case 'Platinum':
            return 'PT';
        case 'HeartGold | SoulSilver':
            return 'HGSS';
        case 'Black | White':
            return 'BW';
        case 'Black 2 | White 2':
            return 'BW2';
        case 'X | Y':
            return 'XY';
        case 'Omega Ruby | Alpha Sapphire':
            return 'ORAS';
        case 'Sun | Moon':
            return 'SM';
        case 'Ultra Sun | Ultra Moon':
            return 'USUM';
        default:
            return '';
    }
}

export function getArrayFromMap(map) {
    let result = [];
    for (const i in map) {
        if (map[ i ]) result.push(gameFilterToAcronym(i));
    }
    return result;
}
