import * as types from "./actionType";

// const initialState = {
//     users: [],
//     loading: false,
//     error: ''
// };


const initialState = {
    users: [],
    loading: false,
    error: '',
    pageFilter: {
        pageNumber: 1,
        limit: 20,
        totalPages: 0,
    }
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