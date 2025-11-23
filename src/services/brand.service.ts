import { axiosInstance } from "@source/config/axios-instance";

type TBrand = {
	name: string;
	description: string;
	logo: string;
	website: string;
	industry: string;
	location: string;
};

export const addBrand = async (brand: TBrand) => {
	const response = await axiosInstance.post("/brands", brand);
	return response.data;
};
