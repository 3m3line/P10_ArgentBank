import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/authActions';

const initialState = {
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      console.log('LOGIN_SUCCESS: Token stored:', action.payload);
      return { ...state, loading: false, token: action.payload };
    case LOGIN_FAILURE:
      console.log('LOGIN_FAILURE:', action.payload);
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;

  