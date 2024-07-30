import React, { useState } from "react";
import "./sign.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getApi } from "../shared/api-client.js";
export const Sign = () => {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await getApi({
				name,
				username,
				password,
			});
			console.log(response.data.message);
			if (response.data.success) {
				alert("Sign Up successful!");
				navigate("/dashboard");
			} else {
				console.error("Sign Up failed.");
			}
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="container">
			<div className="header">
				<div className="text">Sign Up</div>
				<div className="underline"></div>
			</div>
			<div className="inputs">
				<div className="input">
					<input
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="input">
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="input">
					<form onSubmit={handleSubmit}>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</form>
				</div>
			</div>
			<div className="submit-container">
				<form onSubmit={handleSubmit}>
					<button className="submit">Sign up</button>
				</form>
			</div>
		</div>
	);
};
