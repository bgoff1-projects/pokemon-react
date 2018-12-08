import types from "../utils/types";

const initialState = {};
for (const type of types) {
    initialState[type] = true;
}
const typeFilter = (state = initialState, action) => {
    switch (action.type) {
        case 'FLIP_TYPE_FILTER':
            for (const type in state) {
                if (state.hasOwnProperty(type) && type === action.typeToFlip) {
                    state[type] = !state[type];
                    break;
                }
            }
            return {...state};
        default:
            return {...state};
    }
};

export default typeFilter