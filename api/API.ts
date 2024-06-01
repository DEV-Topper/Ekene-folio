import axios, { AxiosResponse } from "axios";

export const getRepos = async (page?: number) => {
	const URL: string = `https://api.github.com/users/DEV-Topper/repos?page=${
		page ? page : 1
	}`;

	try {
		return await axios
			.get(URL)
			.then((res: AxiosResponse<any, any>) => {
				return res.data;
			});
	} catch (error) {
		return [];
	}
};
