
import {combineReducers} from 'redux';

// Initial state for API data
const initialApiDataState = {
  loading: false,
  data: '',
  error: '',
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

const rootReducer = combineReducers({
  apiData: apiDataReducer,
  // Add other reducers here
});

export default rootReducer;
