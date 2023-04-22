import axios from "axios";
const instance = axios.create({
  //baseURL:"https://narasimha-epam.herokuapp.com/"
  baseURL: "https://whvw13-3001.csb.app/",
  headers: {
    authtoken: localStorage.getItem("authtoken"),
  },
});
export default instance;
