import React from "react";
import { Link } from "react-router-dom";
import "./sideBarList.scss";

export const SideBarList = ({ videos }) => {
	console.log(videos);
	return (
		<div className="sidebar__list-container">
			<h2 className="sidebar__list-title">NEXT VIDOES</h2>
			{videos &&
				videos.map((video) => (
					<Link
						to={`/${video.id}`}
						key={video.id}
						className="sidebar__link"
					>
						<div className="sidebar__container">
							<img
								src={video.image}
								alt={video.title}
								className="sidebar__img"
							/>

							<div className="sidebar__desc">
								<h2 className="sidebar__title">{video.title}</h2>
								<h3 className="sidebar__channel">{video.channel}</h3>
							</div>
						</div>
					</Link>
				))}
		</div>
	);
};
