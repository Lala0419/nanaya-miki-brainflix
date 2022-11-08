// import axios from "axios";
import React, { useState } from "react";
import { CommentList } from "../../components/comments/CommentList";
import { Hero } from "../../components/hero/Hero";
import { ItemDetail } from "../../components/item_detail/ItemDetail";
import { SideBarList } from "../../components/sideBar/SideBarList";
import { getVideoDetails, getVideos } from "../../utils/utils";

const URL = `https://project-2-api.herokuapp.com/?api_key=${process.env.REACT_APP_API_KEY}`;

const getSidebarVideos = URL;
console.log(getSidebarVideos);
// const getVideoDetail = (videoId) => `${URL("videos")}/${videoId}`;
// console.log(getVideoDetail("84e96018-4022-434e-80bf-000ce4cd12b8"));
export const Home = () => {
	const defaultId = "84e96018-4022-434e-80bf-000ce4cd12b8";
	const [videoId, setVideoId] = useState(defaultId);
	const [videos, setVideos] = useState(getVideos(videoId));
	const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));

	const handleClick = (event, currentVideoId) => {
		event.preventDefault();
		setVideoId(currentVideoId);
		setVideos(getVideos(currentVideoId));
		setVideoDetails(getVideoDetails(currentVideoId));
	};

	// useEffect(() => {
	// 	axios.get(getSidebarVideos).then((response) => {
	// 		setVideoDetails(response.data);
	// 	});
	// });

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
