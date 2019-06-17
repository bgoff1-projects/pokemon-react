import types from "../utils/types";

const initialState = {};
for (const type of types) {
    initialState[ type ] = true;
}
const typeFilter = (state = initialState, action) => {
    switch (action.type) {
        case 'FLIP_TYPE_FILTER':
            for (const type in state) {
                if (state.hasOwnProperty(type) && type === action.typeToFlip) {
                    state[ type ] = !state[ type ];
                    break;
                }
            }
            return { ...state };
        case 'FLIP_ALL_TYPE_FILTER_TRUE':
            for (const type in state) {
                if (state.hasOwnProperty(type)) {
                    state[ type ] = true;
                }
            }
            return { ...state };
        case 'FLIP_ALL_TYPE_FILTER_FALSE':
            for (const type in state) {
                if (state.hasOwnProperty(type)) {
                    state[ type ] = false;
                }
            }
            return { ...state };
        case 'RESET_ALL_FILTERS':
            for (const type of types) {
                state[ type ] = true;
            }
            return { ...state };
        default:
            return { ...state };
    }
};

export default typeFilter
