import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import updateUserReducer  from './reducers/updateUserReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    updateUser : updateUserReducer ,
  }
});

export default store;


