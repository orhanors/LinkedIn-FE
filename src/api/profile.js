import axios from "axios";
import { getLocalStorage } from "../helpers/localStorage";

const { REACT_APP_BE_URL } = process.env;

const config = {
	headers: {
		"Content-type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
};

export const getAllUsers = async () => {
	try {
		const response = await axios.get(`${REACT_APP_BE_URL}/profile`);

		return response.data;
	} catch (error) {
		console.log("Get all users error: ", error);
		return error?.response?.data;
	}
};
export const getCurrentUser = async (endpoint) => {
	try {
		const response = await axios.get(
			`${REACT_APP_BE_URL}/profile/${endpoint}`
		);

		return response.data;
	} catch (error) {
		console.log("Get current user error: ", error);
		return error?.response?.data;
	}
};

export const editCurrentUser = async (data) => {
	const currentUserId = getLocalStorage("user")?._id;
	try {
		const response = await axios.put(
			`${REACT_APP_BE_URL}/profile/${currentUserId}`,
			data,
			config
		);
		return response.data;
	} catch (error) {
		console.log("Edit current user error: ", error);
		return error.response.data;
	}
};

export const addProfileImage = async (data) => {
	const currentUserId = getLocalStorage("user")?._id;
	try {
		const response = await axios.post(
			`${REACT_APP_BE_URL}/profile/${currentUserId}/picture`,
			data,
			config
		);
		return response.data;
	} catch (error) {
		console.log("Edit current user error: ", error);
		return error.response.data;
	}
};
