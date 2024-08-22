const API_URL = import.meta.env.VITE_API_URL;

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (token, user) => ({ type: LOGIN_SUCCESS, payload: {token, user} });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await fetch(`${API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    console.log('Response:', response);

    if (response.ok) {
      const data = await response.json();
      console.log('Received data:', data);

      const token = data.body.token;
      sessionStorage.setItem('authToken', token);
      
      dispatch(loginSuccess(token));

    }
    else {
      const errorData = await response.json();
      console.log('error:', erreur);
      dispatch(loginFailure(errorData.message || 'Login failed'));
    }
  } catch (error) {
    console.error('Network error:', error);

    // Dispatch failure action
    dispatch(loginFailure(error.message));
  }
};

export const logout = () => {
  sessionStorage.removeItem('authToken');
  window.location.href = '/';
  return {
    type: LOGOUT,
  };
};
  