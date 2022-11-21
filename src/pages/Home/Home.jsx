import React, { useEffect, useState } from "react";
import { CommentList } from "../../components/comments/CommentList";
import { Hero } from "../../components/hero/Hero";
import { ItemDetail } from "../../components/item_detail/ItemDetail";
import { SideBarList } from "../../components/sideBar/SideBarList";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Home.scss";
import "../UploadComp/UploadComp.scss";

export const Home = () => {
	const params = useParams();
	const [videoId, setVideoId] = useState("");

	const URL = process.env.REACT_APP_URL;

	const [videos, setVideos] = useState([]);
	const [videoDetails, setVideoDetails] = useState(null);

	useEffect(() => {
		const fetchVideos = async () => {
			const { data } = await axios.get(`${URL}/videos`);

			setVideos(data.filter((video) => video.id !== videoId));
		};
		fetchVideos();

		const fetchVideoDetail = async () => {
			const { data } = await axios.get(`${URL}/videos/${videoId}`);
			setVideoDetails(data);
		};
		if (videoId !== "") {
			fetchVideoDetail();
		}
	}, [videoId, URL]);

	useEffect(() => {
		params.videoId
			? setVideoId(params.videoId)
			: setVideoId("84e96018-4022-434e-80bf-000ce4cd12b8");
	}, [params.videoId]);

	if (!videoDetails) {
		return (
			<div className="loading-container">
				<h1 className="loading-message">Loading...</h1>
			</div>
		);
	}

	const handleCommentClick = async (comment) => {
		const { data } = await axios.post(
			`http://localhost:8080/videos/${videoId}/comments`,
			{
				comment: comment,
			}
		);
		setVideoDetails(data);
	};

	const handleDeleteCommentClick = async (commentId) => {
		const { data } = await axios.delete(
			`http://localhost:8080/videos/${videoId}/comments/${commentId}`,
			{
				comment: commentId,
			}
		);

		setVideoDetails(data);
	};

	return (
		<>
			<Hero videoImg={videoDetails} />
			<div className="app__container">
				<div className="app__left-container">
					<ItemDetail videoDetail={videoDetails} />
					<CommentList
						videoComments={videoDetails.comments}
						onclickAddComment={handleCommentClick}
						onclickDeleteComment={handleDeleteCommentClick}
					/>
				</div>
				<div className="app__right-container">
					<SideBarList videos={videos} />
				</div>
			</div>
		</>
	);
};
