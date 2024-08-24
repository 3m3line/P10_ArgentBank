const API_URL = import.meta.env.VITE_API_URL;

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
export const fetchUserSuccess = (user) => ({ type: FETCH_USER_SUCCESS, payload: user });
export const fetchUserFailure = (error) => ({ type: FETCH_USER_FAILURE, payload: error });

export const fetchUser = () => async (dispatch, getState) => {
  dispatch(fetchUserRequest());

  const token = getState().auth.token;
  console.log('token:', token);

  try {
    const response = await fetch(`${API_URL}/user/profile`, {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Authorization': `Bearer ${token.token}`, 
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(fetchUserSuccess(data.body));
    } else {
      const errorData = await response.json();
      dispatch(fetchUserFailure(errorData.message || 'Failed to fetch user data'));
    }
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};
