
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL,
  headers:{
    Accept:"application/json",
    "Concept-Type":"application/json",
  },
})

export const formInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default instance;
const baseURL = "https://osbaseleaf-api.andolasoft.co.in";
