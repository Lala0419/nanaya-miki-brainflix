import React, { useState } from "react";
import "./commentList.scss";
import Avater from "../../assets/images/Mohan-muruge.jpg";
import Publish from "../../assets/icons/add_comment.svg";

export const CommentList = ({ videoComments }) => {
	const [comment, setComment] = useState("");
	const [touchFlag, setTouchFlag] = useState(false);

	const onCommentChange = (e) => {
		setTouchFlag(true);
		setComment(e.target.value);
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		if (!comment) {
			setTouchFlag(true);
			return;
		}
		addComment(e.target.comment.value);
	};

	const formattedDate = (timeStamp) => {
		return new Date(timeStamp)
			.toLocaleString("en-US", {
				timeZone: "UTC",
				month: "2-digit",
				day: "2-digit",
				year: "numeric",
			})
			.replace(/-/g, "/");
	};

	const addComment = (event) => {
		event.preventDefault();

		event.target.reset();
	};

	return (
		<section className="comment">
			<div className="comment__title">{videoComments.length} Comments</div>
			<div className="comment__top-container">
				<img
					src={Avater}
					alt="avator"
					className="comment__icon"
				/>
				<form
					className="comment__form"
					onSubmit={onFormSubmit}
				>
					<div className="comment__list-container">
						<div className="comment__list">
							<label
								id="comment"
								className="comment__form-label"
							>
								JOIN THE CONVERSATION
							</label>
							<textarea
								id="comment"
								onChange={onCommentChange}
								name="comment"
								placeholder="Add a new comment"
								className={`comment__form-input comment__form-input--comment ${
									touchFlag && !comment && "comment__form-input--error"
								}`}
								value={comment}
							></textarea>
						</div>
					</div>
					<button
						id="comment__button"
						className="comment__button"
					>
						COMMENT
						<img
							src={Publish}
							alt="plus"
							className="comment__button--plus"
						/>
					</button>
					{touchFlag &&
						!comment &&
						setTimeout(() => {
							setTouchFlag(false);
						}, 2000) && (
							<p className="text__error">This field can not be empty!</p>
						)}
				</form>
			</div>
			<div className="newComment-container">
				{videoComments.map((comment) => (
					<div
						className="newComment"
						key={comment.id}
					>
						<div className="newComment__icon"></div>
						<div className="newComment__list-container">
							<div className="newComment__list">
								<div className="newComment__top">
									<h2
										className="newComment__name"
										id="newComment__name"
									>
										{comment.name}
									</h2>
									<span className="newComment__date">
										{formattedDate(comment.timestamp)}
									</span>
								</div>
								<h3 className="newComment__comment">{comment.comment}</h3>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
