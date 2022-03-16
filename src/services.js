import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.aniapi.com"
})

export const api = {
  get(endpoint){
    return axiosInstance.get(endpoint)
  }
}