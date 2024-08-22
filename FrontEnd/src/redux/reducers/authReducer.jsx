import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/authActions';
import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from '../actions/userInfoActions';

const initialState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,  // Stocker les informations de l'utilisateur
      };
    case LOGIN_FAILURE:
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};

export default authReducer;

  