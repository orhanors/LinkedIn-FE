import axios from "axios";
import { getLocalStorage } from "../helpers/localStorage";

const { REACT_APP_BE_URL } = process.env;
export const getCurrentUser = async () => {
	const currentUserId = getLocalStorage("user")._id;
	console.log("iddddd", currentUserId);
	try {
		const response = await axios.get(
			`${REACT_APP_BE_URL}/profile/${currentUserId}`
		);
		console.log("Current user: ", response.data);
		return response.data;
	} catch (error) {
		console.log("Get current user error: ", error);
		return error.response.data;
	}
};
