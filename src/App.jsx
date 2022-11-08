import React from "react";
import Header from "./components/header/Header";
import "./styles/App.scss";
import { Home } from "./pages/Home/Home";
import { Upload } from "./pages/Upload/Upload";

function App() {
	return (
		<>
			<Header />
			<Home />
			<Upload />
		</>
	);
}

export default App;
