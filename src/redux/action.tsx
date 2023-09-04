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
