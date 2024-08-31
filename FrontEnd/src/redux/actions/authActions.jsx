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

    if (!response.ok) {
      let errorMessage = 'Login failed';
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;

      dispatch(loginFailure(errorMessage));
      return; // sort de la fonction comme le résultat de l'erreur est géré
    }

    // Si réponse OK, s'occupe du token
    const data = await response.json();
    const token = data.body.token;
    sessionStorage.setItem('authToken', token);
    
    dispatch(loginSuccess(token));

  } catch (error) {
    // Pour les erreurs de fetch ou de réseau
    console.error('Network error:', error);
    dispatch(loginFailure('Network error: ' + error.message));
  }
};

export const RESET_ERROR = 'RESET_ERROR';

export const resetError = () => ({
  type: RESET_ERROR,
});

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logout = (callback) => (dispatch) => {
  dispatch(logoutRequest()); // Déclenche l'état de chargement
  sessionStorage.removeItem('authToken');
  
  setTimeout(() => {
    dispatch({
      type: LOGOUT,
    });
    if (callback) callback(); // Appelle le callback pour la redirection
  }, 1000); // Délai pour montrer le chargement
};