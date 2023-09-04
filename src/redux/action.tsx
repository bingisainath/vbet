// src/redux/actions.js
export const fetchDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST',
});

export const fetchDataSuccess = (data: any) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

export const fetchDataFailure = (error: any) => ({
  type: 'FETCH_DATA_FAILURE',
  error,
});

export const loginRequest = () => ({
  type: 'LOGIN_REQUEST',
});

export const loginSuccess = (data: any) => ({
  type: 'LOGIN_SUCCESS',
  payload: data,
});

export const loginFailure = (error: any) => ({
  type: 'LOGIN_FAILURE',
  error,
});

export const logoutRequest = () => ({
  type: 'LOGOUT_REQUEST',
});

export const logoutSuccess = (data: any) => ({
  type: 'LOGOUT_SUCCESS',
  payload: data,
});

export const logoutFailure = (error: any) => ({
  type: 'LOGOUT_FAILURE',
  error,
});
