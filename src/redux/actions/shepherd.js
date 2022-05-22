import axios from "axios";
import ShepherdService from "../../services/shepherd.service";
import {
  CREATE_SHEPHERD,
  DELETE_SHEPHERD,
  GET_SHEPHERDS,
  SET_MESSAGE,
  VIEW_SHEPHERD,
} from "./type";

export const getAllShepherds = () => (dispatch) => {
  return ShepherdService.getShepherds().then(
    (response) => {
      dispatch({ type: GET_SHEPHERDS, payload: response.data });
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  );
};
export const getShepherd = (id) => (dispatch) => {
  return ShepherdService.getShepherd(id).then(
    (response) => {
      dispatch({ type: VIEW_SHEPHERD, payload: response.data });
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  );
};

export const saveShepherd = (shepherdData) => (dispatch) => {
  return ShepherdService.createShepherd(shepherdData).then(
    (response) => {
      if (response.data.success) {
        const message = response.data.message;
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        dispatch({ type: CREATE_SHEPHERD, payload: shepherdData });
      }
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    },
    // add a 401 response interceptor
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (401 === error.response.status) {
          console.log(error);
        } else {
          return Promise.reject(error);
        }
      }
    )
  );
};

export const deleteShepherd = (id) => (dispatch) => {
  return ShepherdService.deleteShepherd(id).then(
    (response) => {
      dispatch({ type: DELETE_SHEPHERD, payload: response.data });
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  );
};
