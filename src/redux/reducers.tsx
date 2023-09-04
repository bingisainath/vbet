import {combineReducers} from 'redux';

// Initial state for API data
const initialApiDataState = {
  loading: false,
  data: '',
  error: '',
  isLogin: false,
};

const apiDataReducer = (state = initialApiDataState, action: any) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        data: '',
        error: '',
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
};

const loginReducer = (state = initialApiDataState, action: any) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
        isLogin: false,
        error: '',
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: action.payload,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        isLogin: null,
        error: action.error,
      };
    default:
      return state;
  }
};

const logoutReducer = (state = initialApiDataState, action: any) => {
  switch (action.type) {
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        loading: true,
        isLogin: false,
        error: '',
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: false,
        error: null,
      };
    case 'LOGOUT_FAILURE':
      return {
        ...state,
        loading: false,
        isLogin: null,
        error: action.error,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  apiData: apiDataReducer,
  login: loginReducer,
  // Add other reducers here
});

export default rootReducer;
