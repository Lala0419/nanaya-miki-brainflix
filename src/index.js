import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Header from "./components/header/Header";
import { Upload } from "./pages/Upload/Upload";
import "./styles/App.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<App />}
				/>
				<Route
					path="/upload"
					element={<Upload />}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
