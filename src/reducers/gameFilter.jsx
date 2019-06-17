export const games = [
    'Red | Blue | Yellow',
    'Gold | Silver | Crystal',
    'Ruby | Sapphire | Emerald',
    'Diamond | Pearl',
    'Platinum',
    'HeartGold | SoulSilver',
    'Black | White',
    'Black 2 | White 2',
    'X | Y',
    'Omega Ruby | Alpha Sapphire',
    'Sun | Moon',
    'Ultra Sun | Ultra Moon'
];

const initialState = {};

for (const type of games) {
    initialState[ type ] = false;
}

export function isGameFilter(state) {
    for (const filter in state) {
        if (state[ filter ]) return filter;
    }
    return false;
}

const gameFilter = (state = initialState, action) => {
    switch (action.type) {
        case 'FLIP_GAME_FILTER':
            const filter = isGameFilter(state);
            if (filter) {
                for (const game in state) {
                    state[ game ] = false;
                }
                if (filter !== action.gameToFlip) {
                    for (const game in state) {
                        state[ game ] = game === action.gameToFlip;
                    }
                }
            } else {
                for (const game in state) {
                    state[ game ] = game === action.gameToFlip;
                }
            }
            return { ...state };
        case 'SET_ALL_GAMES_OFF':
            for (const game in state) {
                if (state.hasOwnProperty(game)) {
                    state[ game ] = false;
                }
            }
            return { ...state };
        case 'RESET_ALL_FILTERS':
            for (const type of games) {
                state[ type ] = false;
            }
            return { ...state };
        default:
            return { ...state };
    }
};

export default gameFilter;
