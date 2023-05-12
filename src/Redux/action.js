import axios from "axios";
import * as types from "./actionType";

export const userCardRequest = () => ({
    type: types.USERS_CARD_REQUEST
});

export const userCardSuccess = (payload) => ({
    type: types.USERS_CARD_SUCCESS,
    payload
});

export const userCardError = () => ({
    type: types.USERS_CARD_ERROR,
});




// export const getAllUsers = (dispatch) => {
//     dispatch(userCardRequest());
//     axios.get("http://localhost:8080/users")
//         .then((res) => {
//             dispatch(userCardSuccess(res.data))
//         })
//         .catch((err) => {
//             dispatch(userCardError())
//         })
// }





export const getAllUsers=(params)=>async (dispatch)=>{
    dispatch(userCardRequest())
    try {
        // const r = await axios.get(`http://localhost:8080/users`,params)
        const r = await axios.get(`https://mock4-server-uoq7.onrender.com/users`,params)
        dispatch(userCardSuccess(r.data))
    } catch (err) {
        dispatch(userCardError())
    }
    
}






// export const setPage = (page) => {
//     return {
//       type: 'SET_PAGE',
//       payload: page
//     };
//   };



