import {
  CREATE_PARISH,
  DELETE_PARISH,
  GET_PARISHES,
  GET_SHEPHERD_NAME,
  VIEW_PARISH,
} from "../actions/type";

const initialState = {
  parishes: [],
  shepherd_name: [],
  parish: {},
  created: false,
};

export default function parish(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PARISHES:
      return {
        ...state,
        parishes: action.payload,
      };
    case GET_SHEPHERD_NAME:
      return {
        ...state,
        shepherd_name: action.payload,
      };
    case VIEW_PARISH:
      return {
        ...state,
        parish: action.payload,
      };
    case DELETE_PARISH:
      return {
        ...state,
        parish: action.payload,
      };
    case CREATE_PARISH:
      return { ...state, created: true, parish: payload.project };
    default:
      return state;
  }
}
