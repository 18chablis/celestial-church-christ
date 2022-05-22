import axios from "axios";
import ParishService from "../../services/parish.service";
import {
  CREATE_PARISH,
  GET_PARISHES,
  GET_SHEPHERD_NAME,
  SET_MESSAGE,
} from "./type";

export const getAllParishes = () => (dispatch) => {
  return ParishService.getParishes().then(
    (response) => {
      dispatch({ type: GET_PARISHES, payload: response.data });
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

export const getNameOfShepherd = () => (dispatch) => {
  return ParishService.getShepherdName().then(
    (response) => {
      dispatch({ type: GET_SHEPHERD_NAME, payload: response.data });
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

export const saveParish = (parishData) => (dispatch) => {
  return ParishService.createParish(parishData).then(
    (response) => {
      if (response.data.success) {
        const message = response.data.message;
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        dispatch({ type: CREATE_PARISH, payload: parishData });
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
