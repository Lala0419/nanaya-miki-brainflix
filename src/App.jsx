import React from "react";
import Header from "./components/header/Header";
import "./styles/App.scss";
import { Home } from "./pages/Home/Home";
import { Upload } from "./pages/Upload/Upload";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/:videoId"
						element={<Home />}
					/>
					<Route
						path="/upload"
						element={<Upload />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
