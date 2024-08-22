const API_URL = import.meta.env.VITE_API_URL;

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const updateUserRequest = () => ({ type: UPDATE_USER_REQUEST });
export const updateUserSuccess = (user) => ({ type: UPDATE_USER_SUCCESS, payload: user });
export const updateUserFailure = (error) => ({ type: UPDATE_USER_FAILURE, payload: error });

export const updateUser = (userName) => async (dispatch, getState) => {
  dispatch(updateUserRequest());

  const token = getState().auth.token; 

  try {
    const response = await fetch(`${API_URL}/user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.token}`, 
      },
      body: JSON.stringify({ userName }),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch(updateUserSuccess(data.body));
    } else {
      dispatch(updateUserFailure(data.message || 'Failed to update user data'));
    }
  } catch (error) {
    dispatch(updateUserFailure(error.message));
  }
};
