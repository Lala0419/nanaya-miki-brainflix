import React, { useEffect, useState } from "react";
import { CommentList } from "../../components/comments/CommentList";
import { Hero } from "../../components/hero/Hero";
import { ItemDetail } from "../../components/item_detail/ItemDetail";
import { SideBarList } from "../../components/sideBar/SideBarList";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Home.scss";

export const Home = () => {
	const apiKey = process.env.REACT_APP_API_KEY;

	const params = useParams();
	const [videoId, setVideoId] = useState("");

	const [videos, setVideos] = useState([]);
	const [videoDetails, setVideoDetails] = useState(null);
	//empty = true null= false

	useEffect(() => {
		const fetchVideos = async () => {
			const { data } = await axios.get(
				`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`
			);
			setVideos(data.filter((video) => video.id !== videoId));
		};
		fetchVideos();

		const fetchVideoDetail = async () => {
			const { data } = await axios.get(
				`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`
			);
			setVideoDetails(data);
		};
		if (videoId !== "") {
			fetchVideoDetail();
		}
	}, [videoId, apiKey]);

	useEffect(() => {
		params.videoId
			? setVideoId(params.videoId)
			: setVideoId("84e96018-4022-434e-80bf-000ce4cd12b8");
	}, [params.videoId]);

	if (!videoDetails) {
		return <div className="loading">Loading...</div>;
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
					<SideBarList videos={videos} />
				</div>
			</div>
		</>
	);
};
