import React, { useState } from "react";
import Header from "./components/header/Header";
import "./styles/App.scss";
import { Home } from "./pages/Home/Home";
import { Upload } from "./pages/Upload/Upload";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UploadComp } from "./pages/UploadComp/UploadComp";
import { ProtectedRoute } from "./pages/ProtectedRoute/ProtectedRoute";

function App() {
	const [user, setUser] = useState(null);
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Navigate to="/home" />}
					/>
					<Route
						path="/home"
						element={<Home />}
					/>
					<Route
						path="/:videoId"
						element={<Home />}
					/>
					<Route
						path="/upload"
						element={<Upload setUser={setUser} />}
					/>
					<Route
						path="/uploadcomp"
						element={
							<ProtectedRoute user={user}>
								<UploadComp user={user} />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
