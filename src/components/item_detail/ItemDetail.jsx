import React from "react";
import Views from "../../assets/icons/views.svg";
import Likes from "../../assets/icons/likes.svg";
import "./itemDetail.scss";

export const ItemDetail = ({ videoDetail }) => {
	const formattedDate = new Date(videoDetail.timestamp)
		.toLocaleString("en-US", {
			timeZone: "UTC",
			month: "2-digit",
			day: "2-digit",
			year: "numeric",
		})
		.replace(/-/g, "/");

	return (
		<div className="detail__container">
			<div className="detail__top">
				<h1 className="detail__top-title">{videoDetail.title}</h1>
			</div>
			<div className="detail__middle">
				<div className="detail__middle-left">
					<span className="detail__middle-channel">
						By {videoDetail.channel}
					</span>
					<span className="detail__middle-date">{formattedDate}</span>
				</div>
				<div className="detail__middle-right">
					<span className="detail__middle-views">
						<div className="detail__middle-views-container">
							<img
								src={Views}
								alt="views"
								className="dateil__middle-views-svg"
							/>
						</div>
						{videoDetail.views}
					</span>
					<span className="detail__middle-likes">
						<div className="detail__middle-likes-container">
							<img
								src={Likes}
								alt="likes"
								className="dateil__middle-likes-svg"
							/>
						</div>
						{videoDetail.likes}
					</span>
				</div>
			</div>
			<div className="detail__bottom">{videoDetail.description}</div>
		</div>
	);
};
