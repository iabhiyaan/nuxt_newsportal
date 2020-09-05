import axios from "axios";

const instance = axios.create({
  baseURL: "http://sajha.webhouse.com.np/api"
});

export default instance;
