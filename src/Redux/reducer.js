import * as types from "./actionType";

const initialState = {
    users: [],
    loading: false,
    error: ''
};




const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.USERS_CARD_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.USERS_CARD_SUCCESS:
            return {
                ...state,
                loading: false,
                users: payload
            };
        case types.USERS_CARD_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return state;
    }
};

export { reducer };














// const initialState = {
//     page: 1, 
//     cards: [], 
//     cardsPerPage: 20
// };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_PAGE':
//             return {
//                 ...state,
//                 page: action.payload
//             };
        
//         default:
//             return state;
//     }
// };

// export { reducer };
