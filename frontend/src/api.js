import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", //https://taupe-frangollo-968e96.netlify.app/
});

export const getCars = () => API.get("/api/cars");

export const addCar = (data) =>
  API.post("/api/cars", data, {
    headers: {
      Authorization: "Bearer 123admintoken",
    },
  });
