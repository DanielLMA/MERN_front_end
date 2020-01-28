// import LocalApi from "../apis/local";

export const setAuthToken = (token) => {
    sessionStorage.setItem("token", token);
    
    return {
        type: "AUTH_TOKEN",
        payload: token
    };
}

//? residual from bookmarks react app 

// export const fetchBookmarks =  () => {
//     return async (dispatch, getState) => {
//         let response =  await LocalApi.get("/bookmarks");

//         dispatch({
//             type: "BOOKMARKS_LIST",
//             payload: response.data
//         });
//     }
// }

// export const createBookmark = ({ title, url }) => {
//     return async (dispatch, getState) => {
//         let response = await LocalApi.post("/bookmarks", {title, url});

//         dispatch({
//             type: "BOOKMARKS_LIST",
//             payload: response.data
//         });
//     }
// }











// import axios from "axios";
// import setAuthToken from "../utils/setAuthToken";
// import jwt_decode from "jwt-decode";
// import {
//   GET_ERRORS,
//   SET_CURRENT_USER,
//   USER_LOADING
// } from "./types";
// // Register User
// export const registerUser = (userData, history) => dispatch => {
//   axios
//     .post("/api/users/register", userData)
//     .then(res => history.push("/login")) // re-direct to login on successful register
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };
// // Login - get user token
// export const loginUser = userData => dispatch => {
//   axios
//     .post("/api/users/login", userData)
//     .then(res => {
//       // Save to localStorage
// // Set token to localStorage
//       const { token } = res.data;
//       localStorage.setItem("jwtToken", token);
//       // Set token to Auth header
//       setAuthToken(token);
//       // Decode token to get user data
//       const decoded = jwt_decode(token);
//       // Set current user
//       dispatch(setCurrentUser(decoded));
//     })
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };
// // Set logged in user
// export const setCurrentUser = decoded => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded
//   };
// };
// // User loading
// export const setUserLoading = () => {
//   return {
//     type: USER_LOADING
//   };
// };
// // Log user out
// export const logoutUser = () => dispatch => {
//   // Remove token from local storage
//   localStorage.removeItem("jwtToken");
//   // Remove auth header for future requests
//   setAuthToken(false);
//   // Set current user to empty object {} which will set isAuthenticated to false
//   dispatch(setCurrentUser({}));
// };