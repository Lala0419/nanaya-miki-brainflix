import React from "react";
import "./hero.scss";

export const Hero = ({ videoImg }) => {
	return (
		<div className="hero__container">
			<video
				controls
				poster={videoImg.image}
				className="hero__img"
				alt={videoImg.title}
			>
				<source
					src={videoImg.image}
					type="video/mp4"
				></source>
			</video>
		</div>
	);
};
