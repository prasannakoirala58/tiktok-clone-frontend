import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-back-pk.herokuapp.com/",
});

export default instance;
