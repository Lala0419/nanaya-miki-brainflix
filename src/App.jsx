import React, { useEffect, useState } from "react";
import { CommentList } from "./components/comments/CommentList";
// import Header from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { ItemDetail } from "./components/item_detail/ItemDetail";
import { SideBarList } from "./components/sideBar/SideBarList";
// import { getVideoDetails, getVideos } from "./utils/utils";
// import "./styles/App.scss";
import axios from "axios";

function App() {
	const apiKey = process.env.REACT_APP_API_KEY;

	const defaultId = "84e96018-4022-434e-80bf-000ce4cd12b8";
	const [videoId, setVideoId] = useState(defaultId);
	const [videos, setVideos] = useState([]);
	const [videoDetails, setVideoDetails] = useState(null);
	//empty = true null= false

	const handleClick = (event, currentVideoId) => {
		event.preventDefault();
		setVideoId(currentVideoId);
		// setVideos(getVideos(currentVideoId));
		// setVideoDetails(getVideoDetails(currentVideoId));
	};

	useEffect(() => {
		const fetchVideos = async () => {
			const { data } = await axios.get(
				`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`
			);
			// console.log(data);

			// const getVideoDetails = data.find((video) => video.id === videoId);

			// console.log(getVideoDetails);

			// setVideoDetails(getVideoDetails);

			setVideos(data.filter((video) => video.id !== videoId));
		};

		fetchVideos();
	}, [videoId, apiKey]);

	useEffect(() => {
		const fetchVideoDetail = async () => {
			const { data } = await axios.get(
				`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`
			);
			// console.log(data);

			// const getVideoDetails = data.find((video) => video.id === videoId);

			// console.log(getVideoDetails);

			setVideoDetails(data);

			// setVideos(data.filter((video) => video.id !== videoId));
		};

		fetchVideoDetail();
	}, [videoId, apiKey]);

	console.log(videoDetails);

	if (!videoDetails) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Hero videoImg={videoDetails} />
			<div className="app__container">
				<div className="app__left-container">
					<ItemDetail videoDetail={videoDetails} />
					<CommentList videoComments={videoDetails.comments} />
				</div>
				<div className="app__right-container">
					<SideBarList
						videos={videos}
						onVideoClick={handleClick}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
