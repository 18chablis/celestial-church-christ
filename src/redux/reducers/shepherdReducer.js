import {
  CREATE_SHEPHERD,
  DELETE_SHEPHERD,
  GET_SHEPHERDS,
  VIEW_SHEPHERD,
} from "../actions/type";

const initialState = {
  shepherds: [],
  shepherd: {},
  created: false,
};

export default function shepherd(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SHEPHERDS:
      return {
        ...state,
        shepherds: action.payload,
      };
    case VIEW_SHEPHERD:
      return {
        ...state,
        shepherd: action.payload,
      };
    case DELETE_SHEPHERD:
      return {
        ...state,
        shepherd: action.payload,
      };
    case CREATE_SHEPHERD:
      return { ...state, created: true, shepherd: payload.project };
    default:
      return state;
  }
}
