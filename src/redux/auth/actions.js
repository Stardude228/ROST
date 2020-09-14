import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
} from './constants';
import Axios from 'axios';

export const loginUser = ({ email, password }, history) => (dispatch) => {
    dispatch(
        {
            type: LOGIN_USER
        }
    );

    Axios.post(process.env.REACT_APP_API_URL + '/api/auth/login', {
        email,
        password
    })
        .then(({ data: { token } }) => {
            dispatch(loginUserSuccess(token, history))
        })
        .catch((err) => {
            dispatch({
                type: LOGIN_USER_FAILED,
                payload: err
            })
        })
}

const loginUserSuccess = (token, history) => {
    localStorage.setItem('token', token);
    history.replace('/');
    return ({
        type: LOGIN_USER_SUCCESS,
    })
}

//? REGISTER USER
export const registerUser = ({ email, password }, history) => (dispatch) => {
    dispatch(
        {
            type: REGISTER_USER
        }
    );

    Axios.post(process.env.REACT_APP_API_URL + '/api/auth/register', {
        email,
        password
    })
        .then(({ data: { message } }) => {
            dispatch(registerUserSuccess(message, history))
        })
        .catch((err) => {
            dispatch({
                type: REGISTER_USER_FAILED,
                payload: err
            })
        })
}

const registerUserSuccess = (message, history) => {
    localStorage.setItem('message', message)
    history.replace('/auth/login');
    return ({
        type: REGISTER_USER_SUCCESS
    })
}