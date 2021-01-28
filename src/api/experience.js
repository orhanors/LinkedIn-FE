import axios from "axios";
import { getLocalStorage } from "../helpers/localStorage";

const { REACT_APP_BE_URL } = process.env;
const config = {
	headers: {
		"Content-type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
};

const userId = getLocalStorage("user")?._id;
export const postExperience = async (data) => {
	try {
		const response = await axios.post(
			`${REACT_APP_BE_URL}/profile/${userId}/experiences`,
			data,
			config
		);

		if (!response.errors) {
			return response.data;
		} else {
			return response.data;
		}
	} catch (error) {
		console.log("Error in signup fetching", error);
		console.log("error response data", error.response.data);
		return error.response.data;
	}
};

export const editExperience = async (data, experienceId) => {
	try {
		const response = await axios.put(
			`${REACT_APP_BE_URL}/profile/${userId}/experiences/${experienceId}`,
			data,
			config
		);

		if (!response.errors) {
			return response.data;
		} else {
			return response.data;
		}
	} catch (error) {
		console.log("Error in signup fetching", error);
		console.log("error response data", error.response.data);
		return error.response.data;
	}
};

export const addExperienceImage = async (data, experienceId) => {
	try {
		const response = await axios.post(
			`${REACT_APP_BE_URL}/profile/${userId}/experiences/${experienceId}/picture`,
			data,
			config
		);
		return response.data;
	} catch (error) {
		console.log("Add experience image: ", error);
		return error.response.data;
	}
};
