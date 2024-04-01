import axios from "axios";

export const apiClient = axios.create({ baseURL: "http://ec2-13-125-106-127.ap-northeast-2.compute.amazonaws.com:8080/" });