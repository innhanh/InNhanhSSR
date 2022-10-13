import axios from "axios";

export const baseURL = "http://localhost:3000/api"

export const axiosClients = axios.create({
    baseURL: baseURL
})