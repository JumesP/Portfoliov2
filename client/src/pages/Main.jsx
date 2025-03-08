import react from "react";
import './styles/Main.scss';

import blob from "../images/blob/blob.svg";
import blob_shadow from "../images/blob/blob_shadow.svg";

import linkedin from "../images/logos/linkedin.png";
import github from "../images/logos/github.png";
import youtube from "../images/logos/youtube.png";
import twitter from "../images/logos/twitter.png";
import stackoverflow from "../images/logos/stackoverflow.png";

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
					<p className="Description">
						Click on the links above to navigate to other pages
					</p>
				</div>
			</div>

			// Image Links
			<div className="link-box">
				<a
					href="https://shorturl.at/dzBIV"
					target="_blank"
					className="links linkedin"
				>
					<img src={linkedin} alt="linkedin" className="link-img" />
				</a>
				<a href="https://github.com/JumesP" target="_blank" className="links">
					<img src={github} alt="github" className="link-img" />
				</a>
				<a
					href="https://www.youtube.com/@Jumescode"
					target="_blank"
					className="links"
				>
					<img src={youtube} alt="youtube" className="link-img" />
				</a>
				<a href="https://twitter.com/JumesCode" target="_blank" class="links">
					<img src={twitter} alt="twitter" className="link-img" />
				</a>
				<a
					href="https://stackoverflow.com/users/22334846/jumes"
					target="_blank"
					className="links"
				>
					<img
						src={stackoverflow}
						alt="stackoverflow"
						className="link-img"
					/>
				</a>
			</div>
		</div>
	);
};

export default Main;
