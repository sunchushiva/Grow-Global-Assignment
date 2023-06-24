import {
  DELETEDATA,
  ERROR,
  LOADING,
  LOGIN,
  LOGOUT,
  SUCCESSDATA,
  UPDATEDATA,
} from "./actionTypes";

const intialState = {
  isLoading: false,
  isError: false,
  user: null,
  data: null,
};

export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case LOADING: {
      return { ...state, isLoading: true };
    }
    case ERROR: {
      return { ...state, isError: payload };
    }
    case SUCCESSDATA: {
      return { ...state, isLoading: false, data: payload };
    }
    case UPDATEDATA: {
      const newData = state.data.map((el) => {
        if (el._id === payload.id) {
          return { ...el, ...payload.data };
        }
        return el;
      });
      return { ...state, isLoading: false, data: newData };
    }
    case DELETEDATA: {
      const newData = state.data.filter((el) => {
        return el._id !== payload;
      });
      return { ...state, isLoading: false, data: newData };
    }
    case LOGIN: {
      return { ...state, user: payload };
    }
    case LOGOUT: {
      return { ...state, user: null };
    }
    default: {
      return state;
    }
  }
};
