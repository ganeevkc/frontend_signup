import React from "react";
import { Sign } from "./components/Sign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Sign />} />
			</Routes>
		</Router>
	);
};
export default App;
