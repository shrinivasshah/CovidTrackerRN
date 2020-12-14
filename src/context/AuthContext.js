import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authApi from "../api/auth";
import * as RootNavigation from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { ...state, token: action.payload };
    case "signout":
      return { token: null, errorMessage: "" };
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
    RootNavigation.navigate("LoginScreen");
    console.log(response.data);
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up!",
    });
  }
};

const signout = (dispatch) => async () => {
  // const response = await authApi.post("/auth/token/logout");
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  RootNavigation.navigate("LoginScreen");
};
const signin = (dispatch) => async ({ username, password }) => {
  try {
    const response = await authApi.post("/auth/token/login", {
      username,
      password,
    });
    await AsyncStorage.setItem("token", response.data.auth_token);
    dispatch({ type: "signin", payload: response.data.auth_token });
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in!",
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
