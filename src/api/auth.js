import axios from "axios";

export default axios.create({
  baseURL: "https://covidauthapi.herokuapp.com",
});
