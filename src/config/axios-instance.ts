import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI0IiwidW5pcXVlX25hbWUiOiJ0by5vZGV5ZW1pQGdtYWlsLmNvbSIsIm5iZiI6MTc2MTc3NjA2NSwiZXhwIjoxNzYxNzc5NjY1LCJpYXQiOjE3NjE3NzYwNjV9.eh5rfBj58NB-D-G1vcUQCIzCApf0qhdW3GFBL7Exu6I";
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});
