import {
  FETCH_CHARS_START,
  FETCH_CHARS_SUCCESS,
  FETCH_CHARS_ERROR
} from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log("reducer", action.payload);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARS_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case FETCH_CHARS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload
      };
    case FETCH_CHARS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: "Uh oh... something happened 😵!"
      };
    default:
      return state;
  }
};
