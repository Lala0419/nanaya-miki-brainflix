import React from "react";
import { Link } from "react-router-dom";
import Check from "../../assets/images/check.png";

export const UploadComp = ({ user }) => {
	return (
		<div className="uploadcomp-container">
			<img
				src={Check}
				alt="check"
				className="uploadcomp-img"
			/>
			<h1 className="uploadcomp-title">Submission Successful</h1>
			<p className="uploadcomp-sub">Thank you for subitting our form</p>
			<h3 className="uploadcomp-name">{user?.name}</h3>
			<Link
				to="/"
				className="uploadcomp-button"
			>
				Go back to Home
			</Link>
		</div>
	);
};
