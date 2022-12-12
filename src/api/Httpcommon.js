import axios from "axios";
export default axios.create({
  baseURL: "http://34.201.41.26",
  headers: {
    "Content-type": "application/json",
  },
});
