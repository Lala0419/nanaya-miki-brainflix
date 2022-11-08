import React from "react";
import "./Upload.scss";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Publish from "../../assets/icons/publish.svg";

export const Upload = () => {
	return (
		<>
			<section className="upload">
				<div className="upload__top">
					<h1 className="upload__top-title">Upload Video</h1>
				</div>
				<div className="upload__middle">
					<h2 className="upload__middle-title">VIDEO THUMBNAIL</h2>
					<img
						src={Thumbnail}
						alt="bycle"
						className="upload__middle-img"
					/>
					<div className="upload__middle-disc-box">
						<form class="upload__middle-form">
							<div class="upload__middle-list-container">
								<div class="upload__middle-list">
									<label
										for="name"
										class="upload__middle-form-label"
									>
										title your video
									</label>
									<input
										type="text"
										placeholder="Add a title to your video"
										class="upload__middle-form-input"
										id="name"
									/>
								</div>
								<div class="upload__middle-list">
									<label
										for="comment"
										class="upload__middle-form-label"
									>
										add a video description
									</label>
									<textarea
										id="comment"
										name="comment"
										placeholder="Add a description to your video"
										class="upload__middle-form-input upload__middle-form-input--comment"
										minlength="5"
									></textarea>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="upload__bottom">
					<button
						id="comment__button"
						className="upload__bottom-button"
					>
						PUBLISH
					</button>
					<img
						className="upload__bottom-publish"
						src={Publish}
						alt="publish"
					/>
					<h2 className="upload__bottom-cancel">CANCEL</h2>
				</div>
			</section>
		</>
	);
};
