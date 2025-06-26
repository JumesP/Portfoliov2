import react from "react";
import './styles/Main.scss';

import blob from "../images/blob/blob.svg";
import blob_shadow from "../images/blob/blob_shadow.svg";

const Main = () => {
	return (
		<div className="MainContent">
			<div className="Content">
				<section className="blob-box">
				<div className="blob">
					<img
						src={blob}
						alt="Floating Blob"
					></img>
				</div>
				<div className="blob">
					<img
						src={blob_shadow}
						alt="Floating Blob Shadow"
					></img>
				</div>
			</section>
				<div className="ContentText">
					<h1 className="Heading">James Price</h1>
					<h2 className="Description">University Student Learning to Code!</h2>
					<p>
						Click on the links above to navigate to other pages
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;

