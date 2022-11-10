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
					src={videoImg.video}
					type="video/mp4"
				></source>
			</video>
			{/* <img
				className="hero__play"
				src={Play}
				alt="play"
			/>
			<img
				className="hero__scrub"
				src={Scrubber}
				alt="scrub"
			/>
			<img
				className="hero__close"
				src={Close}
				alt="close_fullscreen"
			/>
			<img
				className="hero__volumeup"
				src={VolumeUp}
				alt="volume_up"
			/> */}
		</div>
	);
};
