import axios from "axios";
import {
  BACKENDURL,
  DELETEDATA,
  ERROR,
  LOADING,
  LOGIN,
  LOGOUT,
  SUCCESSDATA,
  UPDATEDATA,
  USERURL,
} from "./actionTypes";

const LOADINGFUNCTION = () => {
  return { type: LOADING };
};

const LOGINFUNCTION = (payload) => {
  return { type: LOGIN, payload };
};

const ERRORFUNCTION = (payload) => {
  return { tyep: ERROR, payload };
};

const SUCCESSDATAFUNCTION = (payload) => {
  return { type: SUCCESSDATA, payload };
};

const UPDATEDATAFUNCTION = (id, data) => {
  return { type: UPDATEDATA, payload: { id, data } };
};

const DELETEDATAFUNCTION = (payload) => {
  return { type: DELETEDATA, payload };
};

export const GETDATACALL = async (dispatch, token, user) => {
  dispatch(LOADINGFUNCTION());
  try {
    const request = await axios.get(`${BACKENDURL}/post/${user}`, {
      headers: {
        authorization: token,
      },
    });

    const response = await request.data;

    dispatch(SUCCESSDATAFUNCTION(response));
  } catch (err) {
    dispatch(ERRORFUNCTION(err.message));
  }
};

export const UPDATEDATACALL = async (dispatch, token, id, data) => {
  dispatch(LOADINGFUNCTION());
  try {
    const request = await axios.patch(`${BACKENDURL}/post/update/${id}`, data, {
      headers: {
        authorization: token,
      },
    });

    await request.data;

    dispatch(UPDATEDATAFUNCTION(id, data));
  } catch (err) {
    dispatch(ERRORFUNCTION(err.message));
  }
};

export const DELETEDATACALL = async (dispatch, token, id, data) => {
  dispatch(LOADINGFUNCTION());
  try {
    const request = await axios.delete(
      `${BACKENDURL}/post/delete/${id}`,
      data,
      {
        headers: {
          authorization: token,
        },
      }
    );

    await request.data;

    dispatch(DELETEDATAFUNCTION(id, data));
  } catch (err) {
    dispatch(ERRORFUNCTION(err.message));
  }
};

export const CREATEDATACALL = async (dispatch, token, user, data) => {
  dispatch(LOADINGFUNCTION());
  try {
    const request = await axios.post(`${BACKENDURL}/post/add`, data, {
      headers: {
        authorization: token,
      },
    });

    await request.data;

    dispatch(GETDATACALL(dispatch, token, user));
  } catch (err) {
    dispatch(ERRORFUNCTION(err.message));
  }
};

export const LOGINCALL = async (dispatch, data) => {
  dispatch(LOADINGFUNCTION());
  try {
    const request = await axios.post(`${USERURL}/login`, data);

    const response = await request.data;

    dispatch(LOGINFUNCTION(response));
  } catch (err) {
    dispatch(ERRORFUNCTION());
  }
};

export const LOGOUTCALL = (dispatch) => {
  dispatch({ type: LOGOUT });
};
