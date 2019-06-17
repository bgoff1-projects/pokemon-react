const generations = [ 1, 2, 3, 4, 5, 6, 7 ];

const initialState = {};
for (const type of generations) {
    initialState[ type ] = true;
}
const generationFilter = (state = initialState, action) => {
    switch (action.type) {
        case 'FLIP_GEN_FILTER':
            for (const generation in state) {
                if (state.hasOwnProperty(generation) && generation === action.generationToFlip) {
                    state[ generation ] = !state[ generation ];
                    break;
                }
            }
            return { ...state };
        case 'RESET_ALL_FILTERS':
            for (const type of generations) {
                state[type] = true;
            }
            return { ...state };
        default:
            return { ...state };
    }
};

export default generationFilter;
