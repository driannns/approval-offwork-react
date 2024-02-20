import {
  FETCH_OFFWORK_FAILURE,
  FETCH_OFFWORK_REQUEST,
  FETCH_OFFWORK_SUCCESS,
} from "./action";

const initialState = {
  message: null,
  loading: false,
  data: [],
  error: null,
};

export const offworkReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OFFWORK_REQUEST:
      return {
        ...state,
        message: null,
        loading: true,
        error: null,
      };
    case FETCH_OFFWORK_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        loading: false,
        data: action.payload.data.data,
        error: null,
      };
    case FETCH_OFFWORK_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload.message,
      };
    default:
      return state;
  }
};
