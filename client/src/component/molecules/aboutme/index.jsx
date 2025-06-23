import React from "react";

import "./styles.scss";

const AboutMe = () => {
	return (
		<div className="aboutme">
			<div className="left">
				<img src="/images/projects/NihoLearn.jpg" alt="profile picture" />
			</div>
			<div className="right">
				<h1>About Me</h1>
				<p>
					I am a university student currently learning to code. I have a passion for technology and enjoy exploring new programming languages and frameworks.
				</p>
				<p>
					In my free time, I like to work on personal projects, contribute to open-source, and share my knowledge with others through tutorials and blog posts.
				</p>
			</div>
		</div>
	)
}

export default AboutMe;