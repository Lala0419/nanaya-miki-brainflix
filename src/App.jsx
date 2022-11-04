import React, { useState } from "react";
import { CommentList } from "./components/comments/CommentList";
import Header from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { ItemDetail } from "./components/item_detail/ItemDetail";
import { SideBarList } from "./components/sideBar/SideBarList";
import { getVideoDetails, getVideos } from "./utils/utils";

function App() {
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

	return (
		<>
			<Header />
			<Hero videoImg={videoDetails} />
			<ItemDetail videoDetail={videoDetails} />
			<CommentList videoComments={videoDetails.comments} />
			<SideBarList
				videos={videos}
				onVideoClick={handleClick}
			/>
		</>

		/*
    
    <ItemDetailList /> <ItemDetail />
    <CommentList /> <Comment />
    <SideBarList /> <SideBarItem />

    */
	);
}

export default App;
