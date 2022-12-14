import React, { useState } from "react";
import "./commentList.scss";
import Avater from "../../assets/images/Mohan-muruge.jpg";
import Publish from "../../assets/icons/add_comment.svg";
import TrashCan from "../../assets/icons/trash-can.png";

export const CommentList = ({
	videoComments,
	onclickAddComment,
	onclickDeleteComment,
}) => {
	const [comment, setComment] = useState("");
	const [hasErrorMessage, setHasErrorMessage] = useState(false);

	const handleCommentClick = () => {
		if (comment === "") {
			setHasErrorMessage(true);
			setTimeout(() => {
				setHasErrorMessage(false);
			}, 2000);
		} else {
			setHasErrorMessage(false);
		}
	};

	const onCommentChange = (e) => {
		setComment(e.target.value);
		setHasErrorMessage(false);
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		if (!comment) {
			return;
		} else {
			onclickAddComment(comment);
		}
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

	return (
		<section className="comment">
			<div className="comment__title">
				{videoComments.length}
				Comments
			</div>
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
								name="comment"
								onChange={onCommentChange}
								placeholder="Add a new comment"
								className={`comment__form-input comment__form-input--comment ${
									hasErrorMessage && "comment__form-input--error"
								}`}
							></textarea>
						</div>
					</div>
					<button
						id="comment__button"
						className="comment__button"
						onClick={handleCommentClick}
					>
						COMMENT
						<img
							src={Publish}
							alt="plus"
							className="comment__button--plus"
						/>
					</button>
					{hasErrorMessage && (
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
								<div
									className="newComment__trashcan"
									onClick={() => onclickDeleteComment(comment.id)}
								>
									<img
										className="newComment__trashcan-img"
										src={TrashCan}
										alt="trash-can"
									></img>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
