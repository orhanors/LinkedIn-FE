import axios from "axios";
import { getLocalStorage } from "../helpers/localStorage";

const { REACT_APP_BE_URL } = process.env;

const config = {
	headers: {
		"Content-type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
};

export const friendRequest = async (requestedUserId) => {
	const currentUserId = getLocalStorage("user")?._id;
	try {
		const response = await axios.post(
			`${REACT_APP_BE_URL}/profile/${currentUserId}/request/friend/${requestedUserId}`,
			config
		);

		return response.data;
	} catch (error) {
		console.log("Send friend request error: ", error.response.data);
		return error.response.data;
	}
};

export const acceptFriendRequest = async (requestedUserId) => {
	const currentUserId = getLocalStorage("user")?._id;
	try {
		const response = await axios.post(
			`${REACT_APP_BE_URL}/profile/${currentUserId}/accept/friend/${requestedUserId}`,
			config
		);

		return response.data;
	} catch (error) {
		console.log("Accept friend request error: ", error.response.data);
		return error.response.data;
	}
};

export const rejectFriendRequest = async (requestedUserId) => {
	const currentUserId = getLocalStorage("user")?._id;
	try {
		const response = await axios.delete(
			`${REACT_APP_BE_URL}/profile/${currentUserId}/reject/friend/${requestedUserId}`
		);

		return response.data;
	} catch (error) {
		console.log("Reject friend request error: ", error.response.data);
		return error.response.data;
	}
};

export const getFriendList = async (userId) => {
	try {
		const response = await axios.get(
			`${REACT_APP_BE_URL}/profile/${userId}/friendlist`
		);

		return response.data;
	} catch (error) {
		console.log("Get friendlist error: ", error.response.data);
		return error.response.data;
	}
};
