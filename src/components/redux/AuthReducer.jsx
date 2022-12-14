import {
  CREATE_POST,
  LOGIN_SUCCESSFULLY,
  SIGN_UP_SUCCESSFULLY,
} from "./Action";

const initialState = {
  SignUpData: {},
  loginData: {},
  postcreate: {},
};
export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    // LOGIN REDUCER TO SAVE USER DATA

    case SIGN_UP_SUCCESSFULLY: {
      return {
        ...state,
        SignUpData: action.data,
      };
    }
    case LOGIN_SUCCESSFULLY: {
      return {
        ...state,
        loginData: action.data,
      };
    }
    case CREATE_POST: {
      return {
        ...state,
        postcreate: action.data.createPost,
      };
    }

    default:
      return state;
  }
}
