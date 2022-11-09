import axios from "axios";
import React, { useState } from "react";
import { CommentList } from "../../components/comments/CommentList";
import { Hero } from "../../components/hero/Hero";
import { ItemDetail } from "../../components/item_detail/ItemDetail";
import { SideBarList } from "../../components/sideBar/SideBarList";
// import { getVideoDetails, getVideos } from "../../utils/utils";

const URL = (endpoint) =>
	`https://project-2-api.herokuapp.com/${endpoint}?api_key=${process.env.REACT_APP_API_KEY}`;

const getVideos = URL("videos");

const getVideoDetails = (videoId) => URL(`videos/${videoId}`);
console.log(getVideos);
console.log(getVideoDetails("84e96018-4022-434e-80bf-000ce4cd12b8"));

export const Home = () => {
	const defaultId = "84e96018-4022-434e-80bf-000ce4cd12b8";
	const [videoId, setVideoId] = useState(defaultId);
	const [videos, setVideos] = useState(getVideos);
	const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));
	console.log(videoDetails);

	const handleClick = (event, currentVideoId) => {
		event.preventDefault();
		setVideoId(currentVideoId);
		setVideos(getVideos(currentVideoId));
		setVideoDetails(getVideoDetails(currentVideoId));
	};

	// useEffect(() => {
	axios.get(getVideos).then((response) => {
		console.log(response.data);
		// setVideos(response.data);
	});

	axios
		.get(getVideoDetails("84e96018-4022-434e-80bf-000ce4cd12b8"))
		.then((response) => {
			console.log(response.data);
			// setVideoDetails(response.data);
		});

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
};
