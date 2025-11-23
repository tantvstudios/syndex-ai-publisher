import { axiosInstance } from "@source/config/axios-instance";

type AuthBase = {
	email: string;
	password: string;
};

type AuthRegister = AuthBase & {
	firstName: string;
	lastName: string;
};

export const authLogin = async (body: AuthBase) => {
	const response = await axiosInstance.post("/auth/login", body);
	return response.data;
};

export const authRegister = async (body: AuthRegister) => {
	const response = await axiosInstance.post("/auth/register", body);
	return response.data;
};
