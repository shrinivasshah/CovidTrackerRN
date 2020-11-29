import createDataContext from "./createDataContext";
import authApi from "../api/auth";
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ username, email, password }) => {
  try {
    const response = await authApi.post("/auth/users/", {
      username,
      email,
      password,
    });
    console.log(response.data);
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up!",
    });
  }
};

const signout = (dispatch) => () => {};
const signin = (dispatch) => async ({ username, password }) => {
  try {
    const response = await authApi.post("/auth/token/login", {
      username,
      password,
    });
    console.log(response.data);
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up!",
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false, errorMessage: "" }
);
