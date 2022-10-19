import axios from "axios";

export const baseURL = "http://localhost:8080/api"

export const axiosClients = axios.create({
    baseURL: baseURL
})