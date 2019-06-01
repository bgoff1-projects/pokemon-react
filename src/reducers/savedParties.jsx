const initialState = {
    parties: []
};
const savedParties = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_PARTY':
            if (action.party) {
                console.log('state', state.parties);
                console.log('action', action.party);
                const parties = state.parties;
                parties.push(action.party);
                return {...state, parties};
            }
            return { ...state };
        case 'REMOVE_PARTY':
            if (action.party) {
                const parties = state.parties.filter(item => item !== action.party);
                return {...state, parties };
            }
            return {...state};
        default:
            return {...state};
    }
};

export default savedParties;
