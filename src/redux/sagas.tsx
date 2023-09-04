// src/redux/sagas.js
import {call, delay, put, race, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {all} from 'redux-saga/effects';

function* fetchData() {
  try {
    //'https://api.dictionaryapi.dev/api/v2/entries/en/'+item;
    const response = yield call(axios.get, 'https://api.dictionaryapi.dev/api/v2/entries/en/car');
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILURE', error });
  }
}

function* login() {
  try {
    //'https://api.dictionaryapi.dev/api/v2/entries/en/'+item;
    // const response = yield call(axios.get, 'https://api.dictionaryapi.dev/api/v2/entries/en/car');
    yield put({ type: 'LOGIN_SUCCESS', payload: true });
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', error });
  }
}

function* logout() {
  try {
    //'https://api.dictionaryapi.dev/api/v2/entries/en/'+item;
    // const response = yield call(axios.get, 'https://api.dictionaryapi.dev/api/v2/entries/en/car');
    yield put({ type: 'LOGIN_SUCCESS', payload: false });
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', error });
  }
}

function* watchFetchData() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchData);
  yield takeEvery('LOGIN_REQUEST', login);
  yield takeEvery('LOGOUT_REQUEST', logout);
}

// Root saga
export default function* rootSaga() {
  // yield [
  //   watchFetchData(),
  //   // Add other sagas here
  // ];
  yield all([watchFetchData()]);
}
