import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE === "development" ? "https://linkedin-clone-zqyr.onrender.com/api/v1" : "/api/v1",
	withCredentials: true,
});
