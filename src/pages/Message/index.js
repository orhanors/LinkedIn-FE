import React, { useState, useEffect } from "react";
import { getLocalStorage } from "../../helpers/localStorage";

import io from "socket.io-client";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getCurrentUser } from "../../api/profile";
import "./styles.scss";
const connOpt = {
	transports: ["websocket"],
};

let socket = io("https://striveschool-api.herokuapp.com", connOpt);

function Message(props) {
	const userId = getLocalStorage("user")?._id;
	const [chatUserId, setChatUserId] = useState("");
	const [friends, setFriends] = useState([]);
	const [userList, setUserList] = useState([]);
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	const currentUser = async () => {
		const response = await getCurrentUser(userId);

		if (response.data) {
			setFriends(response.data.friends);
		}
	};
	useEffect(() => {
		currentUser();
		socket.on("bmsg", (msg) =>
			setMessages((messages) => messages.concat(msg))
		);

		socket.on("connect", () => console.log("Connected to socket"));
	}, []);

	const handleMessage = (e) => {
		setMessage(e.currentTarget.value);
	};

	const sendMessage = (e) => {
		e.preventDefault();
		if (message !== "") {
			socket.emit("bmsg", {
				user: userId,
				message: message,
			});
			socket.emit("setUsername", { username: userId });
			socket.emit("list", {});
			socket.emit("chatmessage", {
				to: chatUserId,
				text: e.target.value,
			});
			setMessage("");
		}
	};

	function messagingBody() {
		const converIdToUser = (id) => {
			const user = friends.find((friend) => friend._id === id);

			return user.name + " " + user.surname;
		};
		return (
			<div>
				<div className='App'>
					<ul id='messages'>
						{messages.map((msg, i) => (
							<li
								key={i}
								className={
									msg.userId === userId
										? "ownMessage"
										: "message"
								}>
								<strong>{msg.user}</strong> {msg.message}
							</li>
						))}
					</ul>
					<form id='chat' onSubmit={sendMessage}>
						<input
							autoComplete='off'
							value={message}
							onChange={handleMessage}
						/>
						<Button type='submit' className='rounded-0'>
							Send
						</Button>
					</form>
				</div>
			</div>
		);
	}
	return (
		<Container>
			<div className='msg-container'>
				<Row>
					<Col md={4}>
						<LeftMessagingSide
							friends={friends}
							setChatUser={(e) => {
								setChatUserId(e.target.id);
								console.log("chat user id: ", e.target.id);
							}}
						/>
					</Col>
					<Col md={6}>{messagingBody()}</Col>
				</Row>
			</div>
		</Container>
	);
}

function LeftMessagingSide(props) {
	const { friends, setChatUser } = props;
	return (
		<div className='messagin-left-container'>
			<Container>
				<Row>
					<Col sm={12}>
						<h5>Messaging</h5>
					</Col>
					<Col>
						<input type='text' />
					</Col>

					{friends.map((friend) => {
						return (
							<Col sm={12}>
								<div
									className='msg-user d-flex mt-2'
									id={friend._id}
									onClick={setChatUser}>
									<img
										style={{
											width: 25,
											height: 25,
											borderRadius: "50%",
										}}
										alt='msg-avatar'
										src={friend.image}
									/>
									<div className='ml-2'>
										<h6>
											{friend.name + " " + friend.surname}
										</h6>
									</div>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
}

export default Message;
