import axios from "axios";
import * as types from "./actionType";
// import data from "../../db.json"

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



// export const getAllUsers =(param,limit,page,query)=>(dispatch)=>{
//     console.log(limit);
//     dispatch(userCardRequest())
//     // axios.get(`https://snapdeal-productapi.onrender.com/mens?_page=${page}&_limit=${limit}&q=${query}`, param)
//     axios.get(`http://localhost:8080/users?_page=${page}&_limit=${limit}`, param)
//     .then((res)=> {
        
//         dispatch(userCardSuccess(res.data))
//         console.log(res.data)
//     })
//     .catch((err)=> dispatch(userCardError()))
// }



export const getAllUsers=(params)=>async (dispatch)=>{
    dispatch(userCardRequest())
    try {
        const r = await axios.get(`http://localhost:8080/users`,params)
        dispatch(userCardSuccess(r.data))
    } catch (err) {
        dispatch(userCardError())
    }
    
}