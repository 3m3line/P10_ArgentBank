import {UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE} from '../actions/updateUserActions' ;

const initialState = {
    user: null,
    loading: false,
    error: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_USER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          loading: false,
          error: null
        };
  
      case UPDATE_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;