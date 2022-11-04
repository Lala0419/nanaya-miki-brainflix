import Play from "../../assets/icons/play.svg";
import Upload from "../../assets/icons/upload.svg";
import Avater from "../../assets/images/Mohan-muruge.jpg";
import Search from "../../assets/icons/search.svg";
import React from "react";
import "./header.scss";

function Header() {
	return (
		<>
			<div className="header__container">
				<div className="header__top">
					<img
						className="header__top-play"
						src={Play}
						alt="play"
					/>
					<h1 className="header__top-title">BrainFlix</h1>
				</div>
				<div className="header__middle">
					<input
						className="header__middle-input"
						placeholder="Search"
					/>
					<img
						className="header__middle-input-scope"
						src={Search}
						alt="scope"
					/>
					<img
						className="header__middle-avater"
						src={Avater}
						alt="avater"
					/>
				</div>
				<button className="header__bottom">
					<img
						src={Upload}
						alt="upload"
						className="header__bottom-arrow"
					/>
					<h2 className="header__bottom-txt">UPLOAD</h2>
				</button>
				<img
					className="header__bottom-avater"
					src={Avater}
					alt="avater"
				/>
			</div>
		</>
	);
}

export default Header;
