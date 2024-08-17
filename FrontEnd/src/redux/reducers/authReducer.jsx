const initialState = {
    user: {},
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USER':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  