//data

import videos from "../data/videos.json";
import videoDetails from "../data/video-details.json";

export const getVideos = (videoId) => {
	return videos.filter((video) => video.id !== videoId);
};

export const getVideoDetails = (videoId) => {
	return videoDetails.find((video) => video.id === videoId);
};
