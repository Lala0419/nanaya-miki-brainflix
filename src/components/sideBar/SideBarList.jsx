import React from "react";
import { Link } from "react-router-dom";
import "./sideBarList.scss";

export const SideBarList = ({ videos, onVideoClick }) => {
	return (
		<div className="sidebar__list-container">
			<h2 className="sidebar__list-title">NEXT VIDOES</h2>
			{videos.map((video) => (
				<div
					className="sidebar__container"
					key={video.id}
					// onClick={(event) => onVideoClick(event, video.id)}
				>
					<Link
						to={`/video/${video.id}`}
						className="sidebar__img-container"
					>
						<img
							src={video.image}
							alt={video.title}
							className="sidebar__img"
						/>
					</Link>
					<div className="sidebar__desc">
						<h2 className="sidebar__title">{video.title}</h2>
						<h3 className="sidebar__channel">{video.channel}</h3>
					</div>
				</div>
			))}
		</div>
	);
};
