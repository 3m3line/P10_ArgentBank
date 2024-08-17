import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    balance: balanceReducer,
    transactions: transactionsReducer
  }
});

export default store;

