// services/api.js
import axios from "axios";

const API = axios.create({
  baseURL:"https://college-backend-c8av.onrender.com",
});

export default API;