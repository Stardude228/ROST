import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILED, CLEAR_ERROR, } from './constants'

const INIT_STATE = {
    loading: false,
    err: null,
    isAuth: !!localStorage.getItem("token")
}


const AuthReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case REGISTER_USER:
        case LOGIN_USER:
            return { ...state, loading: true };

        case LOGIN_USER_SUCCESS:
            return { ...state, isAuth: true, loading: false, err: null };

        case REGISTER_USER_SUCCESS:
            return { ...state, loading: false, err: null }

        case REGISTER_USER_FAILED:
        case LOGIN_USER_FAILED:
            return { ...state, isAuth: false, loading: false, err: action.payload };

        case CLEAR_ERROR:
            return { ...state, err: null };

        default:
            return state
    }
}

export default AuthReducer


