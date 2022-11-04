import React from "react";
import "./commentList.scss";
import Avater from "../../assets/images/Mohan-muruge.jpg";
import Publish from "../../assets/icons/add_comment.svg";

export const CommentList = ({ videoComments }) => {
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

	const clearError = (taskAddForm, taskAddInput, taskAddError) => {
		taskAddForm.removeChild(taskAddError);
		taskAddInput.classList.remove("comment__form-input--error");
	};

	const showError = () => {
		const taskAddForm = document.querySelector(".comment__form");
		const taskAddInput = document.querySelector(".comment__form-input");

		taskAddInput.classList.add("comment__form-input--error");

		const taskAddError = document.createElement("p");
		taskAddError.textContent = "These fields can not be empty!";
		taskAddError.classList.add("text__error");
		taskAddForm.appendChild(taskAddError);

		setTimeout(() => clearError(taskAddForm, taskAddInput, taskAddError), 2000);
	};

	const addComment = (event) => {
		event.preventDefault();
		const inputCommentValue = event.target.comment.value;
		if (inputCommentValue.length === 0) {
			showError();
			return;
		}

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
					onSubmit={(event) => addComment(event)}
				>
					<div className="comment__list-container">
						<div className="comment__list">
							<label
								id="comment"
								className="comment__form-label"
							>
								JOIN THE CONVERSATION
							</label>
							<input
								id="comment"
								name="comment"
								placeholder="Add a new comment"
								className="comment__form-input comment__form-input--comment"
							></input>
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
