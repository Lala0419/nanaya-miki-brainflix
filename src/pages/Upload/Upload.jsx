import React, { useState } from "react";
import "./Upload.scss";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Publish from "../../assets/icons/publish.svg";
import { Link, useNavigate } from "react-router-dom";

export const Upload = ({ setUser }) => {
	const [name, setName] = useState("");
	const [comment, setComment] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!name || !comment) {
			alert(" Please filled in both sections!");
		} else {
			setUser({ name: name, comment: comment });
			navigate("/uploadcomp");
		}
	};

	return (
		<>
			<section className="upload">
				<div className="upload__top">
					<h1 className="upload__top-title">Upload Video</h1>
				</div>
				<div className="upload__middle">
					<div className="upload__middle-img-container">
						<h2 className="upload__middle-title">VIDEO THUMBNAIL</h2>
						<img
							src={Thumbnail}
							alt="bycle"
							className="upload__middle-img"
						/>
					</div>
					<div className="upload__middle-disc-box">
						<form
							onSubmit={handleSubmit}
							className="upload__middle-form"
						>
							<div className="upload__middle-list-container">
								<div className="upload__middle-list">
									<label
										htmlFor="name"
										className="upload__middle-form-label"
									>
										title your video
									</label>
									<input
										type="text"
										placeholder="Add a title to your video"
										className="upload__middle-form-input"
										id="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className="upload__middle-list">
									<label
										htmlFor="comment"
										className="upload__middle-form-label"
									>
										add a video description
									</label>
									<textarea
										id="comment"
										name="comment"
										placeholder="Add a description to your video"
										className="upload__middle-form-input upload__middle-form-input--comment"
										minLength="5"
										value={comment}
										onChange={(e) => setComment(e.target.value)}
									></textarea>
								</div>
							</div>
							<div className="upload__bottom">
								<button
									id="comment__button"
									className="upload__bottom-button"
								>
									PUBLISH
									<img
										className="upload__bottom-publish"
										src={Publish}
										alt="publish"
									/>
								</button>

								<h2 className="upload__bottom-cancel">
									<Link
										to="/home"
										className="upload__bottom-cancel-link"
									>
										CANCEL
									</Link>
								</h2>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};
